$(function () {

    $(".saveBtn").click(function(){
      var timeBlockId = $(this).parent().attr("id");
      var inputValue = $(this).siblings(".description").val();
  
      localStorage.setItem(timeBlockId, inputValue);
    })
  })
    
  var currentTime = dayjs().hour();
  var timeBlocks = $(".time-block").toArray(); 

  for (var i = 0; i < timeBlocks.length; i++) {
    var $timeBlock = $(timeBlocks[i]);
    var timeBlockId = $timeBlock.attr("id");
    var blockHour = timeBlockId.split("-")[1];

    if (blockHour < currentTime) {
      $timeBlock.addClass("past");
    } else if (blockHour === currentTime) {
      $timeBlock.addClass("present");
    } else {
      $timeBlock.addClass("future");
    }}


  for (var i = 0; i <= 24; i++) {
    var timeBlockId = "hour-" + i;
    var storedInput = localStorage.getItem(timeBlockId);
    if (storedInput) {
      $("#"+timeBlockId).find(".description").val(storedInput);
    }
  }
  

  $("#currentDay").text(dayjs().format("dddd, MMMM, D"));
