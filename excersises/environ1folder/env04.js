let environmentTitle = "Pink Pony World";
let environmentElements = ["pony", "star", "gay cat"];

let mainEntity = {
    name: "Cotton Candy pony",
    type: "whimsical",
    mood: "detached",
    isMoving: true,
    favoriteElement: environmentElements[2]
};

let pinkieMoods = [
    "Pony is happy!",
    "Pony is getting tired...",
    "Pony is sad!"
];

let count = 0;

function changeMood(clicks) {
    if (clicks <= 3) {
        $("#mood").html(pinkieMoods[0]);
    } else if (clicks <= 6) {
        $("#mood").html(pinkieMoods[1]);
    } else {
        $("#mood").html(pinkieMoods[2]);
    }
}

$("#button1").click(function () {
    count = count + 1;
    let message = "<p>You clicked me " + count + " times.</p>";
    message += "<p>I am " + mainEntity.name + ".</p>";
    message += "<p>I am a " + mainEntity.type + " type.</p>";
    $("#environment-output").html(message);
    changeMood(count);
});

$("#title-btn").click(function () {
    $("#environment-output").html(environmentTitle);
});

$("#elements-btn").click(function () {
    $("#environment-output").html(environmentElements.join(", "));
});

$("#entity-btn").click(function () {
    $("#environment-output").html(
        "Name: " + mainEntity.name + "<p>Type: " + mainEntity.type + "</p>"
    );
});

$("#mood-btn").click(function () {
    changeMood(count);
    $("#environment-output").html("Current mood: " + $("#mood").text());
});

function setTime(time) {
    if (time === "day") {
        $("body").removeClass("night");
        $("#environment-output").html("The sun is out. Pony is sparkling!");
        $("#mood").html(pinkieMoods[0]);
    } else if (time === "night") {
        $("body").addClass("night");
        $("#environment-output").html("It's night. Pony is sleepy...");
        $("#mood").html(pinkieMoods[1]);
    } else {
        $("#environment-output").html("Pony doesn't know that time.");
    }
}

$("#day-btn").click(function () { setTime("day"); });
$("#night-btn").click(function () { setTime("night"); });