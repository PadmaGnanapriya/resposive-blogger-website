const responsive={
    0:{
        items:1
    },
    320:{
        items:1
    },
    560:{
        items:2
    },
    960:{
        items:3
    }    
}

$(document).ready(function(){

    $nav=$('.nav');
    $toggleCollapse=$('.toggle-collapse');

    /** Click events on toggle menu */
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })

    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:2000,
        dots:false,
        nav:true,
        navtext:[$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive:responsive
    });

    //click to scroll top
    $('.move-up span').click(function(){
        $('html,body').animate({
            scrollTop:0
        },2000);
    })

    AOS.init();
    
}); 