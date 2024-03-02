document.write (typeof "word");  // will display string 
document.write ("&nbsp");
document.write (typeof 5);       // will display number
document.write ("&nbsp");
document.write ("10" + 5);       // coercion type 

// NaN, +insinity, -infinity isNaN
document.write ("&nbsp");
function my_Function (){
    document.getElementById("Test").innerHTML = 0/0

}

function my_Function1 (){
    document.getElementById("Test1").innerHTML = isNaN("this is a string")
}

function my_Function2 (){
    document.getElementById("Test2").innerHTML = isNaN ("007");
}

function my_Function3 (){
    document.getElementById("Test3").innerHTML = 2E310;
}

function my_Function4 (){
    document.getElementById("Test4").innerHTML = -3E310;
}

//Boolean 

document.write (6 < 3);
document.write ("&nbsp");
document.write (22 >= 22);
document.write ("&nbsp");
console.log(2 + 2)

console.log (6 > 2);        // is used to display in console web browser.
console.log (21 <= 22);

console.log (10 == 10);    //used to receive a true or 
console.log (3 == 10);     // false

// ask to check if data in A and B are equal.
A = "car"
B = "car"
console.log (A === B);

A = "boat"
B = "car"
console.log (A === B);

A = "car"
B = 5
console.log (A === B);

// OR and AND operator
console.log (6 > 2 && 20 > 5);
console.log (6 > 2 && 10 > 11);
console.log (6 > 2 || 10 > 5);
console.log (6 > 22 || 10 > 15);

// not operator
function my_Function5 () {
    document.getElementById("not").innerHTML = !(5 > 10)
}

function my_Function6 () {
    document.getElementById("true").innerHTML = !(10 > 5)
}