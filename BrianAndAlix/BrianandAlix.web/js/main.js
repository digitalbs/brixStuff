var BA = {
    showMinNav: function () {
        if ($(this).hasClass('active')) {
            $('nav.common').removeClass('active');
            $(this).removeClass('active');
        }
        else 
        {
            $('nav.common').addClass('active');
            $(this).addClass('active');
        }
    },
    closeMainNav: function(){
        $('nav.common').removeClass('active');
        $('#btnNav').removeClass('active');
    },
    getBridalInfo: function (type) {
        var html,
            title,
            url;
        switch (type) {

            case "bridemaids":
                url = "/data/bridesmaids.json";
                title = "The Bridesmaids";
                break;

            case "bros":
                url = "/data/bros.json";
                title = "The Groomsman";
                break;
        }

        var bpRequest = $.ajax({
            url: url,
            dataType: "JSON",
            type: "GET"
        });

        bpRequest.done(function (data) {
            html = "<h3>" + title + "</h3>";
            html += BA.buildBridalParty(data);
            $('#bridalPartyInfo div').html(html);
            $('#bridalPartyInfo li').popover({
                placement: 'top',
                trigger: 'hover'
            });
        });

        bpRequest.fail(function (jqXHR, textStatus) {
            console.log("Request Failed: " + textStatus);
            return false;
        });
        return true;
    },
    buildBridalParty: function (data) {
        var bridalParty = data.bridalparty,
            i = 0,
            bpList;

        bpList = "<ul>";

        for(i; i < bridalParty.length; i +=1)
        {
            bpList += "<li data-title='" + bridalParty[i].name + "' data-content='" + bridalParty[i].bio + "' ><h4>" + bridalParty[i].name + "</h4><img src='" + bridalParty[i].picture + "' width ='100' alt='" + bridalParty[i].name + "' /></li>";
        }

        bpList += "</ul>";
        return bpList;
    },
    submitRSVP: function () {
        event.preventDefault();
        var formData = JSON.stringify($('#rsvpForm form').serializeObject());
        console.log(formData);
        var request = $.ajax({
            url: "../AjaxWebMethods.aspx/submitRSVP",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            data: "{ 'CurrentGuest':" + formData + "}",
            dataType: "json"
        });

        request.done(function (response) {
            alert(response);
        });

        request.fail(function (jqXHR, textStatus) {
            alert("Request failed: " + textStatus);
        });
    }
};

(function () { 
    $(function () { 
        $('#btnNav').on('click', BA.showMinNav);
        $('#btnNavClose').on('click', BA.closeMainNav);
        
        
        $('#bridalParty article').on('click', function () {
            var bridalType = $(this).attr('id'),
                hasParty = false;

            hasParty = BA.getBridalInfo(bridalType);
            if (hasParty) {
                $('#bridalPartyInfo').addClass('active');
            }

        });

        $('#btnCloseBP').on('click', function () {
            $('#bridalPartyInfo').removeClass('active');
        });
    });


    $('#currentGuest li input').on('click', function(e){
        if($(this).val() == "yes")
        {
            $('#additionalGuests').slideDown();
        }   
        else
        {
            $('#additionalGuests').slideUp();
        }
    });

    $('#additionalGuests li input').on('click', function(e){
        if($(this).val() == "yes")
        {
            $('#additionalGuests p').css('visibility', 'visible');
        }   
        else
        {
            $('#additionalGuests p').css('visibility', 'hidden');
        }
    });
    $('#rsvpForm').on('submit', BA.submitRSVP);
    //$('#rsvpForm form').validator();
})();


(function ($) {
    $.fn.serializeObject = function () {

        var self = this,
            json = {},
            push_counters = {},
            patterns = {
                "validate": /^[a-zA-Z][a-zA-Z0-9_]*(?:\[(?:\d*|[a-zA-Z0-9_]+)\])*$/,
                "key": /[a-zA-Z0-9_]+|(?=\[\])/g,
                "push": /^$/,
                "fixed": /^\d+$/,
                "named": /^[a-zA-Z0-9_]+$/
            };


        this.build = function (base, key, value) {
            base[key] = value;
            return base;
        };

        this.push_counter = function (key) {
            if (push_counters[key] === undefined) {
                push_counters[key] = 0;
            }
            return push_counters[key]++;
        };

        $.each($(this).serializeArray(), function () {

            // skip invalid keys
            if (!patterns.validate.test(this.name)) {
                return;
            }

            var k,
                keys = this.name.match(patterns.key),
                merge = this.value,
                reverse_key = this.name;

            while ((k = keys.pop()) !== undefined) {

                // adjust reverse_key
                reverse_key = reverse_key.replace(new RegExp("\\[" + k + "\\]$"), '');

                // push
                if (k.match(patterns.push)) {
                    merge = self.build([], self.push_counter(reverse_key), merge);
                }

                    // fixed
                else if (k.match(patterns.fixed)) {
                    merge = self.build([], k, merge);
                }

                    // named
                else if (k.match(patterns.named)) {
                    merge = self.build({}, k, merge);
                }
            }

            json = $.extend(true, json, merge);
        });

        return json;
    };
})(jQuery);