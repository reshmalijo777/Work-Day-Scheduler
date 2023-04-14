var currentHour = dayjs().hour(); // Variable for current hour 
var currentHourInt = parseInt(currentHour); // Parse it so that hour returns as an integer
var currentDay = $("#currentDay");
 
$(document).ready(function () {

  // Show date and time in Header 
    currentDay.append();

    function addDate() { 
    currentDay.text(dayjs().format('ddd, MMM DD, YYYY h:mm a'));
    } 
    setInterval(addDate, 1000);

    //Code to apply the past, present, or future class to each time block by comparing the id to the current hour\calendar
    function setcolor(){
     $(".time-block").each(function(){
      var inputHourInt= parseInt($(this).attr("id").split("hour")[1]);

      if (currentHourInt === inputHourInt) {
          $(this).addClass("present");     // red color if it is in the present hour 
      }
      if (currentHourInt > inputHourInt) { // grey color if hour is in the past
          $(this).addClass("past");
      }
      if (currentHourInt < inputHourInt) { // green color if hour is in the future 
          $(this).addClass("future");
      }
    })
    }
    //Function to store inputted data 
     storeData();

    //Added a Eventlistener for click events on the save button
    $(".saveBtn").on("click", function () {
        var time = $(this).parent().attr("id")
        var value = $(this).siblings("textarea").val()
        localStorage.setItem(time,value);
        console.log(localStorage);
   })
    function storeData() {
      for (var i = 9; i < 18; i++) {
      $("#"+ "hour" + i).val(localStorage.getItem(i));
      }
    }
    
   setcolor();
})