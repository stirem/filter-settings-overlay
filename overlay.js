var overlay = (function() {
  'use strict';

  var isShowing = false;

  // INIT
  window.onload = function() {
    makeSliders();
    makeButtons();
  }


  // OVERLAY BOX
  function show() {
    if ( ! isShowing ) {
      document.querySelector( '.overlay-box' ).style.display = "block";
      isShowing = true;
    } else {
      document.querySelector( '.overlay-box' ).style.display = "none";
      isShowing = false;
    }
  }

  // SLIDERS
  function makeSliders() {
    var sliderSections = document.getElementsByClassName( "slider" );
    for ( var x = 0; x < sliderSections.length; x++ ) {
      var sliders = sliderSections[x].getElementsByTagName( "input" );
      for ( var y = 0; y < sliders.length; y++ ) {
        if ( sliders[y].type === "range" ) {
          sliders[y].oninput = getSliderValues;
          // Manually trigger event first time to display values
          sliders[y].oninput();
        }
      }
    }
  }


  // SLIDER VALUES
  function getSliderValues() {
    // Get slider values
    var slides = document.getElementsByTagName( "input" );
    var slide1 = parseFloat( slides[0].value );
    var slide2 = parseFloat( slides[1].value );
    // Neither slider will clip the other, so make sure we determine which is larger
    if ( slide1 > slide2 ) {
      var tmp = slide2;
      slide2 = slide1;
      slide1 = tmp;
    }

    var sliderValueFrom = document.querySelector( ".slider-value-from" );
    sliderValueFrom.innerHTML = "Fra: " + slide1;
    var sliderValueTo = document.querySelector( ".slider-value-to" );
    sliderValueTo.innerHTML = "Til: " + slide2;
  }


  // TAGS BUTTONS
  var tags = [ 'Arrangement', 'Future Divercities', 'Generelt Kunngjøring', 'Utvikling', 'Verktøykassen'];

  function makeButtons() {
      for ( var i = 0; i < tags.length; i++ ) {
         var btn = document.createElement( "button" );
         var t = document.createTextNode( tags[i] );
         btn.appendChild( t );
         document.querySelector( '.tags' ).appendChild( btn );
      }
  }

  var buttons = document.getElementsByTagName( "button" );
  for ( var i = 0; i < buttons.length; i++ ) {
    buttons[i].onclick = function() {
      console.log( "click" );
      buttons[i].style.background='#000000';
    }
  }



  // RETURN
  return {
    show: show,
    getSliderValues: getSliderValues
  }

})();
