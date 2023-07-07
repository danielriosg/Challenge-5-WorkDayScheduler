$(function () {
  // Display the current date in the header
  var currentDate = dayjs().format("dddd, MMMM D, YYYY");
  $("#currentDay").text(currentDate);

  // Apply past, present, or future classes to time blocks
  var currentHour = dayjs().hour();

  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);

    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
  // Event listener for save button
  $(".saveBtn").on("click", function () {
    // Find the associated textarea and its event id
    var textarea = $(this).siblings("textarea");
    var eventId = textarea.attr("id");

    // Get the entered event text
    var eventText = textarea.val().trim();

    // Save the event text to local storage for the specific block
    localStorage.setItem(eventId, eventText);
  });
});
