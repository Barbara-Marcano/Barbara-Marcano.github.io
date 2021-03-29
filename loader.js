window.onload = function() {
    setTimeout(function() {
        $('#onload').fadeOut();
        $('#nav-menu').show();
        $('body').removeClass('hidden');
    },2000);
};