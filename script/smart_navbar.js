// SMART NAVBAR / weiß, wo man auf der Seite ist von https://stackoverflow.com/questions/19697696/change-underline-of-active-nav-by-section, leicht verändert/angepasst

$(document).ready(function() {

  var navTop = $('#navbar').offset().top;
  var navHeight = $('#navbar').height();
  var windowH = $(window).height();

  $('.section').height(windowH);

  $(document).scroll(function() {
    var st = $(this).scrollTop(); // überwacht wie weit man scrollt

    if (window.scrollY <= 50) { // behebt kleinen Fehler beim ersten scrollen
      element.classList.add("active");
    }

    $('.section').each(function(index, element) {
      if (st + navHeight > $(this).offset().top && st + navHeight <= $(this).offset().top + $(this).height()) {
        $(this).addClass('active');

        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').parent('li').addClass('active');
        // or $('#nav li:eq('+index+')').addClass('active');
      } else {
        $(this).removeClass('active');

        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').parent('li').removeClass('active');
        //or $('#nav li:eq('+index+')').removeClass('active');
      }

    });

  });

});