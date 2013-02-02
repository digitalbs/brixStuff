//Full size photo gallery
var GALLERY = {
    loadData: function () {
        var galleryRequest = $.ajax({
            url: "../data/gallery.json",
            dataType: "JSON",
            type: "GET"
        });

        galleryRequest.done(function (data) {
            GALLERY.buildGallery(data, function () {
                GALLERY.start();
            });
        });

        galleryRequest.fail(function (jqXHR, textStatus) {
            console.log("Request Failed: " + textStatus);
        });
    },
    buildGallery: function (data, callback) {
        //loop through all data and start building out gallery
        if ($('#photoGallery').length <= 0) {
            var i = 0,
                photoGallery = '<section id="photoGallery"><a href="javascript:void(0);" id="btnCloseGallery"><i class="icon-remove-sign"></i> Close</a></section>',
                photoThumbs = '<ul id="thumbs"></ul>',
                photoPaging = '<div id="paging"><ul></ul></div>',
                photos = data.gallery;

            $('body').append(photoGallery);
            $('#photoGallery').append(photoThumbs, photoPaging);

            for (; i < photos.length; i++) {
                $('#thumbs').append("<li><a href='javascript:void(0);'><img src='" + photos[i].image + "' width='100' alt='" + photos[i].title + "'/></a></li>");



                if (i < 1) {
                    $('#photoGallery').append("<div class='photo active' style='background-image:url(" + photos[i].image + ")'><article><span>" + photos[i].description + "</span></article></div>");
                    $('#paging ul').append("<li><a href='javascript:void(0);' class='active'><i class='icon-camera'></i></a></li>");
                }
                else {
                    $('#photoGallery').append("<div class='photo' style='background-image:url(" + photos[i].image + ")'><article><span>" + photos[i].description + "</span></article></div>");
                    $('#paging ul').append("<li><a href='javascript:void(0);'><i class='icon-camera'></i></a></li>");
                }
            }
            callback();
        }
        else {
            GALLERY.start();
        }
    },
    start: function () {
        var cI;
        $('#photoGallery').animate({
            height: "100%"
        }, 300, function () {
            $('.photo').css('position', 'fixed');
        });
        setTimeout(function () {
            $('#paging').slideDown();
            $('#btnCloseGallery').fadeIn();
            $('.photo article').first().addClass('shown');
        }, 1500);

        $('#paging a').on('click', function () {
            //get index of item clicked
            var currentIndex = $('#paging a').index(this),
                cI = currentIndex;
            $('#paging a').removeClass('active');
            if (cI < currentIndex) {
                GALLERY.left(currentIndex);
            }
            else {
                GALLERY.right(currentIndex);
            }
            $(this).addClass('active');
        });

        $('#btnCloseGallery').on('click', GALLERY.close);
    },
    close: function () {
        $('#photoGallery').fadeOut(500, function () {
            $(this).remove();

        });
    },
    left: function (index) {
        var currentPhoto = $('.photo.active'),
            nextPhoto = $('#photoGallery .photo').eq(index);

        GALLERY.hideActive(currentPhoto, nextPhoto);
    },
    right: function (index) {
        var currentPhoto = $('.photo.active'),
            nextPhoto = $('#photoGallery .photo').eq(index);

        GALLERY.hideActiveRight(currentPhoto, nextPhoto);
    },
    hideActive: function (currentPhoto, nextPhoto) {
        currentPhoto.find('article').removeClass('shown');
        setTimeout(function(){
            currentPhoto.addClass('left').each(function () {
                GALLERY.showNext(currentPhoto, nextPhoto, function () {
                    setTimeout(function () {
                        currentPhoto.removeClass('active left');
                        setTimeout(function () {
                            nextPhoto.find('article').addClass('shown');
                        }, 500);
                    }, 500);
                });
            });
        }, 500);
    },
    hideActiveRight: function (currentPhoto, nextPhoto) {
        currentPhoto.find('article').removeClass('shown');
        setTimeout(function () {
            currentPhoto.addClass('right').each(function () {
                GALLERY.showNext(currentPhoto, nextPhoto, function () {
                    setTimeout(function () {
                        currentPhoto.removeClass('active right');
                        setTimeout(function () {
                            nextPhoto.find('article').addClass('shown');
                        }, 500);
                        
                    }, 500);
                });
            });
        }, 500);
    },
    showNext: function (currentPhoto, nextPhoto, callback) {
        nextPhoto.addClass('active');
        callback();
    },
};

GALLERY.init = function () {
    GALLERY.loadData();
}
