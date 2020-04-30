$(document).ready(function(){
    
    $('.banner').addClass('animright');
  
    $(window).scroll(function(){
        
         let pos = $(this).scrollTop();
        if(pos >= 100){
        $('.mynavbar').addClass('stickymenu');
          
        }
        else{
            $('.mynavbar').removeClass('stickymenu');
            
        }
        
        
        
    });
    
     
    
    $(window).scroll(function(){
        
         let po1 = $(this).scrollTop();
        if(po1 >= 350){
        $('.camera').addClass('animleft');
       
        }
        else{
            $('.camera').removeClass('animleft');
           
        }
        
        
        
    });
    
    $(window).scroll(function(){
        
         let po1 = $(this).scrollTop();
        if(po1 >= 350){
        $('.mission-text').addClass('animright');
          console.log('sdddddddddddddddddddddddddd');
        }
        else{
            $('.mission-text').removeClass('animright');
            console.log('sdfsdfsfsdf');
        }           
    });
    
 $('.gallery-item').click(function(){
     
     let value = $(this).attr('data-filter');
     console.log(value);
     
     if(value === 'all'){
         $('.filter').show(300);
         
     }
     else {
         
         $('.filter' ).not('.'+value).hide(300);
         $('.filter').filter('.'+ value).show(300);
     }
     
     
     
 } );
    
    
    $('.gallery-item').click(function(){
        
        $(this).addClass('active-item').siblings().removeClass('active-item');
        
        } );
     
    
    
});































