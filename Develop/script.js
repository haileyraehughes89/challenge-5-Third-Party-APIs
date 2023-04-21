
$(document).ready(function () {

var save = $("button"); 
var today = dayjs();


$('#currentDay').text(today.format('MMM D, YYYY'));
var timeBlocks = [
  {id: '9', hour: 9},
  {id: '10', hour: 10},
  {id: '11', hour: 11},
  {id: '12', hour: 12},
  {id: '13', hour: 13},
  {id: '14', hour: 14},
  {id: '15', hour: 15},
  {id: '16', hour: 16},
  {id: '17', hour: 17},
];

timeBlocks.forEach(function(colorCoding){
  var textarea = $("#" + colorCoding.id).find("textarea");
  var currentTime = new Date() //date and time
  var now = currentTime.getHours();//pulling just the hour value
     if (now > colorCoding.id) {console.log("past"); textarea.addClass("past")
     } else if (now == colorCoding.id) {console.log("now"); textarea.addClass("present")
     } else {console.log("future"); textarea.addClass("future")}
})



  save.on('click', function testing (event) {
  var userInput = $(this).siblings("textarea").val();
 
  var timeBlockId = $(this).parent().attr("id");
  
  localStorage.setItem(timeBlockId, userInput);
  //var test = localStorage.getItem(timeBlockId);
  })

  for (var i = 0; i < 10; i++) {
    var savedInput = localStorage.key(i);//.key returns name of key at specified index
    var output = localStorage.getItem(savedInput);//sets variable for data at that unknown index
    var textarea = $("#" + savedInput).find("textarea");//$ is an alias for document.queryselector, id + savedInput (the variable) .find- look in the parent to see if there is a textarea element
  textarea.val(output)
  //colorCoding(textarea, savedInput);
  }

})



// function colorCoding (textarea, savedInput) {
//   var hourValue = parseInt(savedInput); //block time on webpage
//   var currentTime = new Date() //date and time
//   var now = currentTime.getHours();//pulling just the hour value
//     if (now > hourValue) {console.log("past"); textarea.addClass("past")
//     } else if (now == hourValue) {console.log("now"); textarea.addClass("present")
//     } else {console.log("future"); textarea.addClass("future")}
//   };



  
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
