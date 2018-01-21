$(document).ready(function () {
    $('#heart > svg').click(function () {
        $(this).toggleClass('scaleColor');
        $(this).parent().siblings('#circle').toggleClass('scaleBorder');
    });
});