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
    }
};

(function () { 
    $(function () { 
        $('#btnNav').on('click', BA.showMinNav);
        $('#btnCloseNav').on('click', BA.closeMainNav);
        $('#btnStartGallery').on('click', GALLERY.init);
    });


    $('#guest li input').on('click', function(e){
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
            $('#additionalGuests p').slideDown();
        }   
        else
        {
            $('#additionalGuests p').slideUp();
        }
    });
})();
