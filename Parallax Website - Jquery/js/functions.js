
$(document).ready(function(){
  window.onload = setTimeout(function(){
      $('.overlay').fadeOut(1000);
      $('div').removeClass('fix');
  })
});

$(window).scroll(function(){
  var wScroll= $(this).scrollTop();

  $('.logo').css({
    'transform' : 'translate(0px, '+ wScroll/2 +'%)'
  });

  $('.fore-bird').css({
    'transform' : 'translate(0px, -'+ wScroll/38 +'%)'
  });

  if(wScroll > $('.clothes-pics').offset().top - ($(window).height()/1.5)){
    $('.clothes-pics figure').each(function(i){
      setTimeout(function(){
        $('.clothes-pics figure').eq(i).removeClass('hide');
        $('.clothes-pics figure').eq(i).css({
          'transform' : 'translate(0px)'
        });
      }, 200 * (i+1));
    });
  }


  //---------------- PROMOSCOPE ---------------------
  if(wScroll > $('.large-window').offset().top - $(window).height()){

      var opacity = (wScroll - $('.large-window').offset().top + 600)/(wScroll/4)

      $('.window-tint').css({'opacity': opacity});
  }


    //---------------- BLOG POSTS -------------------

    var offset =Math.min(0,wScroll - $('.blog-posts').offset().top + $(window).height() - 400);

    if(wScroll > $('.blog-posts').offset().top - $(window).height()){
      $('.post-1').css({'transform' : 'translate('+ offset +'px,'+ Math.abs(offset *0.5) + 'px)'});
      $('.post-3').css({'transform' : 'translate('+ Math.abs(offset)  +'px,'+ Math.abs(offset *0.5) +'px)'});
    }

});
