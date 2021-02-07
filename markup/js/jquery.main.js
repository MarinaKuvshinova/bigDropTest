jQuery(function() {
    initCarousels();
    initDropDownClasses();
    initOpenClose();
});

//carousels
let initCarousels = () => {
    $('.carousel')
        .slick({
            infinite: true,
            slidesToShow: 1,
            dots: false,
            arrows: false,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            fade: true
        });
}

// add classes if item has dropdown
let initDropDownClasses = () => {
    $('#nav ul > li').each(function() {
        let item = $(this);
        let drop = item.find('ul');
        let link = item.find('a').eq(0);
        if(drop.length) {
            item.addClass('has-drop-down');
            if(link.length) link.addClass('has-drop-down-a');
        }
    });
}

//add class on parent if click on button
let initOpenClose = () => {
    $('.nav-button').on('click', function(){
        $(this).parent('nav').toggleClass('open');
    });
    $('.search-button').on('click', function(){
        $(this).parent('div').toggleClass('open');
    });
    $('.popup-open').on('click', function(e){
        e.preventDefault();
        let popupId = $(this).attr("href");
        if (popupId) {
            let $id = $(popupId);
            $id.parent('div').toggleClass('open');
        } else {
            $(this).parent('div').parent('div').toggleClass('open');
        }
    });
}


