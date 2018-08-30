$(function() {
  // Navbar
  // ---------------------------------------------- //

  $(document).scroll(function() {
    if ($(window).scrollTop() >= $('header').offset().top) {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  });

  // Scroll Spy
  // ---------------------------------------------- //

  $('body').scrollspy({
    target: '.navbar',
    offset: 80
  });

  // Prevents URL update on navigation link click
  // ---------------------------------------------- //

  $('.navbar-nav a, #scroll-down').bind('click', function(e) {
    var anchor = $(this);
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: $(anchor.attr('href')).offset().top
        },
        1000
      );
    e.preventDefault();
  });
});

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', '../../particles.json');
