var overlay = (function() {
  'use strict';


  // INIT
  window.onload = function() {
    makeSliders();
    makeButtons();
  }

  // OVERLAY BOX
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

  // SLIDERS
  function makeSliders() {
    var sliderSections = document.getElementsByClassName( "slider" );
    for ( var i = 0; i < sliderSections.length; i++ ) {
      var sliders = sliderSections[i].getElementsByTagName( "input" );
      for ( var j = 0; j < sliders.length; j++ ) {
        if ( sliders[j].type === "range" ) {
          sliders[j].oninput = getSliderValues;
          // Manually trigger event first time to display values
          sliders[j].oninput();
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
  var tags = ['Arrangement', 'Future Divercities', 'Generelt', 'Kunngjøring', 'Utvikling', 'Verktøykassen', '#dele', '#eksperimentere', '#skape', '3d', 'algoritmer', 'animasjon', 'app', 'arbeidsresidency', 'BEK Studio Sessions', 'co-creation', 'DIY', 'feltopptak', 'fiberoptikk', 'film', 'gjestekunstner', 'hardware-utvikling', 'installasjon', 'interaktiv', 'komposisjon', 'konsert', 'kunstnerisk utviklingsarbeid', 'lyd', 'maskinvare', 'meetup', 'musikk', 'omsluttende lyd', 'performance', 'presentasjon', 'Programvare', 'programvareutvikling', 'publikasjonsutvikling', 'rad', 'scenekunst', 'seminar', 'Spatialisering', 'spill', 'stedsspesifikk', 'tekst', 'utstilling', 'verktøykassen', 'video', 'Virtual Reality', 'vitenskapelig', 'forskning', 'workshop'];
  var buttons;
  var buttonIsSelected = [];

  function makeButtons() {
    for ( var i = 0; i < tags.length; i++ ) {
      var btn = document.createElement( "button" );
      btn.setAttribute( "onclick", "overlay.buttonClick( this.id )" );
      btn.setAttribute( "id", i );
      btn.setAttribute( "class", "tags-buttons" )
      var t = document.createTextNode( tags[i] );
      btn.appendChild( t );
      document.querySelector( '.tags' ).appendChild( btn );
    }
  }

  function buttonClick( i ) {
    console.log( "button clicked: ", i );
    if ( ! buttonIsSelected[i] ) {
      document.getElementById( i ).style.background = "#ff0000";
      document.getElementById( i ).style.color = "#fff";
      document.getElementById( i ).style.transform = "translateY( 4px )";
      buttonIsSelected[i] = true;
    } else {
      document.getElementById( i ).style.background = "#9D9D9D";
      document.getElementById( i ).style.color = "#000";
      document.getElementById( i ).style.transform = "translateY( 0px )";
      buttonIsSelected[i] = false;
    }

  }



  // RETURN
  return {
    show: show,
    buttonClick: buttonClick
  }

})();
