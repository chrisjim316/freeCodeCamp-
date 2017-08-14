/* smooth scroll */
$(document).ready(function(){ 
  /* Hide 'hide details' buttons in the beginning */
  $("#showLess1").hide();
  $("#showLess2").hide();
  $("#showLess3").hide();
  $("#showLess4").hide();
  $("#showLess5").hide();
  $("#showLess6").hide();
  $("#showLess7").hide();
  $("#showLess8").hide(); 
  
  $(".scroll").click(function(event){
    event.preventDefault();
    $("html,body").animate({scrollTop:$(this.hash).offset().top}, 500);
    $('.navbar-default a').removeClass('selected');
    $(this).addClass('selected');
  });
  
  /* clicking 'show details' will turn the button into 'hide details' and vice versa 
   * 8 projects in total so 16 buttons. 
   */
  $("#viewMore1").click( function() {
    $("#viewMore1").hide();
    $("#showLess1").show();
  });
  $("#showLess1").click( function () {
    $("#viewMore1").show();
    $("#showLess1").hide();
  });
  $("#viewMore2").click( function() {
    $("#viewMore2").hide();
    $("#showLess2").show();
  });
  $("#showLess2").click( function () {
    $("#viewMore2").show();
    $("#showLess2").hide();
  });
  $("#viewMore3").click( function() {
    $("#viewMore3").hide();
    $("#showLess3").show();
  });
  $("#showLess3").click( function () {
    $("#viewMore3").show();
    $("#showLess3").hide();
  });
  $("#viewMore4").click( function() {
    $("#viewMore4").hide();
    $("#showLess4").show();
  });
  $("#showLess4").click( function () {
    $("#viewMore4").show();
    $("#showLess4").hide();
  });
  $("#viewMore5").click( function() {
    $("#viewMore5").hide();
    $("#showLess5").show();
  });
  $("#showLess5").click( function () {
    $("#viewMore5").show();
    $("#showLess5").hide();
  });
  $("#viewMore6").click( function() {
    $("#viewMore6").hide();
    $("#showLess6").show();
  });
  $("#showLess6").click( function () {
    $("#viewMore6").show();
    $("#showLess6").hide();
  });
  $("#viewMore7").click( function() {
    $("#viewMore7").hide();
    $("#showLess7").show();
  });
  $("#showLess7").click( function () {
    $("#viewMore7").show();
    $("#showLess7").hide();
  });
  $("#viewMore8").click( function() {
    $("#viewMore8").hide();
    $("#showLess8").show();
  });
  $("#showLess8").click( function () {  
    $("#viewMore8").show();
    $("#showLess8").hide();
  });
});

$(document).on('click.bs.collapse.data-api touchstart.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) { 
});
