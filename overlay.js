var overlay = (function() {
  'use strict';

  var isShowing = false;

  function show() {
    if ( ! isShowing ) {
      document.querySelector( '.overlay-box' ).style.display = "block";
      isShowing = true;
    } else {
      document.querySelector( '.overlay-box' ).style.display = "none";
      isShowing = false;
    }
  }



  return {
    show: show
  }

})();
