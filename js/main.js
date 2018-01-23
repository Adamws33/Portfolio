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

// $('.navToHead a').click(function(e) { 
//   $('#headTxt').empty();
//   $('#headTxt').load( $(this).attr('href') , function(){
//          $('#headTxt').show()
//   })
//   return false
// })
})