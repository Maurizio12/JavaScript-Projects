function addition () {
    var addition = (2 + 2);
    document.getElementById("Plus").innerHTML = "2 + 2 =" + addition;
}

function subtraction () {
    var subtraction = (5 - 2);
    document.getElementById ("Minus").innerHTML = "5 - 2 =" + subtraction;
}

function division () {
    var division = (20 / 5);
    document.getElementById ("Divided").innerHTML = "20 / 5 =" + division;
}

function multiplication () {
    var multiplication = (6 * 8);
    document.getElementById ("Multiply").innerHTML = "6 * 8 =" + multiplication;
}

function mix_Math () {
    var mix_Math = (1 + 5) *12 / 2 - 11;
    document.getElementById ("mix_Math").innerHTML = "1 plus 5 multiply 12 diveded by 2 and the subtract by eleven =" + mix_Math;
}

function modulus () {                                      // this function is use to calculate the remainder
    var modulus = (25 % 6);
    document.getElementById ("modulus").innerHTML = "25 % 6=" + modulus
}

//unary operator is -5 negation operator
//binary is 5+5 

function unary () {
    var X = 10;
    document.getElementById("unary").innerHTML = -X;
}

var x = 5 ;
x++ ;
document.write (x);

var x = 5;
x--;
document.write (x);


function random() {
    document.getElementById("random").innerHTML = Math.random()*10;
}

document.write(" 10" + 5)