document.write ("helloo") 

var X = " This is a string"
document.write (X)

var text = "this is \\ my plain \"text\"" + "for a pop up alert"
window.alert (text);

var car =" ferrari", motorbike =" suzuki", boat =" Sailboat",
train =" Inter-City.";
document.write (train);

function click () {                                     //define a function and name it
    var str ="change_name";                             //define a variable, name it and give a string value
    document.getElementById("Button").innerHTML = str; // get element from an ID and dislpay the string value.
}

var Sent1 =" This is the beginning of the string",
    Sent2 =" and this is the end of the string."
    document.write(Sent1 + Sent2)

    function modify() {
        var text ="this is the text"
        document.getElementById("func").innerHTML = text;
    }