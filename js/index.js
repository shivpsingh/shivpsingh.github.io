// JS Block

let navTrigger = document.getElementById('nav-trigger');
let navitems = document.getElementById('navitems');

navTrigger.addEventListener('click', function() {
    if(navitems.style.display == "" || navitems.style.display == "none") {
        navitems.style.display = "block";
    } else if (navitems.style.display == "block") {
        navitems.style.display = "none";
    }
});