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

// hover: pony gets excited
$("#button1").on("mouseenter", function () {
    $(this).addClass("excited");
    $("#mood").html("Pony is excited!");
});

$("#button1").on("mouseleave", function () {
    $(this).removeClass("excited");
    changeMood(count);
});

// double-click: hidden message appears, then disappears
$("#button1").dblclick(function () {
    $("#secret").fadeIn(400);
    setTimeout(function () {
        $("#secret").fadeOut(400);
    }, 2000);
});

// key press: Nyan Cat jumps to a random spot
$(document).keydown(function (event) {
    if (event.key === "n") {
        let x = Math.floor(Math.random() * 300) - 150;
        let y = Math.floor(Math.random() * 200) - 100;
        $("#nyan").animate({ left: x, top: y }, 300);
    }
});