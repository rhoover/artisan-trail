	(() => {
    'use strict';

    let close = document.querySelector('.nav-close');
    let menuButton = document.querySelector('.menu-button');
    let menuText = document.querySelector('.menu-button-text');
    let menuButtonWrap = document.querySelector('.menu-toggle');
    let navMenu = document.querySelector('.nav');
    let accordianMenu = document.querySelector('.nav-item-content');
    let accordianIcon = document.querySelector('.nav-item-icon');

    menuButton.addEventListener('click', toggleMenuClasses);
    function toggleMenuClasses() {

      // first tackle the fly-out accordian menu
      if (accordianMenu.classList.contains("nav-item-content-active")) {
        accordianMenu.classList.remove("nav-item-content-active");
        accordianIcon.classList.remove('nav-item-icon-toggled');
      };

      navMenu.classList.toggle('nav-open');

      menuButtonWrap.classList.toggle('opened');
      
      menuText.classList.toggle('menu-button-text-red');

      if (menuText.innerHTML === 'Menu') {
        menuText.innerHTML = 'Close'
      } else {
        menuText.innerHTML = 'Menu'}
      
    };
    
    close.addEventListener('click', toggleCloseClasses)
    function toggleCloseClasses() {

      // first tackle the fly-out accordian menu
      if (accordianMenu.classList.contains("nav-item-content-active")) {
        accordianMenu.classList.remove("nav-item-content-active");
        accordianIcon.classList.remove('nav-item-icon-toggled');
      };

      navMenu.classList.toggle('nav-open');
    
      menuButtonWrap.classList.toggle('opened');
      
      menuText.classList.toggle('menu-button-text-red');
    
      if (menuText.innerHTML === 'Menu') {
        menuText.innerHTML = 'Close'
      } else {
        menuText.innerHTML = 'Menu'
      };
    };

  })();