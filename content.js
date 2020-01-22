var video_id = window.location.search.split('v=')[1];

function sendData(pct) {
	$.get('https://script.google.com/macros/s/AKfycbzI247_IE8Dmdkvx1l_oZ4ULa1FzXnjXxO3bmwN4OPkh0lgjMKI/exec?video_id=' + video_id + "&pct=" + pct)
		.then(function(data) {
			if (data === 'success') {
				$("#info").append('<h2> success </h2>');
			} else {
				alert('Error?');
			}
		})
		.fail(function(err) {
			alert('Error: ' + err);

		});
}

function createButton(pct) {
	let h2 = document.createElement('span');

	let btn = document.createElement('button');
	$(btn).text(pct);
	btn.onclick = function() {
		sendData(pct);
	};

	$(btn).appendTo(h2);
	$(h2).appendTo('#info');
}


setTimeout(function(){
	var video_id = window.location.search.split('v=')[1];
	var ampersandPosition = video_id.indexOf('&');
	if(ampersandPosition != -1) {
  		video_id = video_id.substring(0, ampersandPosition);
  	}

				createButton(0);
				createButton(25);
				createButton(50);
				createButton(75);
				createButton(100);


 	//$("#search").append('<h1> I am search </h1>')
  	/*$("#info").append('<h2> <button onclick="LOL.sendData(video_id)"> 0 </button> </h2>');
    $("#info").append('<h2> <button onclick="LOL.sendData(video_id)"> 25 </button> </h2>');
    $("#info").append('<h2> <button onclick="LOL.sendData(video_id)"> 50 </button> </h2>');
    $("#info").append('<h2> <button onclick="LOL.sendData(video_id)"> 75 </button> </h2>');
    $("#info").append('<h2> <button onclick="LOL.sendData(video_id)"> 100 </button> </h2>');*/

	//var download_button = document.getElementById('download_button');
	//download_button.onclick = openDownloadPage(download_url);
},5000);


//$('body').css('background-color','yellow');

//document.write(video_id);
