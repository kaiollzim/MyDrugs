let clickCount = 0

function tiltCount() {

    if (clickCount == 3) {
        $('body').addClass('blur');        
    }

    if (clickCount == 5) {
        $('#home').addClass('lsd-color');
        $('.header').addClass('nav-fall');
        $('.shop-btn').addClass('nav-fall');
    }

    if (clickCount == 7) {

        $('body').addClass('vibrate');
        $('p').text('Buy more! Buy more! Buy more! Buy more! Buy more!');
    }

    clickCount ++

    console.log(clickCount)

}