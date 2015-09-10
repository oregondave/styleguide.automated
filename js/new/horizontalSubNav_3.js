function horizontalSubNav3(){
  var dropdown = $("#navDropdown");
  var navList = $("#navList");
  var navListItem = $("#navList li a");

  $(navList).children('li').first().attr('id', 'first');

  function checkSize(){
    if ($('#first a').css("border-bottom-style") == "dotted" ){
      $(navListItem).each(function() {
        $(this).removeAttr( 'style' );
      });
      $(navList).hide();
    } else if ($('#first a').css("border-bottom-style") == "solid" ){
      $(navListItem).each(function() {
        $(this).removeAttr( 'style' );
      });
      $(navList).show();
    } else {
      var navListItemWidth = 100 / $(navList).children('li').length + "%";
      $(navListItem).each(function() {
        $(this).css('width', navListItemWidth);
      });
      $(navList).show();
    }
  }
//run test on initial page load
checkSize();

// run test on resize of the window
$(window).resize(checkSize);
$(dropdown).click(function() {
  /* Act on the event */
  $(navList).slideToggle();
});
}