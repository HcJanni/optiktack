// SHRINKING HEADER EFFEKT beim scrollen von https://codepen.io/tomdurkin/pen/nvAjd

$(function() {
  var shrinkHeader = 50;
  $(window).scroll(function() {
    var scroll = getCurrentScroll();
    if (scroll >= shrinkHeader) {
      $('#navbar').addClass('shrink');
    } else {
      $('#navbar').removeClass('shrink');
    }
  });

  function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }
});
