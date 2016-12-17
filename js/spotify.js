// JavaScript Document

$(document).ready(function () {

///Gets album art at 640px and 300px for the thumbnail and the lightbox
  var spotify = "https://api.spotify.com/v1/artists/5K4W6rqBFWDnAN6FQUkS6x/top-tracks?country=CA";
  
  function displayAlbums(data){
    var html = '<ul>';
	var artistHeader ='';  
    $.each(data.tracks, function(i, eachTrack){
	  console.log(eachTrack.name);	
      html += '<li>';
	  html += '<a href="' + eachTrack.album.images[0].url + '"data-lightbox="albums" '+' data-title="<p>Title:<span>' + eachTrack.name + '</span></p><p>Artist:<span>' + eachTrack.album.artists[0].name + '</span></p> <p>Album:<span>' + eachTrack.album.name + '</span</p><p>Popularity: <span> ' + eachTrack.popularity + ' </span></p><p>Explicit: <span>' + eachTrack.explicit + ' </span></p>">';	
      html += '<img src="' + eachTrack.album.images[1].url + '"data-lightbox="albums">';
	  html += '</a>';	
      html += '</li>';
	  artistHeader = 'Top Tracks From ' + eachTrack.album.artists[0].name + ' in Canada';	
	  console.log(eachTrack.name);
    });
    html += '</ul>';
    $(".spotify").html(html);
	$("h1").html(artistHeader); 

  }
	
  $.getJSON(spotify,displayAlbums);
/*});*/
	
	$(".spotify a").click(function (event) {
		event.preventDefault();
		var href = $(this).attr("href");
		console.log(spotify);
	});
	
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