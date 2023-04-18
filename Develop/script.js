// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function () {
var save = $("button"); //created variable to apply to all button elements in HTML
var today = dayjs(); // this is defining the variable today as the function linked in the html document

$('#currentDay').text(today.format('MMM D, YYYY')); // posts current date using the function defined in the today variable
  //getting localstorage
//var itemKey = localStorage.getItem("hour-9");
  //console.log(itemKey)



  save.on('click', function (event) {
  var userInput = $(this).siblings("textarea").val();
  //this is setting the variable for the text users type in. The variable's name is userInput. It is everything that belongs to the save variable. In this case that is the button element and its child element i. siblings grabs associated child of the parent div. the sibling named is the textarea element. 
  var timeBlockId = $(this).parent().attr("id");
  // sets timeBlockId to save's parent, focusing on the id attribute only
   
  //   // timeBlock.push(userInput)
  localStorage.setItem(timeBlockId, userInput); //setItem adds the timeBlockID and userInput to local storage
  //   // console.log(userInput)

  localStorage.getItem(timeBlockId, userInput);
   
  });



  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
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
  //
  // TODO: Add code to display the current date in the header of the page.
});
