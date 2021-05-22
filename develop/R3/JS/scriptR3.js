$(document).ready(function() {
  var elVideo;

  $('#btnPlay').on('click', function() {
    elVideo = document.getElementById("video");
    $('#idModal').removeAttr('hidden');
    elVideo.play();
  })

  $('#idModal').on('click', function(){
    $('#idModal').attr('hidden', true);
    elVideo.pause();
  })


})
