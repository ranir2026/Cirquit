var $ = function(elem) {
    return document.querySelectorAll(elem);
}

const navbar = $('.navbar')[0];
const collapseNavBtn = $('.collapse-nav')[0];
const navItemsText = $('.nav-item-text');

const content = $('.content')[0];
const topBar = $('.top-bar-container')[0];

const profile = $('.profile')[0];

collapseNavBtn.onclick = function() {
    navbar.classList.toggle('collapsed');

    for (i=0; i<navItemsText.length; i++) {
        navItemsText[i].classList.toggle('inactive');
    }

    content.classList.toggle('collapsed');
    topBar.classList.toggle('collapsed');

    profile.children[0].classList.toggle('inactive');
    profile.children[1].classList.toggle('inactive');
    profile.children[2].classList.toggle('inactive');
}