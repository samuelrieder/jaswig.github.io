function heroBackground() {
  $('.hero-background').YTPlayer({
      fitToBackground: true,
      videoId: '56Qd7zEpHac',
      suggestedQuality: 'medium'
  });
}

$(document).ready(function() {
  setTimeout( heroBackground, 2000 )
})
