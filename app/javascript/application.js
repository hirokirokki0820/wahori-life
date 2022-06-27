// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails

// = require semantic-ui

import "@hotwired/turbo-rails"
import "controllers"
import "jquery"

 /* Semantic UI 用の jquery関数 */
$(document).on("turbo:load", function() {

  /* ドロップダウン */
  $('.ui.dropdown').dropdown();

  /* アコーディオン */
  $('.ui.accordion').accordion();

});
