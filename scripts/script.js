// Appears Title Screen
window.addEventListener('load', function () {
    var title_header = document.getElementsByTagName('header')[0];
    var transition_time = 5;
    title_header.style.opacity = '1';
    title_header.style.transitionDuration = transition_time + 's';
});
