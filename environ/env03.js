let environmentTitle = "A Hungry Horse at Sea";

//info on Seuin Sky
let mainEntity = {
    name: "Seuin Sky",
    species: "Uma",
    mood: "hungry",
    favoriteFood: "Carats",
    favoriteElement: "fishing",
};

//mood array
let moods = ["hungry", "relaxed", "full", "sleepy", "upset", "angry"];

//will change based on fish amount later
let boatCondition = "The boat is drifting along the waves. Its wood is barely holding itself together with the weight of you and Seuin Sky.";

//fish function
let fishCaught =  0;

//track time
let pageOpened = Date.now();
let activeInfo = "";

console.log("Environment Title:", environmentTitle);
console.log("Main Entity:", mainEntity);
console.log("Boat Condition:", boatCondition);
console.log("Fish Caught:", fishCaught);
console.log("Page Opened:", pageOpened);
console.log("Active Information Panel:", activeInfo);

//Time
function formatDuration(milliseconds) {
    let totalSeconds = Math.floor(milliseconds / 1000);

    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    return hours + " hours, " + minutes + " minutes, " + seconds + " seconds";
}


//Info panel
function showInfo(section) {
    activeInfo = section;

    let output = "";

    if (section == "title") {
        output =
            "<h2>Environment Title</h2>" +
            "<p>" + environmentTitle + "</p>";
    }

    else if (section == "entity") {
        output =
            "<h2>" + mainEntity.name + "</h2>" +
            "<p><strong>Species:</strong> " + mainEntity.species + "</p>" +
            "<p><strong>Mood:</strong> " + mainEntity.mood + "</p>" +
            "<p><strong>Favorite Food:</strong> " + mainEntity.favoriteFood + "</p>" +
            "<p><strong>Favorite Element:</strong> " + mainEntity.favoriteElement + "</p>";
    }

    else if (section == "boat") {
        output =
            "<h2>Boat Condition</h2>" +
            "<p>" + boatCondition + "</p>";
    }

    else if (section == "time") {
        output =
            "<h2>Time at Sea</h2>" +
            "<p><strong>Time Stuck at Sea:</strong> " +
            formatDuration(Date.now() - pageOpened) + "</p>";
    }

    else if (section == "fish") {
        output =
            "<h2>Fishing Report</h2>" +
            "<p><strong>Fish Caught:</strong> " + fishCaught + "</p>" +
            "<p>Click a fish image below to catch a fish!</p>";
    }

    $("#info-display").html(output);
}


//Mood Array
function updateSeuinMood() {

    if (fishCaught < 3) {
        mainEntity.mood = moods[0];
    }

    else if (fishCaught < 5) {
        mainEntity.mood = moods[1];
    }

    else if (fishCaught < 10) {
        mainEntity.mood = moods[2];
    }

    else if (fishCaught < 15) {
        mainEntity.mood = moods[3];
    }

    else if (fishCaught < 20) {
        mainEntity.mood = moods[4];
    }

    else {
        mainEntity.mood = moods[5];
    }

    console.log("Seuin Sky's current mood:", mainEntity.mood);
}


//Fish Clicker
$(".below_zone img").click(function () {

    //At 20 fish is too many
    if (fishCaught >= 20) {
        console.log("You have reached the maximum number of fish!");
        return;
    }

    fishCaught = fishCaught +1;

    console.log("Fish caught:", fishCaught);

    updateSeuinMood();

    //too many fishy and Seuin is angry
    if (fishCaught == 20) {
        boatCondition = "The boat can't hold anymore fish! Seuin Sky will throw you overboard!";

        console.log("Seuin Sky: You harming the fish-cosystem!");
    }

    // Refresh whichever information panel is currently visible
    if (activeInfo == "fish") {
        showInfo("fish");
    }

    else if (activeInfo == "entity") {
        showInfo("entity");
    }

    else if (activeInfo == "boat") {
        showInfo("boat");
    }

    //Seuin gets angry at 20 fish
    if (fishCaught == 20) {
        $("#info-display").append(
            "<p><strong>Seuin Sky:</strong> You harming the fish-cosystem!</p>"
        );
    }

});

$("#title-button").click(function () {
    showInfo("title");
});

$("#entity-button").click(function () {
    showInfo("entity");
});

$("#boat-button").click(function () {
    showInfo("boat");
});

$("#time-button").click(function () {
    showInfo("time");
});

$("#fish-button").click(function () {
    showInfo("fish");
});


setInterval(function () {
    if (activeInfo == "time") {
        showInfo("time");
    }
});