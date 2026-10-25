let environmentTitle = "Pink Pony World";

let environmentElements = ["pony", "star", "gay cat"];

let mainEntity = {
    
    name: "Cotton Candy pony",
    type: "whimsycal",
    mood: "detached",
    isMoving: "true",
    favoriteElement: environmentElements[3]

};
let pinkieMoods = [
    "Pony is happy!",
    "Pony is getting tired...",
    "Pony is sad!"
];

let count= 0;


$("#button1").click(function () {
     count = count + 1;

    let arrayPosition = count - 1;

    let message = "<p>You clicked me " + count + " times.</p>";
 message = message + "<p>I am " + mainEntity.name + ".</p>"; 
 message = message + "<p>I am a " + mainEntity.type + " type.</p>";   
    
$("#environment-output").html(message);
changeMood(count);



function changeMood(clicks) {
    if (clicks <= 3) {
        $("#mood").html(pinkieMoods[0]);
        } else if (clicks <= 6) {
        $("#mood").html(pinkieMoods[1]);
    } else {
        $("#mood").html(pinkieMoods[2]);
    } 
}





});

