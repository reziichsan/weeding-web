

$(window).on("load",function(){
    let slideIndex = $(".slide.active").index();
    const slideLen = $(".slide").length;
    
    function slideShow(){
        console.log(slideIndex)
        $(".slide").removeClass("active").eq(slideIndex)
        .addClass("active");
        if(slideIndex == slideLen-1){
            slideIndex = 0;
        }
        else{
            slideIndex++;
        }
        setTimeout(slideShow,5000);
        
    }
    slideShow();

    $(window).scroll(function(){
        if($(this).scrollTop() >100){
            $(".header").addClass("fixed");
        }
        else{
            $(".header").removeClass("fixed");
        }
    });
       
    $.scrollIt(); 

})


