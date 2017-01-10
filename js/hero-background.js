function heroBackground() {
  var tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/player_api';
  var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var tv,
      timer,
      videoLength,
      $hero = $('.hero-background'),
      $placeholder = $('.hero-background__image');


  window.onYouTubePlayerAPIReady = function(){
    var videoId = '56Qd7zEpHac';
    tv = new YT.Player('hero-background-video', {
      videoId: videoId,
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      },
      playerVars: {
        autoplay: 1,
        autohide: 0,
        suggestedQuality: 'medium',
        modestbranding: 0,
        rel: 0,
        showinfo: 0,
        controls: 0,
        disablekb: 1,
        enablejsapi: 0,
        iv_load_policy: 3,
        start: 0,
        wmode: 'opaque'
        // playlist: videoId,
        // loop: 1,
        // playsinline:1,
      }
    });

    vidRescale();
  }

  function onPlayerReady() {
    tv.mute();
  }

  function onPlayerStateChange(e) {
    if (e.data === 1){
      $hero.addClass('hero-background_active');

      clearInterval(timer)
      videoLength = ~~tv.getDuration()
      timer = setInterval(function() {
        if ( ~~tv.getCurrentTime() >= videoLength - 1) {
          tv.seekTo(0)
        }
      }, 1000)
    }

    if (e.data === 0) {
      tv.seekTo(0)
    }
  }

  function vidRescale() {
    $video = $('#hero-background-video');

    if (!tv) return

    var w = $('.hero-background').width() + 200,
        h = $('.hero-background').height() + 200;


    if (w/h > 16/9){
      tv.setSize(w, w/16*9);
      $video.css({'left': '0px'});
      $placeholder.css({
        'width': w,
        'height': w/16*9
      })

    } else {
      tv.setSize(h/9*16, h);
      $video.css({
        'left': -($video.outerWidth()-w)/2
      });
      
      $placeholder.css({
        width: h/9*16,
        height: h,
        left: -($video.outerWidth()-w)/2
      })
    }
  }

  $(window).on('load resize', function(){
    vidRescale();
  });
}

$(document).ready(function() {
  if ( isMobile && !isMobile.any ) {
    heroBackground()
  }
});
