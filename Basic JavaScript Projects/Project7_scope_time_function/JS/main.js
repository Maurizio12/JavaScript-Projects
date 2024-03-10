var car = "ferrari";
function car_Type1 () {
    document.write ("This is your " + car + "<br>");
}

function car_Type2 () {
    document.write ("This is not your " + car + "<br>");
}

car_Type1 ();
car_Type2 ();

function car_Type3 (){
    var car ="Fiat"
    document.write ("This is your " + car + "<br>");       //This function using the local var
}

function car_Type4 () {
    document.write ("This is not your " + car);      // this function is using the global var
}

car_Type3 ();
car_Type4 ();

function get_Date () {
    if (new Date().getHours ()< 18){
    document.getElementById ("Greeting").innerHTML = "How are you today";
    }
}

function age_Function () {
    age = document.getElementById ("age").value;
    if (age >= 18) {
        Vote = "you are old enough to vote";
    }
    else {
        Vote = "You are not eligible to vote";
    }
    document.getElementById ("How old are you").innerHTML = Vote;
}


function time_Function() {
    var time = new Date().getHours();
    var Reply;
    if (time < 12 == time > 0) {
        Reply = "Good morning";
    }
    else if (time > 12 == time < 18) {
        Reply = "Good afternoon";
    }
    else {
        Reply ="Good night";
    }
    document.getElementById ("Time_of_Day").innerHTML = Reply;
}