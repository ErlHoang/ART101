let count = 0;


let colors =["N/A", "green", "orange", "brown", "yellow", "gold", "purple", "red", "pink"];
    // square brackets mean list, or array. Fill with colors below. Keep colors in " "
    // cycle through colors: green, orange, brown, yellow, gold, purple, red, pink
    // each color will have it's own value or index assigned to it starting with index 0.
    // by having an empty element or 0 at the beginning of the array, we can assign the color green to index 1.

let buttonText = "";

$("#needy-button").click( function() {
    // what to do when the button is clicked
    // first, set a new value for "count", which is the current value +3

    count = count + 3; 
    if (count > 100) {
        count = 100;
    }
    // if statement caps the value fo r"count" at 100 if the value exceeds 100.

    console.log(count);
    console.log(colors[count]);
    // in the console, each click will be logged as the new value for "count".

    buttonText = "Your chances of getting boba this week has increased by " + count + 
    "% and the color is " + colors[count-1] + "!";
    // set the text of the button to the value of "buttonText"

    $("#needy-button").html(buttonText);
    // #needy-button is ID selector

    $("body").css("background-color", colors[count-2]);
    // body is the element selector

});
