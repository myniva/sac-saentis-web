$(document).ready(function(){
  height();
  var toggle = document.getElementById('btn_nav');
  toggleHandler(toggle);
});
$(window).resize(function(e) {
  height();
});

function height() {
  if($('#content_wrapper').height() < $(window).height()) {$('#content_wrapper').height($(window).height()-40);}
}

function toggleHandler(toggle) {
  toggle.addEventListener( 'click', function(e) {
    e.preventDefault();
    if(this.classList.contains('is-active') === true) {
      this.classList.remove('is-active')
      $('#nav').fadeOut();
      $('#next_tour ul').css('z-index',300);
    }
    else {
      this.classList.add('is-active');
      $('#nav').fadeIn();
      $('#next_tour ul').css('z-index',10);
    }
  });
}
