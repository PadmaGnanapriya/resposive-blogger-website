$(document).ready(function(){

    $nav=$('.nav');
    $toggleCollapse=$('.toggle-collapse');

    /** Click events on toggle menu */
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })

    
}); 