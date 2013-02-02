(function($){
		//jQuery protopyal inheritance pattern originally based off of Alex Sexton and Scott Gonzalez
	var Validator = {
		init: function(options, elem){
			this.options = $.extend({}, this.options, options);	
			
			//save elem reference: one for jQuery and one for normal
			var self = this;
			
			this.elem = elem,
			this.$elem = $(elem);

			//on blur, do a check
			this.onblur();

			//on focus, do keycode checks
			this.onfocus();

			//on submit, validate form
			this.onsubmit();
			
			return this;
		},
		options:{
			config: {
				count: 'isValidInteger',
				name: 'isString'
			},
			types: {
				isString: {
				    validate: function (value) {
						return value !== "";
					},
					instructions: "Please enter a name"
				},
				isValidInteger: {
					validate:function(value){
					    value = parseInt(value);
					    return !isNan(value) && value !== "";
					},
					instructions: "Please enter a value"
				}
			},
			messages: []
		},
		onblur:function()
		{
			var self = this;
			$('input', this.elem).not(':submit, :radio').on('blur', function(e){
				var value = $(this).val(),
					type = $(this).attr('data-type'),
					msg;

				self.validate(value, type);
				
				if(self.hasErrors())
				{
					self.showErrors(this, self.options.messages[0]);
				}
				else
				{
					self.removeErrors(this);
				}

				//empty message array
				self.options.messages = [];
			});
		},
		onfocus:function()
		{
			var self = this;
			$('input', this.elem).on('focus', function(e){
				var type = $(this).attr('data-type');
				if(type == "NUMERIC" || type == "INTEGER")
				{
					$(this).on('keypress', function(e){
						return self.isNumberKey(e);
					});
				}
			});
		},
		onsubmit:function(){
			var that = this;
			this.$elem.on('submit', function(e){
				e.preventDefault();
				that.submitform();
			});
		},
		submitform:function()
		{
			var data = this.serializeForm(),
				self = this;	
			this.validateAll(data);

		},
		serializeForm:function(){
			var o = {};
		    var formData = [];

		    //build out custom js object to iterate since we are using property type
			$('input, select', this.elem).not(':submit').each(function(){
				formData.push({name:$(this).attr('data-type'),value:$(this).val()});
			});
		    $.each(formData, function() {
		        if (o[this.name] !== undefined) {
		            if (!o[this.name].push) {
		                o[this.name] = [o[this.name]];
		            }
		            o[this.name].push(this.value || '');
		        } else {
		            o[this.name] = this.value || '';
		        }
		    });
	    	return o; 
		},
		validate: function(input, type)
		{
			var i,
				check,
				result_ok;

			check = this.options.config[type];
			checker = this.options.types[check];

			result_ok = checker.validate(input);
			
			if(!result_ok)
			{
				this.options.messages.push(checker.instructions);
			}

			return this.hasErrors();
		},
		validateAll: function(data)
		{
			var i,
				msg,
				type,
				checker,
				result_ok;

		
			//reset all messages
			this.options.messages = [];
			for(i in data)
			{
				if(data.hasOwnProperty(i)){
					type = this.options.config[i];
					checker = this.options.types[type];
					if(!type)
					{
						continue; //don't need to validate
					}
					if(!checker)
					{
						throw{
							name:"ValidationError",
							message: "No handler to validate type " + type
						};
					}
					
					result_ok = checker.validate(data[i]);
					if(!result_ok)
					{
						msg = checker.instructions;
						this.options.messages.push(msg);
						//for input/select fields
						if($('input[data-type="' + i + '"]', this.elem).closest('div').find('label').length >= 1)
						{
							$('input[data-type="' + i + '"]', this.elem).addClass('error');
						}
						else
						{
							if($('input[data-type="' + i + '"]', this.elem).closest('div').find('span').length <= 0)
							{
								$('input[data-type="' + i + '"]', this.elem).addClass('error');
								$('input[data-type="' + i + '"]', this.elem).closest('div').append('<span class="error">' + msg + '</span>');
							}
						}
					}
					else
					{
						$('input[data-type="' + i + '"]', this.elem).next('span').remove();
						$('input[data-type="' + i + '"]', this.elem).removeClass('error');
					}
				}
			}
			return this.hasErrors();
		},
		isNumberKey:function(evt)
		{
			var e = evt || window.event,
				charCode = e.which || e.keyCode;

			if(charCode > 31 && (charCode < 45 || charCode > 57))
				return false;

			if(e.shiftKey) return false;
				return true;
		},
		hasErrors: function(){
			return this.options.messages.length !== 0;
		},
		showErrors:function(context, msg)
		{
		    if($(context).prev('span').length <= 0)
            {
		        $('<span class="error">' + msg + '</span>').insertBefore(context);
                $(context).addClass('error');
			}
		},
		removeErrors:function(context)
		{
			$(context).removeClass('error');
			$(context).prev('span').remove();
		}

	};


	if(typeof Object.create !== 'function'){
		Object.create = function(o){
			function F() {}
			F.prototype = o;
			return new F();
		};
	}

	//create plugin based on object
	$.plugin = function(name, object){
		$.fn[name] = function(options){
			return this.each(function(){
				if(!$.data(this, name)){
					$.data(this, name, Object.create(object).init(
						options, this));
				}
			});
		};
	};
	
	$.plugin('validator', Validator);
})(jQuery);