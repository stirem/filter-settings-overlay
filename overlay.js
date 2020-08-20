var overlay = (function() {
  'use strict';

  // SLIDER
  addEventListener('input', e => {
    let _t = e.target;
    _t.parentNode.style.setProperty(`--${_t.id}`, +_t.value);
  }, false);


  // INIT
  window.onload = function() {
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
