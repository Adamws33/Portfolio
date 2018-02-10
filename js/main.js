jQuery(document).ready(function($){

  console.log('A starter template created by Eleven Fifty under MIT Licensing');

  new WOW().init();

$('.awesome').click(function(){
  window.open('https://magic.wizards.com/en'); 
})
$('.awesome').click(function(){
  window.open('https://i.imgur.com/m9PImwE.gif'); 
})
$('.awesome').click(function(){
  window.open('https://i.imgur.com/gm2PGDA.png'); 
})

$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $('.back-to-top').fadeIn('slow');
  } else {
    $('.back-to-top').fadeOut('slow');
  }
});
$('.back-to-top').click(function(){
  $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
  return false;
});

// $('.navToHead a').click(function(e) { 
//   $('#headTxt').empty();
//   $('#headTxt').load( $(this).attr('href') , function(){
//          $('#headTxt').show()
//   })
//   return false
// })
})