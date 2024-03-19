//ternary oparators 
function Ride_Function (){
    var Height , Can_ride;
    Height =document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "Youa are too short" : "You are tall enough";  //ternary operators Name_of_variable = (condition) ? Value_1:Value_2
    document.getElementById ("Ride").innerHTML = Can_ride + " to ride";
}

function check_Age () {
    var age, can_Vote;
    age = document.getElementById ("Age").value;
    can_Vote = (age < 18) ? "You are too young" : "You are old enough";
    document.getElementById("elegible").innerHTML = can_Vote + " to vote";
}


/*constructor*/
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;                  // this function is a costructor
    this.Vehicle_Year = Year;                    // using this as keyword
    this.Vehicle_Color = Color;                  
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red")
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "Black and White")
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard")
function myFunction() {
    document.getElementById("New_and_This").innerHTML = 
    "Jack drive a" + Jack.Vehicle_Model + " " + Jack.Vehicle_Year;
}

/*Nested function */
function my_Function() {
    document.getElementById("Nested_Function").innerHTML = count ();
    function count () {
        var starting_Point = 9;
        function plus_one () {
            starting_Point += 1;
        }
        plus_one()
        return starting_Point
    }
}


function add_number1 () {
    var X =10;
    console.log (15 + X);
}

function add_number2 () {
    console.log (15 + X);
}

add_number1 ();
add_number2 ();