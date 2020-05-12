'use strict';

let toggle = document.querySelectorAll('.toggle'),
    questionParagraph = document.querySelectorAll('.question p'),
    menuIcon = document.querySelector('.menu-icon'),
    menuDrawer = document.querySelector('.menu-drawer'),
    tabBasic = document.querySelector('#tab-basic'),
    tabStandard = document.querySelector('#tab-standard'),
    tabAdvanced = document.querySelector('#tab-advanced'),
    planBasic = document.querySelector('#basic'),
    planStandard = document.querySelector('#standard'),
    planAdvanced = document.querySelector('#advanced'),
    chevron = document.querySelectorAll('.chevron'),
    listWrapper = document.querySelectorAll('.list-wrapper');

menuIcon.addEventListener('click', function() {
    if (menuDrawer.style.display == 'none') {
        menuDrawer.style.display = 'block';
        menuIcon.style.backgroundImage = 'url(../img/close.svg)';
    } else {
        menuDrawer.style.display = 'none';
        menuIcon.style.backgroundImage = 'url(../img/menu.svg)';
    }
});

tabBasic.addEventListener('click', function() {
    if (planBasic.style.display == 'none') {
        planBasic.style.display = 'block';
        planStandard.style.display = 'none';
        planAdvanced.style.display = 'none';
        tabBasic.className = 'tab-active';
        tabStandard.className = 'tab';
        tabAdvanced.className = 'tab';
    }
});

tabStandard.addEventListener('click', function() {
    if (planStandard.style.display == 'none') {
        planBasic.style.display = 'none';
        planStandard.style.display = 'block';
        planAdvanced.style.display = 'none';
        tabBasic.className = 'tab';
        tabStandard.className = 'tab-active';
        tabAdvanced.className = 'tab';
    }
});

tabAdvanced.addEventListener('click', function() {
    if (planAdvanced.style.display == 'none') {
        planBasic.style.display = 'none';
        planStandard.style.display = 'none';
        planAdvanced.style.display = 'block';
        tabBasic.className = 'tab';
        tabStandard.className = 'tab';
        tabAdvanced.className = 'tab-active';
    }
});

chevron.forEach(function(item, i, chevron) {
    chevron[i].addEventListener('click', function() {
        if (listWrapper[i].style.display == 'none') {
            listWrapper[i].style.display = 'flex';
            chevron[i].style.backgroundImage = 'url(../img/chevron-up.svg)';
        } else {
            listWrapper[i].style.display = 'none';
            chevron[i].style.backgroundImage = 'url(../img/chevron-down.svg)';
        }
    });
});

toggle.forEach(function(item, i, toggle) {
    toggle[i].addEventListener('click', function() {
        if (questionParagraph[i].style.display == 'none') {
            questionParagraph[i].style.display = 'flex';
            toggle[i].style.backgroundImage = 'url(../img/minus.svg)';
        } else {
            questionParagraph[i].style.display = 'none';
            toggle[i].style.backgroundImage = 'url(../img/plus.svg)';
        }
    });
});

if (document.documentElement.clientWidth < 414) {
    planStandard.style.display = 'none';
    planAdvanced.style.display = 'none';
    listWrapper.forEach(function(item, i, listWrapper) {
        listWrapper[i].style.display = 'none';
    });
} else {
    planStandard.style.display = 'block';
    planAdvanced.style.display = 'block';
}

window.addEventListener("resize", function() {
    if (window.matchMedia("(max-width: 414px)").matches) {
        planStandard.style.display = 'none';
        planAdvanced.style.display = 'none';
        listWrapper.forEach(function(item, i, listWrapper) {
            listWrapper[i].style.display = 'none';
        });
    } else {
        planStandard.style.display = 'block';
        planAdvanced.style.display = 'block';
        listWrapper.forEach(function(item, i, listWrapper) {
            listWrapper[i].style.display = 'block';
        });
    }
});


