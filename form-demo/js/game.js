let fname = "";

//function for greet
function greet() {
    //grab the greet paragraph
    let greetParagraph = document.getElementById("greet");
    //get values from form
    fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;

    //show results!
    greetParagraph.innerHTML = "Greetings " + age + " year-old " + fname + " " + lname + "!";

}

//function for trivia
function trivia() {
    //trivia answer
    let triviaAnswer = document.getElementById("trivia-answer");
    //check values
    let maxSelected = document.getElementById("max").checked;
    let lewisSelected = document.getElementById("lewis").checked;
    let charlesSelected = document.getElementById("charles").checked;

    if (maxSelected) {
        triviaAnswer.innerHTML = fname + ", you are correct!";
    } else if (lewisSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong, lewis did not win!";
    } else if (charlesSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong, charles lost!";
    }
}

//function for truth
function truth() {
    //trivia answer
    let triviaAnswer = document.getElementById("truth-answer");
    //check values
    let soccer = document.getElementById("soccer").checked;
    let yearbook = document.getElementById("yearbook").checked;
    let spiritpoints = document.getElementById("spiritpoints").checked;

    if (soccer) {
        triviaAnswer.innerHTML = fname + ", wrong, I have played soccer for longer total!";
    } else if (yearbook) {
        triviaAnswer.innerHTML = fname + ", that's correct! I did not do last years.";
    } else if (spiritpoints) {
        triviaAnswer.innerHTML = fname + ", wrong, this is true!";
    }
}