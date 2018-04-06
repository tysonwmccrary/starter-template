$(document).ready(function () {

    $('h2.slider').on('click', function () {
        $('h2.slider').addClass('animated slideOutRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass('animated slideOutRight');
        });

    });
    $('h2.wobble1').on('click', function () {
        $('h2.wobble1').addClass('animated wobble').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass('animated wobble');
        });

    });
    $('h2.bounce1').on('click', function () {
        $('h2.bounce1').addClass('animated bounce').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass('animated bounce');
        });

    });
    $('h2.flash1').on('click', function () {
        $('h2.flash1').addClass('animated flash').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass('animated flash');
        });

    });
    $('h2.swing1').on('click', function () {
        $('h2.swing1').addClass('animated swing').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass('animated swing');
        });

    });
    $('h2.jello1').on('click', function () {
        $('h2.jello1').addClass('animated jello').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass('animated jello');
        });

    });
    $('h2.zoom1').on('click', function () {
        $('h2.zoom1').addClass('animated zoomIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass('animated zoomIn');
        });

    });
    $('h2.flip1').on('click', function () {
        $('h2.flip1').addClass('animated flip').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass('animated flip');
        });

    });
    $('h2.shake1').on('click', function () {
        $('h2.shake1').addClass('animated shake').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass('animated shake');
        });

    });
    $('h2.tada1').on('click', function () {
        $('h2.tada1').addClass('animated tada').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass('animated tada');
        });

    });
})


