$(document).ready(function() {
    $( ".pic__on1" ).hover(function(){ 
        $(this).css("background" ,"url(img/box__left/tab_bg1_2.png ) 0 0 no-repeat");
        $(this).css("background-size", "cover"); 
        $(".pic__on2").css("background" ,"");
        $("#spisok__box2").hide();
        $("#spisok__box1").show();
        $(".2 a").css("color", "#fff");
        $(".pic__on12").show();
        $(".pic__of12").hide();
        $(".spisok__box a").css("color", "#999");
        $(".right__box__inner2").hide();
        $(".right__box__inner").show();
      })
      $( ".pic__on2" ).hover(function(){ 
        $(this).css("background" ,"url(img/box__left/tab_bg2_2.png ) 0 0 no-repeat");
        $(this).css("background-size", "cover"); 
        $(".pic__on1").css("background" ,"");
        $("#spisok__box1").hide();
        $("#spisok__box2").show();
        $('#spisok__box2').css('display', 'flex');
        $(".pic__on12").show();
        $(".pic__of12").hide();
        $(".spisok__box a").css("color", "#999");
        $(".right__box__inner").hide();
        $(".right__box__inner2").show();
      })
            
            $( ".1" ).hover(function(){ 
                $(".2 .pic__on12,.3 .pic__on12,.4 .pic__on12").show();
                $(".2 .pic__of12,.3 .pic__of12,.4 .pic__of12").hide();
                $(".2,.3,.4").css("background" ,"");
                $(".2 a,.3 a,.4 a").css("color" ,"#999");
                $(this).css("background" ,"url(img/box__left/tab_listBg.jpg ) 0 0 no-repeat");
                $(this).css("background-size", "cover"); 
                $(".1 a").css("color", "#fff");
                $(".1 .pic__on12").hide();
                $(".1 .pic__of12").show();
                $(".right__box__img2, .right__box__img3, .right__box__img4").hide();
                $(".right__box__img1").show();
                
              }, function(){ 
                
            })
            $( ".2" ).hover(function(){ 
                $(".1 .pic__on12,.3 .pic__on12,.4 .pic__on12").show();
                $(".1 .pic__of12,.3 .pic__of12,.4 .pic__of12").hide();
                $(".1,.3,.4").css("background" ,"");
                $(".1 a,.3 a,.4 a").css("color" ,"#999");
                $(this).css("background" ,"url(img/box__left/tab_listBg.jpg ) 0 0 no-repeat");
                $(this).css("background-size", "cover");
                $(".2 a").css("color", "#fff");
                $(".2 .pic__on12").hide();
                $(".2 .pic__of12").show();
                $(".right__box__img1, .right__box__img3, .right__box__img4").hide();
                $(".right__box__img2").show();
                
              }, function(){ 
                
            })
            $( ".3" ).hover(function(){ 
                $(".1 .pic__on12,.2 .pic__on12,.4 .pic__on12").show();
                $(".1 .pic__of12,.2 .pic__of12,.4 .pic__of12").hide();
                $(".2,.1,.4").css("background" ,"");
                $(".2 a,.1 a,.4 a").css("color" ,"#999");
                $(this).css("background" ,"url(img/box__left/tab_listBg.jpg ) 0 0 no-repeat");
                $(this).css("background-size", "cover");
                $(".3 a").css("color", "#fff");
                $(".3 .pic__on12").hide();
                $(".3 .pic__of12").show();
                $(".right__box__img1, .right__box__img2, .right__box__img4").hide();
                $(".right__box__img3").show();
                
              }, function(){ 
                
            })
            $( ".4" ).hover(function(){ 
                $(".1 .pic__on12,.2 .pic__on12,.3 .pic__on12").show();
                $(".1 .pic__of12,.2 .pic__of12,.3 .pic__of12").hide();
                $(".1,.3,.2").css("background" ,"");
                $(".1 a,.3 a,.2 a").css("color" ,"#999");
                $(this).css("background" ,"url(img/box__left/tab_listBg.jpg ) 0 0 no-repeat");
                $(this).css("background-size", "cover");
                $(".4 a").css("color", "#fff");
                $(".4 .pic__on12").hide();
                $(".4 .pic__of12").show();
                $(".right__box__img1, .right__box__img2, .right__box__img3").hide();
                $(".right__box__img4").show();
              }, function(){ 
                
            })
        })

