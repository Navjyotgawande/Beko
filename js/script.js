//owl carausal start
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            320:{
                items:1
            },
            768:{
                items:2
            },
            994:{
                items:2
            },
            1200:{
                items:2
            }
        }
    });
      

});

//owl carausal end

//aos start
AOS.init();
//aos end

//toggle navigation start

// $(document).ready(function(){
//     $("#icon").click(function(){
//     $("ul").toggleClass("show");
    
    
    
//     });
    
//     // });

    var a=1;
$(document).ready(function(){
$("#abt").click(function(){
$("#linkss").hide();
a=1;
});
$("#fightt").click(function(){
    $("#linkss").hide();
    a=1;
    });
    $("#teams").click(function(){
        $("#linkss").hide();
        a=1;
        });
        $("#chalenge").click(function(){
            $("#linkss").hide();
            a=1;
            });  
            $("#ghar").click(function(){
                $("#linkss").hide();
                a=1;
                });  
           
           
            $("#cont").click(function(){
                $("#linkss").hide();
                a=1;
                });   
                $("#icon").click(function(){
                    $("#linkss").slideToggle();
        // if (a==1){
        //          $("#linkss").animate({"right":"0"});
        //          a=2;
        // }
        // else{
        //          $("#linkss").animate({"right":"-100%"});
        // } 
        });
        });
                

//toggle navigation end


