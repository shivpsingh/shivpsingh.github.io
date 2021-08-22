// JS Block

let navTrigger = document.getElementById('nav-trigger');
let navitems = document.getElementById('navitems');

navTrigger.addEventListener('click', function() {
    if(navitems.classList.contains('disp-none')) {
        navitems.classList.remove('disp-none');
        navitems.classList.add('disp-block');
    } else if (navitems.classList.contains('disp-block')) {
        navitems.classList.remove('disp-block');
        navitems.classList.add('disp-none');
    }
});