$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll > 175) {
    $('.navbar').removeClass('navbar-light bg-light-nav');
    $('.navbar').addClass('navbar-dark'); //bg-dark
  } else {
    $('.navbar').removeClass('navbar-dark'); //bg-dark
    $('.navbar').addClass('navbar-light bg-light-nav');
  }
})

$('.dropdown').hover(function(){
  $('.dropdown-toggle', this).trigger('click');
});

function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
}


$('.postcard .green.play').hover(function(){
  $('.fa-arrow-right').addClass('fa-beat');
})
$('.postcard .green.play').mouseleave(function(){
  $('.fa-arrow-right').removeClass('fa-beat');
})

// $('#wave').wavify({
//   height: 60,
//   bones: 3,
//   amplitude: 40,
//   color: '#7d9253',
//   speed: .25
// });
