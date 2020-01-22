setTimeout(function(){
	var video_id = window.location.search.split('v=')[1];
	var ampersandPosition = video_id.indexOf('&');
	if(ampersandPosition != -1) {
  		video_id = video_id.substring(0, ampersandPosition);
  	}

 	var download_url = 'http://ssyoutube.com/watch?v='+video_id;

 	//$("#search").append('<h1> I am search </h1>')
  	$("#info").append('<h2> <button onclick="window.open(\' '+ download_url + '\');"> 0 </button> </h2>');
    $("#info").append('<h2> <button onclick="window.open(\' '+ download_url + '\');"> 25 </button> </h2>');
    $("#info").append('<h2> <button onclick="window.open(\' '+ download_url + '\');"> 50 </button> </h2>');
    $("#info").append('<h2> <button onclick="window.open(\' '+ download_url + '\');"> 75 </button> </h2>');
    $("#info").append('<h2> <button onclick="window.open(\' '+ download_url + '\');"> 100 </button> </h2>');

	//var download_button = document.getElementById('download_button');
	//download_button.onclick = openDownloadPage(download_url);
},5000);





var ss = SpreadsheetApp.getActive();

function onOpen() {
  var menu = [{name:"Add New Last Row", functionName:"addFirstRow"}];
  ss.addMenu("Extra", menu);
}

function addFirstRow() {
  var sheet = ss.getActiveSheet();
  sheet.appendRow(['This row']);

  // Insert one empty row after the last row in the active sheet.
  sheet.insertRowsAfter(sheet.getMaxRows(), 1);
  sheet.appendRow(['That Row']);


  // Shifts all rows down by one
  sheet.insertRows(1);

  // inserts a row at row 10
  sheet.insertRows(10);

}










function openDownloadPage(){

	var video_id = window.location.search.split('v=')[1];
	var ampersandPosition = video_id.indexOf('&');
	if(ampersandPosition != -1) {
  		video_id = video_id.substring(0, ampersandPosition);
  	}

 	var download_url = 'http://ssyoutube.com/watch?v='+video_id;
 	console.log("download_url = "+download_url);
	//window.open(download_url);
	window.open('http://google.com');
};

//$('body').css('background-color','yellow');

var video_id = window.location.search.split('v=')[1];
//document.write(video_id);
