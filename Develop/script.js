$(function () {

    $(".saveBtn").click(function(){ // sets our button click functionality
      var timeBlockId = $(this).parent().attr("id");
      var inputValue = $(this).siblings(".description").val(); // traversing DOM via ".saveBtn" to create variables linking to the time blocks and their text input areas
  
      localStorage.setItem(timeBlockId, inputValue); // use our variables to save the text input on each time block to local storage
    })
  })

    
  var currentTime = dayjs().hour(); // using dayjs to get the current time in 24-hour time
  var timeBlocks = $(".time-block").toArray(); // converting my time block class to an array


  for (var i = 0; i < timeBlocks.length; i++) { //setting up a for loop to assign past present and future classes to my timeblocks based against the current time
    var $timeBlock = $(timeBlocks[i]);
    var timeBlockId = $timeBlock.attr("id");
    var blockHour = timeBlockId.split("-")[1]; // using variables to grab my timeblocks and split off the number in the id, so it can be compared to the current hour
    if (blockHour < currentTime) {
      $timeBlock.addClass("past");
    } else if (blockHour === currentTime) {
      $timeBlock.addClass("present");
    } else {
      $timeBlock.addClass("future");
    }}


  for (var i = 0; i <= 24; i++) { // using a second for loop to get my stored local storage information
    var timeBlockId = "hour-" + i; // looping through hours 0 - 24 isnt really necessary, but i like how it looks
    var storedInput = localStorage.getItem(timeBlockId);
    if (storedInput) {
      $("#"+timeBlockId).find(".description").val(storedInput); // finding what was stored in the description class via timeblockID
    }
  }
  

  $("#currentDay").text(dayjs().format("dddd, MMMM, D")); // display of current day on header
