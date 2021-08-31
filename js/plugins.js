$(document).ready(function(){
  // Show box-search
  $(".icon-search").click(function () {
    $(".search-box").fadeToggle();
  });
  // hide box-search
  $("#icon-close").click(function () {
    $(".search-box").fadeToggle();
  });

    // Scroll To Top
    var scrollButton = $(".scroll");

    $(window).scroll(function(){
        if($(this).scrollTop() >= 700){
          scrollButton.show();
        }else{
          scrollButton.hide(); 
        }
    });
      scrollButton.click(function(){
        $("html, body").animate({scrollTop: 0}, 600);
    });

});

