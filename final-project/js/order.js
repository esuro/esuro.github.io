let fname = document.getElementById("fname").value;
let lname = document.getElementById("lname").value;
let age = document.getElementById("age").value;




// function to trivia game
function truthAndLie() {
    // get paragraph
    let truthAnswer = document.getElementById("truth-answer");

    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;


    truthAnswer.innerHTML = "Hi " + age + " year old " + fname + " " + lname + ". Please make your dream car!"

}

// function to trivia game
function truthAndLie1() {
    //decide what to print

    // get paragraph
    let truthAnswer1 = document.getElementById("truth-answer1");
    let dreamCar = "Thanks " + fname + "! <br> Your dream car is from  ";

    //get the checked values from the form
    //cars
    let germanSelected = document.getElementById("German").checked;
    let japaneseSelected = document.getElementById("Japanese").checked;
    let americanSelected = document.getElementById("American").checked;
    let britishSelected = document.getElementById("British").checked;

    //engines
    let inline6Selected = document.getElementById("Inline 6").checked;
    let inline5Selected = document.getElementById("Inline 5").checked;
    let inline4Selected = document.getElementById("Inline 4").checked;
    let v6Selected = document.getElementById("V6").checked;
    let v8Selected = document.getElementById("V8").checked;
    let v10Selected = document.getElementById("V10").checked;
    let v12Selected = document.getElementById("V12").checked;

    //appetizer
    if (germanSelected) {
        dreamCar = dreamCar + "Germany with ";
    }
    if (japaneseSelected) {
        dreamCar = dreamCar + "Japan with ";
    }
    if (americanSelected) {
        dreamCar = dreamCar + "America with ";
    }
    if (britishSelected) {
        dreamCar = dreamCar + "Britain with ";
    }


    //meat and seafood
    if (inline6Selected) {
        dreamCar = dreamCar + "an Inline 6 engine!";
    }
    if (inline5Selected) {
        dreamCar = dreamCar + "an Inline 5 engine!";
    }
    if (inline4Selected) {
        dreamCar = dreamCar + "an Inline 4 engine!";
    }
    if (v6Selected) {
        dreamCar = dreamCar + "a V6 engine!";
    }
    if (v8Selected) {
        dreamCar = dreamCar + "a V8 engine!";
    }
    if (v10Selected) {
        dreamCar = dreamCar + "a V10 engine!";
    }
    if (v12Selected) {
        dreamCar = dreamCar + "a V12 engine!";
    }

    //print
    truthAnswer1.innerHTML = dreamCar;

}
