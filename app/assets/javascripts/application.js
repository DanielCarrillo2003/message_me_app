// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require turbolinks
//= require semantic-ui
//= require_tree .

$(document).on("turbolinks:load", function () {
  $(".ui.dropdown").dropdown();
});

$(".message .close").on("click", function () {
  $(this).closest(".message").transition("fade");
});

scroll_bottom = function () {
  if ($("#messages").length > 0) {
    $("#messages").scrollTop($("#messages")[0].scrollHeight);
  }
};

function limpiarCampo() {
  var unid = document.getElementById("unid");
  var boton = document.getElementById("boton");
  if (unid) {
    unid.addEventListener("keydown", function (event) {
      if (event.keyCode === 13) {
        event.preventDefault(); // evita que se agregue una nueva línea
        boton.click();
        event.target.value = "";
        console.log("this should work");
      }
    });
  }
}

$(document).on("turbolinks:load", function () {
  $(".ui.dropdown").dropdown();
  $(".message .close").on("click", function () {
    $(this).closest(".message").transition("fade");
  });
  limpiarCampo();
  scroll_bottom();
});
