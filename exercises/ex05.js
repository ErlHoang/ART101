// this function expects a color
    function paintPage (color){
        $("body").css("background-color", color);
    }

    paintPage("yellow");

// the clicker button program

// we create a variable named "count", the initial; value is 0

let count=0;
let colorsCount=0; 

// an indexed array of data
let colors=["green", "orange", "brown", "yellow", "gold", "purple", "red", "pink"];

let buttonText="";

// we listen for when an html element with id "needy-button" is clicked and then...

$("#needy-button").click( function(){ 

    // what to do when the button is clicked
    // first, set a new value for "count", which is the current value + 1

    count = count +1; 

    console.log(count);
    console.log(colors[colorsCount]); 

    // now let's find our button and set a new text for it

    buttonText="I was kicked " + count + " times and color is " + colors[colorsCount]; 

    $("#needy-button").html( buttonText ); 

    $("body").css( "background-color", colors[colorsCount] ); 

    //$("body").append(" <img width='50' src='" +colors[colorsCount]  +".jpg'>" );

    if ( count >= 16) {  $("#needy-button").after("<p>my mood is... wild!</p>");   }
    else if ( count >= 13 ) {  $("#needy-button").after("<p>my mood is... really agitated</p>");   }
    else if (count >= 5) { $("#needy-button").after("<p>my mood is... agitated</p>");   }

    // if(  (count >= 5)  && ( count < 13)  ) {  $("#needy-button").after("<p>my mood is... agitated</p>");   }

    // if( count >= 13 ) {  $("#needy-button").after("<p>my mood is... really agitated</p>");   }

    // if( count >= 16 ) {  $("#needy-button").after("<p>my mood is... wild!</p>");   }


    colorsCount = colorsCount +1;  

    // if we are run out of colors start fron the first one anew
    if ( colorsCount >= 8 ) { colorsCount = 0;  } ;
});

$("green").click (function (){
    console.log("green was clicked");
    paintPage("green");
});

$("orange").click (function (){
    console.log("orange was clicked");
    paintPage("orange");
});

$("purple").click (function () {
    console.log("purple was clicked");
    paintPage("purple");
});