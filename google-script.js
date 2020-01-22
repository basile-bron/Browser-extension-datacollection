/*copy and paste in google sheet and deploy*/
/** @OnlyCurrentDoc */
function doGet(e) {
  var pct = e.parameter.pct;
  var video_id = e.parameter.video_id;

  var sheet = SpreadsheetApp.getActiveSheet();
  sheet.appendRow(['loly','video_id', 'pct']);

  console.log('Video ID: ' + video_id);
  console.log('Clickbait %: ' + pct);

  return ContentService.createTextOutput('success');
}
