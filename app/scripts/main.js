/*
 * https://github.com/callmenick/Animating-Hamburger-Icons
 * Licensed under the MIT license, http://www.opensource.org/licenses/mit-license.php
 * Copyright 2014, Call Me Nick
 */

(function() {

  'use strict';

  var toggles = document.querySelectorAll('.c-hamburger');

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( 'click', function(e) {
      e.preventDefault();
      if (this.classList.contains('is-active') === true) {
        this.classList.remove('is-active')
        jQuery('.sacsaentis-nav-pane').fadeOut();
      } else {
        this.classList.add('is-active')
        jQuery('.sacsaentis-nav-pane').fadeIn();
      }
    });
  }

})();
