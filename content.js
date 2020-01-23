var video_title;
var video_id = window.location.search.split('v=')[1];

function sendData(pct) {
	var video_id = window.location.search.split('v=')[1];
	video_title = $('#info .title > yt-formatted-string').text();
	var ampersandPosition = video_id.indexOf('&');
	if(ampersandPosition != -1) {
  		video_id = video_id.substring(0, ampersandPosition);
  	}

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

function createButton(pct) {


	let span = document.createElement('span');

	let btn = document.createElement('button');
	$(btn).text(pct);
	btn.onclick = function() {
		sendData(pct);
	};
	$(btn).css('background-color','#00c4ff');
	$(btn).css('border', '1px solid white');
	$(btn).css('color', 'white');
	$(btn).css('padding', '10px 32px');
	$(btn).css('text-align', 'center');
	$(btn).css('text-decoration', 'none');
	$(btn).css('display', 'inline-block');
	$(btn).css('font-size', '16px');
	$(btn).css('margin-top', '10px');


	$(btn).appendTo(span);
	$(span).appendTo('#info');
}

setTimeout(function(){
	$("#info").append('<h2>How toxic is this video ? </h2>');
				createButton(0);
				createButton(25);
				createButton(50);
				createButton(75);
				createButton(100);

},5000);


//$('body').css('background-color','yellow');

//document.write(video_id);
