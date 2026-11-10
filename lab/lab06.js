let following = false;

// $(this) means the specific element that received the event
$("#creature").click(function () {
    $(this).toggleClass("transformed"); //add the transformed class if it is not there, remove it if it is there
    $("#status").text("The creature changed shape."); //clicking the creature changes the text in the status div

});

$("$creature").hover ( //.hover has two functions
    function () {
        $("#thought").stop(true, true).slideDown(300); //slide down is sliding animation and (300) is over millisconds
        $("#status").text("The creature revealed a thought.");
    },
    function () {
        $("#thought").stop(true, true).slideUp(300);
        $("#status").text("The thought disappeared.");
    }
);

$(document).keydown(function (event) {
    if (event.key === " " || event.code === "Space") {
        event.preventDefault();

        following = !following; //toggle the value of following
        $("#creature").toggleClass("folowing");

        if (following === true) {
            $("#status").text("The creature is following your cursor.");
        } else {
            $("#status").text("The creature stopped following you.");
        }
    }
});

$(document).mousemove(function (event) {
  if (following === true) {
    $("#creature").css({
      left: event.pageX - $("#scene").offset().left + 30,
      top: event.pageY - $("#scene").offset().top + 30
    });
  }
});