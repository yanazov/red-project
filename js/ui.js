var scrolled_old = 0; 
var scroll_direction = 'down'; // направление скролла
var scroll_time = 600; // время скрола секции
var scroll_on = false; // текущее состояние сколла
var scroll_height = 0;

$(document).ready(function(){
   
   var max_width = 0;
   
   
   $('.about-right-slider-wrap').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      autoplaySpeed: 2000,
      //autoplay: true,
      adaptiveHeight: true
   });
   


   /* анимация первого экрана */
   setTimeout(function() { 
      $('.main-title span').each(function(index){
         max_width < $('.main-title span')[index].offsetWidth ? max_width = $('.main-title span')[index].offsetWidth : null});
      $('.main-title').width(max_width);
      $('.main-fon').addClass('show');

      setTimeout(function() { 
         $('.main-title__item-1').height($('.main-title__item-1-text').height());
      }, 300);
      setTimeout(function() { 
         $('.main-title__item-2').height($('.main-title__item-2-text').height());

         setTimeout(function() { $('.main-title-img').addClass('show') }, 200);

         

      }, 450);
      setTimeout(function() { 
         $('.main-title__item-3').height($('.main-title__item-3-text').height());
         setTimeout(function() { $('.main-text__item').addClass('show') }, 200);
         setTimeout(function() { $('.main-text__more').addClass('show') }, 200);

         
      }, 600);


   
   }, 1000);
   /* если первый экран прокручен */
   if($(document).scrollTop() > 0){
      setTimeout(function() { 
         $('.aboun-number__fon').addClass('show'); 
         $('.aboun-number__num').addClass('show');         
      }, scroll_time*0.6);
   }
  
 });




$(window).scroll(function() {
   var scrolled = $(document).scrollTop();
   scroll_direction = scrolled - scrolled_old > 0 ? 'down' : 'up';


   if(scroll_on){  // если идет скрол - выходим 
      return 0;
   }
   // если окно меньше 1250 * 800  отключаем скролл
   if($(window).height() < 800 || $(window).width() < 1250){
      scroll_height = 0;
   }else{
      scroll_height = $(window).height();
   }
   scroll_on = true;
   


   if(scrolled > 0 && scrolled < scroll_height && scroll_direction === 'down'){
      $('html, body').animate({scrollTop: scroll_height}, scroll_time);
      /* анимация второго слайда */
      setTimeout(function() { 
         $('.aboun-number__fon').addClass('show'); 
         $('.aboun-number__num').addClass('show'); 
      }, scroll_time*0.6);


      scrolled_old = scroll_height;
   }
   if(scrolled > 0 && scrolled < scroll_height && scroll_direction === 'up'){
      $('html, body').animate({scrollTop: 0}, scroll_time);
      scrolled_old = 0;
   }
   if(scrolled > scroll_height && scrolled < scroll_height*2 && scroll_direction === 'down'){
      $('html, body').animate({scrollTop: scroll_height*2}, scroll_time);
      scrolled_old = scroll_height*2;
   }
   if(scrolled > scroll_height && scrolled < scroll_height*2 && scroll_direction === 'up'){
      $('html, body').animate({scrollTop: scroll_height}, scroll_time);
      scrolled_old = scroll_height;
   }


   if ($(window).scrollTop() +400 >= $('.aboun-number').offset().top) {
      $('.aboun-number__fon').addClass('show'); 
      $('.aboun-number__num').addClass('show'); 
   }


   setTimeout(function() { scroll_on = false; }, scroll_time+200);
});


$(document).on('click', '.about-right-slider-nav_prev', function(){
   $('.about-right-slider-wrap').slick('slickPrev');
   
});

$(document).on('click', '.about-right-slider-nav_next', function(){
   $('.about-right-slider-wrap').slick('slickNext');
   
});



/*



$('.slider-wrap').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      autoplaySpeed: 2000,
      autoplay: true,
      adaptiveHeight: true
   });

$(document).ready(function(){
   $('.slider-wrap').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      autoplaySpeed: 2000,
      autoplay: true,
      adaptiveHeight: true
   });
 });
 $(document).on('click', '.slider-next', function(){
   $('.slider-wrap').slick('slickNext');
   
});
$(document).on('click', '.slider-prev', function(){
   $('.slider-wrap').slick('slickPrev');
   
});

$(document).on('click', '.currency-item', function(){
   $('.currency-item').removeClass('active');
   $(this).addClass('active');
   
});

$(document).on('click', '.lang-item', function(){
   $('.lang-item').removeClass('active');
   $(this).addClass('active');
   
});

$(document).on('click', '.account-item__a', function(){
   $('.account-item__a').removeClass('active');
   $(this).addClass('active');
   
});

$(document).on('click', '.nav-item', function(){
   $('.nav-item').removeClass('active');
   $(this).addClass('active');
   
});

$(document).on('click', '.login-close', function(){
   $('.modal').hide();
   $('.login').hide();   
});

$(document).on('click', '.modal', function(){
   $('.modal').hide();
   $('.login').hide();   
});

$(document).on('click', '.welcome__login', function(){
   $('.modal').show();
   $('.login').show();   
});


$(document).on('click', '.welcome__create', function(){
   $('.modal').show();
   $('.login').show();   
});

*/