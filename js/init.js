(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.carousel').carousel({padding:150});
      setInterval(function() {
    $('.carousel').carousel('next');
  }, 3000); // every 2 seconds
    // $('.carousel').carousel('next'); // Move next 

  }); // end of document ready
})(jQuery); // end of jQuery name space

