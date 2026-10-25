//the clicker button program

let count =0;

let colors=["green", "orange", "brown","yellow","gold","purple","red","pink"];

let buttonText=""

//green, orange, brown, yellow, gold, purple, red, pink

$("#needy-button").click( function() {
    //what to do when the button is clicked
    count = count +1;

    console.log(count);
    console.log(colors[count-1]);

    buttonText="I was clicked " + count + " times and color is " + colors[count-1];

    $("#needy-button").html(buttonText);
    $("body").css("background-color",colors[count-1] );

     $("body").append("<img width='50' src='tomato.png'>");

//if we are run out of colors start from the first one

if (count >= 5)  { $("#needy-button").after(" <p> My mood is agitated</p>");
}


if (count >= 8) {count = 0;}

colorsCount = colorsCount +1;
if(count >= 8 ) {count = 0;  }
if ( colorsCount >= 8 ) { colorsCount = 0 ; }






});

