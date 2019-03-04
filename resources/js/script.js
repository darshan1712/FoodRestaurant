var $;
var document;
var window;
$(document).ready(function(){
    
    
// For Sticky navigation
    
    
    $('.js--section-features').waypoint(function(direction){
        if(direction == "down"){
            $('nav').addClass('sticky');
        }else{
            $('nav').removeClass('sticky');
        }
    }, {
  offset: '25%'
});
    
// Scroll on buttons   
    
    $('.js--scroll--to--plans').click(function(){
        $('html, body').animate({scrollTop: $('.js-section-plans').offset().top}, 1000)
    });
 
    $('.js--scroll--to--start').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 300)
    });
 
    
    
//    Smooth Scroll
    
     $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
    
    
//    Animation on scroll
    
    $('.js--wp-1').waypoint(function(){
        $('.js--wp-1').addClass('animated fadeIn')
    }, {
  offset: '60%'
});
    
    
 $('.js--wp-2').waypoint(function(){
        $('.js--wp-2').addClass('animated fadeInUp')
    }, {
  offset: '30%'
});   
    
    
  $('.js--wp-3').waypoint(function(){
        $('.js--wp-3').addClass('animated fadeIn')
    }, {
  offset: '50%'
});    
    
$('.js--wp-4').waypoint(function(){
        $('.js--wp-4').addClass('animated bounce')
    }, {
  offset: '40%'
});    
        
//   Mobile nav 
    
    $('.js--nav-icon').click(function(){
      var nav = $('.js--main-nav');
      var icon = $('.js--nav-icon i')
    nav.slideToggle(200);
                            
    if (icon.hasClass('icon ion-md-menu')){
        icon.addClass('icon ion-md-close');
        icon.removeClass('icon ion-md-menu');
    }else{
        icon.addClass('icon ion-md-menu');
        icon.removeClass('icon ion-md-close');
    }
    
    
    
    });
    
    
});