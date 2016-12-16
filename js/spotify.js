// JavaScript Document

$(document).ready(function () {

///Gets album art at 600px and 300px for the thumbnail and the lightbox
  var spotify = "https://api.spotify.com/v1/artists/5K4W6rqBFWDnAN6FQUkS6x/top-tracks?country=CA";
  function displayAlbums(data){
    var html = '<ul>';
    $.each(data.tracks, function(i,eachTrack){
      html += '<li>';
	  html += '<a href="' + eachTrack.album.images[0].url + '"data-lightbox="albums">';	
      html += '<img src="' + eachTrack.album.images[1].url + '"data-lightbox="albums">';
	  html += '</a>';	
      html += '</li>';
	  /*html += '<h2>"' + eachTrack.name + '"</h2>';*/
    });
    html += '</ul>';
    $(".spotify").html(html);

  }
	
  $.getJSON(spotify,displayAlbums);
/*});*/
	
//// Lightbox Options	
	lightbox.option ({
		'resize-duration': 100,
		'wrapAround': true,
		'fadeDuration': 200,
		'imageFadeDuration': 200,
		'maxWidth': 500,
		'showImageNumberLabel': false
	})
});