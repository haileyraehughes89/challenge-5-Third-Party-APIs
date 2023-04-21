$(document).ready(function () {
var save = $("button"); 
var today = dayjs();

$('#currentDay').text(today.format('MMM D, YYYY')); 

  save.on('click', function testing (event) {
  var userInput = $(this).siblings("textarea").val();
 
  var timeBlockId = $(this).parent().attr("id");
  
  localStorage.setItem(timeBlockId, userInput);
  var test = localStorage.getItem(timeBlockId);

})

for (var i = 0; i < localStorage.length; i++) {
  var savedInput = localStorage.key(i);//.key returns name of key at specified index
  var output = localStorage.getItem(savedInput);//sets variable for data at that unknown index
  var textarea = $("#" + savedInput).find("textarea");//$ is an alias for document.queryselector, id + savedInput (the variable) .find- look in the parent to see if there is a textarea element
textarea.val(output)
colorCoding (textarea, savedInput);
}

function colorCoding (textarea, savedInput) {
  var hourValue = parseInt(savedInput.split("-")[1]);
  //console.log(hourValue);
  var currentTime = new Date()
  var now = currentTime.getHours();
  console.log(now);
  var blockColor = document.querySelectorAll("textarea");
    if (now == hourValue) {console.log("now")}
    else {console.log("not now");}

  };
  

});
  
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
