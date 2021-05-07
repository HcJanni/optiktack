// SMOOTH SCROLL
$('a').click(function() {
  var scrollziel = $(this).attr('href');
  if (scrollziel == '#home') {
    $('html, body').animate({
      scrollTop: 0
    }, 750); // Geschwindigkeit beim hochscrollen
    return false;
  } else {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 80
    }, 750); // Geschwindigkeit beim runterscrollen
    return false;
  }
});

//