$(document).ready(function() {
    var button = $(".drop__list_h6");
    var nav = $(".header__nav");
    var slider = $(".slid__box")
    var pic = $(".pic2")
    var i = 0;
    var s = 0;
    var kot = 0;
    var zalupa;

    
    button.hide();
    $(".drop").click(function(){
        button.toggle(500);
     }); 
   $(".header__menu").click(function(){
      if(s == 0){
      $(".menu").show();
      s++;
      }
      else{
         $(".menu").hide();
         s = 0;
      }
      
   }); 
     $(window).on('load resize', function() {
     var $width = $(window).width(); 
     if($width <= 1032){
        nav.hide();
        $(".header__menu").show();
        if(kot==0){
        for(var n = 0; n<4; n++){
         $('#4124123').remove();
         }
      $('#img1').prepend('<img src="img/swiper/5f740290188e2.jpg" id="4124123"/>')
      $('#img2').prepend('<img src="img/swiper/6046db209d1f0.jpg" id="4124123"/>')
      $('#img3').prepend('<img src="img/swiper/61f1edc69315b.jpg" id="4124123" />')
      $('#img4').prepend('<img src="img/swiper/6259230c61ecd.jpg" id="4124123" />')
      slider.hide();
      kot = 1;
      i = 0;
        }
     }
     else{
      if(i==0){
         for(var n = 0; n<4; n++){
            $('#4124123').remove();
         }
      $('#img1').prepend('<img src="img/swiper/banner.jpg" id="4124123" />')
      $('#img2').prepend('<img src="img/swiper/solar-pump.jpg" id="4124123"/>')
      $('#img3').prepend('<img src="img/swiper/olympic-en-pc-2.jpg" id="4124123" />')
      $('#img4').prepend('<img src="img/swiper/20220412-pc.jpg" id="4124123" />')
      i++;
      kot = 0;
      slider.show();
      nav.show();
      $(".header__menu").hide();
      }
     }
    });
    $(".pic1_2")
    .mouseenter(function() {
            $('.pic1_2').hide()
            $('.pic2').show()
    })
    $(".pic2_3")
    .mouseenter(function() {
            $('.pic2_3').hide()
            $('.pic3').show()
    })
    $(".pic3_4")
    .mouseenter(function() {
            $('.pic3_4').hide()
            $('.pic4').show()
    })
    $(".pic4_5")
    .mouseenter(function() {
            $('.pic4_5').hide()
            $('.pic5').show()
    })
    
    $(".pic2").mouseleave(function(){  
      $('.pic2').hide()                   
      $('.pic1_2').show()
});
   $(".pic3").mouseleave(function(){  
      $('.pic3').hide()                   
      $('.pic2_3').show()
});
   $(".pic4").mouseleave(function(){     
      $('.pic4').hide()                
      $('.pic3_4').show()
});
   $(".pic5").mouseleave(function(){    
      $('.pic5').hide()             
      $('.pic4_5').show()
});
       
  });