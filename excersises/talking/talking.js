// A says
let messagesA=["How are you doing", "Sorry to hear that", "brown","What color would you like it to be"];
let counterA=0
// B says

let messagesB=["Terrible", "The background color is awful", "Not this one"];


// When A is clicked

$("#character-a").click(function (){

$("chat").append("<p>jake:"+messagesA[0]+"</p>");

counterA=counterA+1;

});

//when B is clicked
$("#character-a").click(function (){

$("chat").append("<p>jake:"+messagesB[0]+"</p>");

counterA=counterA+1;

});
