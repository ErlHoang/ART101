// A says
let messagesA = ["Who is stronger, you or me!", "Didn't we wanted to make it clear?", ". . .",];
let counterA = 0
// B says
let messagesB = ["...", "I believe we settled that matter at the Satsuki Sho.", "What did you think when you saw me run that day?",];
let counterB = 0

// when A is clicked
// A speaks when counterA = counterB
$("#character-a").click(function () {

    if (counterA == 3) {
        $("#answers").css("display", "flex");
        $("#chat").append("<p>Jungle Pocket: " + messagesA[counterA] + "</p>");
        counterA = counterA + 1;
        counterB=1000;
    }

    else if (counterA == counterB){
        $("#chat").append("<p>Jungle Pocket: " + messagesA[counterA] + "</p>");
        counterA = counterA + 1;
    }

});

// when B is clicked
// B speaks when counterB < counterA
$("#character-b").click(function () {

    if (counterB < counterA) {

        $("#chat").append("<p>Agnes Tachyon: " + messagesB[counterB] + "</p>");
        counterB = counterB + 1;

    }

});

// make the color buttons work

$("#answer-green").click(function () {

    $("body").css("background-color", "green");

});

$("#answer-pink").click(function () {
    
    $("body").css("background-color", "pink");

});