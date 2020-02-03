function sendData(pct, video_id, video_title) {
	$.get('https://script.google.com/macros/s/AKfycbzI247_IE8Dmdkvx1l_oZ4ULa1FzXnjXxO3bmwN4OPkh0lgjMKI/exec?video_title=' + encodeURIComponent(video_title) + '&video_id=' + video_id + "&pct=" + pct)
		.then(function(data) {
			if (data === 'success') {
				console.log('success');
			} else {
				alert('Error?');
			}
		})
		.fail(function(err) {
			alert('Error: ' + err);

		});
}

function createButton(elementToAddTo ,pct, color, style) {
	let span = document.createElement('span');
	let btn = document.createElement('button');
	var video_id;
	var video_title;
	$(btn).text(pct);
	btn.onclick = function() {
		console.log(video_id, video_title);
		return sendData(pct, video_id, video_title);
	};

	if(style == "video"){
		var video_id = window.location.search.split('v=')[1];
		var ampersandPosition = video_id.indexOf('&');
		if(ampersandPosition != -1) {
	  		video_id = video_id.substring(0, ampersandPosition);
	  	}
		video_title = $('#info .title > yt-formatted-string').text();

		$(btn).css('background-color', color);
		$(btn).css('border', '1px solid white');
		$(btn).css('color', 'white');
		$(btn).css('padding', '10px 32px');
		$(btn).css('text-align', 'center');
		$(btn).css('text-decoration', 'none');
		$(btn).css('display', 'inline-block');
		$(btn).css('font-size', '16px');
		$(btn).css('margin-top', '5px');

	} else if (style == "thumbnail") {
		video_id = document.getElementById("thumbnail").href.split('v=')[1];
		video_title = $('#video-title').innerText;

		$(btn).css('background-color', color);
		$(btn).css('border', '0px solid white');
		$(btn).css('color', 'white');
		$(btn).css('padding', '0px 5px');
		$(btn).css('text-align', 'center');
		$(btn).css('text-decoration', 'none');
		$(btn).css('display', 'inline-block');
		$(btn).css('font-size', '16px');
		$(btn).css('margin-top', '2px');
	}
	$(btn).appendTo(span);
	$(span).appendTo(elementToAddTo);
}

function ratingBar(elementToAddTo, style){
	createButton(elementToAddTo, 0, "#00c4ff", style);
	createButton(elementToAddTo, 25, "#1f7ba0", style);
	createButton(elementToAddTo,  50, "#144d65", style);
	createButton(elementToAddTo, 75, "#0b2733", style);
	createButton(elementToAddTo, 100, "#02080a", style);
}

setTimeout(function(){
	ratingBar(".details", "thumbnail");

	//if it is a video page
	if (window.location.href.indexOf("watch") > -1) {
		$("#info").append('<h2>How toxic is this video ? </h2>');
		ratingBar("#info", "video");
  }

},5000);
