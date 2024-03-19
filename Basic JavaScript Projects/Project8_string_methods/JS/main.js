function conc_Function () {
    var part1 ="I am a man,"
    var part2 ="I live in England,"
    var part3 ="but I am" 
    var part4 =" from India"
    var whole_Sentence = part1.concat (part2, part3, part4);
    document.getElementById ("concatenate").innerHTML = whole_Sentence;
}

function slice_method() {
    var sentence = "All work and no play makes Jhonny a dull boy";
    var Section = sentence.slice(11,18);
    document.getElementById("slice").innerHTML = Section;
}

function convert_number_to_string () {
    var X = 16;
    document.getElementById ("Number_to_string").innerHTML = X.toString();
}

function precision () {
    var X = 16.5641841;
    document.getElementById ("precision").innerHTML = X.toPrecision(5);
}