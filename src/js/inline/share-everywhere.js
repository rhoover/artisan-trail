(() => {
  'use strict';

  // sharing stuff
  const shareButton = document.querySelector(".share-everywhere");
  const pageURL = document.querySelector("link[rel=canonical]");
  const pageTitle = document.title;

  // scrolling/appearance stuff
  var contentElem = document.getElementsByTagName('main');
  var contentElemPos = contentElem[0].offsetTop;

  if (navigator.share) {
    // window.addEventListener('scroll', shareButtonVisibility);
    // function shareButtonVisibility() {
    //   var scrollPos = window.scrollY;
    //   if (scrollPos >= contentElemPos) {
        shareButton.classList.add('share-everywhere-visible');
    //   } else {
    //     shareButton.classList.remove('share-everywhere-visible');
    //   };      
    // };

    shareButton.addEventListener('click', shareButtonStuff);
    function shareButtonStuff() {
      navigator.share({
        title: pageTitle,
        url: pageURL.href
      });      
    };
  };
})();