let following = false;

// $(this) means the specific element that received the event
$("#creature").click(function () {
    $(this).toggleClass("transformed"); //add the transformed class if it is not there, remove it if it is there
});