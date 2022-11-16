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
    let dreamCar = "Thanks " + fname + "! <br> Your Car Manufacturer Region: ";

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
        dreamCar = dreamCar + "German  <br> Your Engine:";
    }
    if (japaneseSelected) {
        dreamCar = dreamCar + "Japanese <br> Your Engine:";
    }
    if (americanSelected) {
        dreamCar = dreamCar + "American <br> Your Engine:";
    }
    if (britishSelected) {
        dreamCar = dreamCar + "British <br> Your Engine:";
    }


    //meat and seafood
    if (inline6Selected) {
        dreamCar = dreamCar + " Inline 6";
    }
    if (inline5Selected) {
        dreamCar = dreamCar + " Inline 5";
    }
    if (inline4Selected) {
        dreamCar = dreamCar + " Inline 4";
    }
    if (v6Selected) {
        dreamCar = dreamCar + " V6";
    }
    if (v8Selected) {
        dreamCar = dreamCar + " V8";
    }
    if (v10Selected) {
        dreamCar = dreamCar + " V10 ";
    }
    if (v12Selected) {
        dreamCar = dreamCar + " V12";
    }

    //print
    truthAnswer1.innerHTML = dreamCar;

}
