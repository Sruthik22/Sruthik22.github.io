$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#Home');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar-custom").css('background-color', '#262626');
       } else {
          $('.navbar-cutom').css('background-color', 'transparent');
       }
   });
    }
});