//global variables
var v_spino = document.getElementById("spino");
var v_angryspino = document.getElementById("angryspino");
var v_goat = document.getElementById("goat");
var v_deadspino = document.getElementById("deadspino");
var v_thirstyspino = document.getElementById("thirstyspino");
var v_spinoroar = document.getElementById("spinoroar");

var spinoHandle = document.getElementById("spino");
var v_youdied = document.getElementById("youdied");
var v_meterhunger = document.getElementById("m_hunger");
var v_metermood = document.getElementById("m_mood");
var v_meterthirst = document.getElementById("m_thirst");
var v_hungerHandle = document.getElementById("hungerspan");
var v_thirstHandle = document.getElementById("thirstspan");
var v_reviveButton = document.getElementById("b_revive");
var v_endText = document.getElementById("endText");
var v_lifespanAge = document.getElementById("lifespanAge");
var v_viewSpanLifespan = document.getElementById("viewSpanLifespan")
var v_viewLifespan = document.getElementById("viewLifespan")
var v_currImage = "normal";

var v_feedCounter = 0;
var v_hunger = 100;
var v_mood = 100;
var v_thirst = 100;
var v_age = 1;
var v_eButton = 0;

function f_display() {
    //f_display constantly checks whatever is in here
    v_hunger = Math.round(v_hunger * 100) / 100;
    v_hungerHandle.innerText = String(v_hunger);
    v_meterhunger.value = v_hunger;

    v_thirst = Math.round(v_thirst * 100) / 100;
    v_thirstHandle.innerText = String(v_thirst);
    v_meterthirst.value = v_thirst;
    v_metermood.value = v_mood;

    f_Mood();

}

function f_Feed() {
    //checks if the dinosaur is dead or not to prevent feeding a dead dinosaur
    if (v_deadspino.style.display === "inline") {
        alert("You can't feed a dead dinosaur!");
    } else {
        //adds 15 to the huner meter, sets mood to max when within a good range
        v_hunger += 15;
        v_hunger = f_keepInRange(v_hunger, 0, 115);
        if (v_hunger > 50 && v_thirst > 60) {
            v_mood = 100;
        }
    }
}
function f_spinoSize(v_age) {
    //increases size of image every 30 seconds or every "3 years"
    if (v_age === 3) {
        spinoHandle.style.width = '462px';
        spinoHandle.style.height = '214px';
        v_angryspino.style.width = '462px';
        v_angryspino.style.height = '214px';
        v_deadspino.style.width = '462px';
        v_deadspino.style.height = '214px';
        v_thirstyspino.style.width = '462px';
        v_thirstyspino.style.height = '214px';
        v_spinoroar.style.width = '462px';
        v_spinoroar.style.height = '214px';
        //smooth transitions between "sizes"
        spinoHandle.style.transition = "all 1s";
        v_angryspino.style.transition = "all 1s";
        v_deadspino.style.transition = "all 1s";
        v_thirstyspino.style.transition = "all 1s";
        v_spinoroar.style.transition = "all 1s";
    } else if (v_age === 6) {
        spinoHandle.style.width = '693px';
        spinoHandle.style.height = '321px';
        v_angryspino.style.width = '693px';
        v_angryspino.style.height = '321px';
        v_deadspino.style.width = '693px';
        v_deadspino.style.height = '321px';
        v_thirstyspino.style.width = '693px';
        v_thirstyspino.style.height = '321px';
        v_spinoroar.style.width = '693px';
        v_spinoroar.style.height = '321px';
        spinoHandle.style.transition = "all 1s";
        v_angryspino.style.transition = "all 1s";
        v_deadspino.style.transition = "all 1s";
        v_thirstyspino.style.transition = "all 1s";
        v_spinoroar.style.transition = "all 1s";
    } else if (v_age === 9) {
        spinoHandle.style.width = '924px';
        spinoHandle.style.height = '428px';
        v_angryspino.style.width = '924px';
        v_angryspino.style.height = '428px';
        v_deadspino.style.width = '924px';
        v_deadspino.style.height = '428px';
        v_thirstyspino.style.width = '924px';
        v_thirstyspino.style.height = '428px';
        v_spinoroar.style.width = '924px';
        v_spinoroar.style.height = '428px';
        spinoHandle.style.transition = "all 1s";
        v_angryspino.style.transition = "all 1s";
        v_deadspino.style.transition = "all 1s";
        v_thirstyspino.style.transition = "all 1s";
        v_spinoroar.style.transition = "all 1s";
    } else if (v_age === 12) {
        spinoHandle.style.width = '1155px';
        spinoHandle.style.height = '535px';
        v_angryspino.style.width = '1155px';
        v_angryspino.style.height = '535px';
        v_deadspino.style.width = '1155px';
        v_deadspino.style.height = '535px';
        v_thirstyspino.style.width = '1155px';
        v_thirstyspino.style.height = '535px';
        v_spinoroar.style.width = '1155px';
        v_spinoroar.style.height = '535px';
        spinoHandle.style.transition = "all 1s";
        v_angryspino.style.transition = "all 1s";
        v_deadspino.style.transition = "all 1s";
        v_thirstyspino.style.transition = "all 1s";
        v_spinoroar.style.transition = "all 1s";
    } else if (v_age === 15) {
        spinoHandle.style.width = '1319px';
        spinoHandle.style.height = '610px';
        v_angryspino.style.width = '1319px';
        v_angryspino.style.height = '610px';
        v_deadspino.style.width = '1319px';
        v_deadspino.style.height = '610px';
        v_thirstyspino.style.width = '1319px';
        v_thirstyspino.style.height = '610px';
        v_spinoroar.style.width = '1319px';
        v_spinoroar.style.height = '610px';
        spinoHandle.style.transition = "all 1s";
        v_angryspino.style.transition = "all 1s";
        v_deadspino.style.transition = "all 1s";
        v_thirstyspino.style.transition = "all 1s";
        v_spinoroar.style.transition = "all 1s";
    } else if (v_age === 16) {
        alert("Your Spinosaurus is the Maximum Size!");
    }

}

function f_Mood() {
    //each picture is here to make sure any pictures on the screen from before are removed and replaced
    if (v_eButton === 0) {
        //checks values of v_hunger, v_thirst, and v_ mood and displays a state depending on it
        if (v_hunger === 0 && v_thirst === 0) {
            v_goat.style.display = "none";
            v_angryspino.style.display = "none";
            v_spino.style.display = "none";
            v_deadspino.style.display = "inline";
            v_youdied.style.display = "none";
            v_thirstyspino.style.display = "none";
            v_currImage = "dead";
            v_mood = 0;

            f_setLifespanAge();

        } else if (v_mood < 33) {
            v_goat.style.display = "none";
            v_angryspino.style.display = "inline";
            v_spino.style.display = "none";
            v_deadspino.style.display = "none";
            v_youdied.style.display = "none";
            v_thirstyspino.style.display = "none";
            v_currImage = "angry";

        } else if (v_hunger < 30 || v_thirst < 40) {
            f_moodTimer(2);
            v_goat.style.display = "none";
            v_angryspino.style.display = "none";
            v_spino.style.display = "none";
            v_deadspino.style.display = "none";
            v_youdied.style.display = "none";
            v_thirstyspino.style.display = "inline";
            v_currImage = "thirsty";

        } else if (v_hunger < 50 || v_thirst < 60) {
            f_moodTimer(1);
            v_goat.style.display = "none";
            v_angryspino.style.display = "none";
            v_spino.style.display = "inline";
            v_deadspino.style.display = "none";
            v_youdied.style.display = "none";
            v_thirstyspino.style.display = "none";
            v_currImage = "normal";

        } else if (v_hunger > 50) {
            v_goat.style.display = "none";
            v_angryspino.style.display = "none";
            v_spino.style.display = "inline";
            v_deadspino.style.display = "none";
            v_youdied.style.display = "none";
            v_thirstyspino.style.display = "none";
            v_currImage = "normal";


        }
    }
}

function f_Entertain() {
    //v_eButton is what overrides all of the style.display in f_mood() 
    v_eButton = 1;
    v_mood += 50;
    f_show();
}

function f_show() {
//called by f_entertain() to display the roaring spino for 2 seconds when "Entertain" is pressed
    if (v_currImage === "dead") {
        v_deadspino.style.display = "none";
    } else if (v_currImage === "angry") {
        v_angryspino.style.display = "none";
    } else if (v_currImage === "thirsty") {
        v_thirstyspino.style.display = "none";
    } else if (v_currImage === "normal") {
        v_spino.style.display = "none";
    }
    v_spinoroar.style.display = "inline";

    setTimeout("f_hide()", 2000);


}

function f_hide() {
//called by f_show() to put whatever image was displayed before back in place, sets v_eButton to 0 to resume f_Mood()
    v_spinoroar.style.display = "none";
    if (v_currImage === "dead") {
        v_deadspino.style.display = "inline";
    } else if (v_currImage === "angry") {
        v_angryspino.style.display = "inline";
    } else if (v_currImage === "thirsty") {
        v_thirstyspino.style.display = "inline";
    } else {
        v_spino.style.display = "inline";
    }

    v_eButton = 0;
}

function f_Thirst() {
    if (v_deadspino.style.display === "inline") {
        //restricts user from  giving the dinosaur water when dead
        alert("Your Spinosaurus is dead!");
    } else {
        //adds thirst to max and also is checked here to set mood to max if hunger and thirst are above 50 and 60
        v_thirst += 105;
        if (v_hunger > 50 && v_thirst > 60) {
            v_mood = 100;
        }
    }
}

function f_Revive() {
    //revive button if the dinosaur dies to continue playing without refreshing the page
    if (v_deadspino.style.display === "none") {
        //makes sure the user cannot "revive" the dinosaur when it is still alive
        alert("Your Spinosaurus has to be dead to be revived!");
    } else {
        confirm("Are you sure you want to revive? (One time use)")
        //sets all meters to the max
        v_hunger = 103;
        v_thirst = 105;
        v_mood = 100;
        //button dissapears so it is only one time use
        v_reviveButton.style.display = "none";
        v_endText.style.display = "none";
    }
}

function f_lifespanTimer() {
    //is called by setInterval every 10 seconds to add one "year" to the age, also checks if the dinosaur is alive so the dinosaur doesn't grow when it is dead
    if (v_deadspino.style.display === "none") {
        v_age += 1;
        f_spinoSize(v_age);
    }
}
function f_Lifespan() {
    //reveals v_viewLifespan (div in HTML) to tell the user the age of the dinosaur
    v_viewLifespan.style.display = "inline";
    //retrieves value from JS to put into an HTML div
    v_viewSpanLifespan.innerHTML = "Your Spinosaurus is " + v_age + " years old!";

    setTimeout("f_hideViewLifespan()", 3500);
    //based on constant ticking (1 year per minute)
    //tells user the current number of the year counter through alert + "years"
}

function f_hideViewLifespan() {
    //called by f_Lifespan to make the "notification" disappear after 3.5 seconds
    v_viewLifespan.style.display = "none";
}

function f_setLifespanAge() {
    //reveals v_endText (div in HTML) and is called when the dinosaur dies
    v_endText.style.display = "inline";
    //retrives v_age from JS to put into HTML
    v_lifespanAge.innerHTML = "Age: " + v_age;
}

function f_keepInRange(v, min, max) {
    //makes sure the values of v_hunger and v_thirst remain within the min and max of the meters (called in f_timer)
    if (v < min) {
        return min;
    }

    if (v > max) {
        return max;
    }

    return v;
}

function f_pause() {
    //simple pause button, displays an alert and stops intervals and timers on the page
    alert("Paused | Press 'OK' to resume")
}

function f_timer() {
    //called by setInterval every 0.2 seconds, decreases hunger by -0.3 and thirst by -0.5.
    //calls f_keepInRange to prevent the values of hunger and thirst going below 0 and above 100
    v_hunger -= 0.3;
    v_hunger = f_keepInRange(v_hunger, 0, 100);
    v_thirst -= 0.5;
    v_thirst = f_keepInRange(v_thirst, 0, 100);
    f_display();
}

function f_moodTimer(moodlevel) {
    //called by setInterval every second to check moodlevel

    if (moodlevel === 2) {
        //goes down by 2.5 if hunger and thirst are low
        v_mood -= 2.5;
    } else if (moodlevel === 1) {
        //goes down by less if hunger and thirst are medium
        v_mood -= 0.5;
    }
    //makes sure v_mood doesn't go beyond 0 and 100
    v_mood = f_keepInRange(v_mood, 0, 100);
}

//intervals for functions called every 0.2 seconds, 1 second, and 10 seconds
setInterval(f_timer, 200);
setInterval(f_moodTimer, 1000);
setInterval(f_lifespanTimer, 10000);

//go bears!