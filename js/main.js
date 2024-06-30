$(document).ready(function () {

    let $btns = $('.project-area .button-group button');

    $btns.click(function (e) {
        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });

        return false;
    });

    $('.project-area .button-group #btn1').trigger('click');

    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });

    // Owl-carousel
    $('.site-main .about-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            560: {
                items: 2
            }
        }
    });

    // sticky navigation menu
    let nav_offset_top = $('.header_area').height() + 50;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            });
        }
    }

    navbarFixed();

    // Active link toggle
    $('.navbar-nav .nav-link').click(function () {
        $('.navbar-nav .nav-item').removeClass('active');
        $(this).parent().addClass('active');
    });


   function addArrowEventListeners() {
    document.getElementById('left-arrow').addEventListener('click', function() {
        document.querySelector('.button-group').scrollBy({
            top: 0,
            left: -100,
            behavior: 'smooth'
        });
    });

    document.getElementById('right-arrow').addEventListener('click', function() {
        document.querySelector('.button-group').scrollBy({
            top: 0,
            left: 100,
            behavior: 'smooth'
        });
    });
}

function removeArrowEventListeners() {
    document.getElementById('left-arrow').removeEventListener('click', function() {
        document.querySelector('.button-group').scrollBy({
            top: 0,
            left: -100,
            behavior: 'smooth'
        });
    });

    document.getElementById('right-arrow').removeEventListener('click', function() {
        document.querySelector('.button-group').scrollBy({
            top: 0,
            left: 100,
            behavior: 'smooth'
        });
    });
}

function checkScreenWidth() {
    if (window.innerWidth <= 600) {
        addArrowEventListeners();
    } else {
        removeArrowEventListeners();
    }
}

// Check screen width on load
checkScreenWidth();

// Check screen width on resize
window.addEventListener('resize', checkScreenWidth);


});
