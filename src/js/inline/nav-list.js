(() => {
  'use strict';

  const listsItem = document.querySelector('[data-accordian]');
  const listsSubItem = document.querySelector('.nav-item-content');
  let icon = document.querySelector('.nav-item-icon');

  listsItem.addEventListener('click', toggleClass);

  function toggleClass() {
    listsSubItem.classList.toggle('nav-item-content-active');
    icon.classList.toggle('nav-item-icon-toggled');
  };

})();