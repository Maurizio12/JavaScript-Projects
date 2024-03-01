function my_Function () {
    var str1 =" This is my first string",
    str2 =" and this is the second one.";
    document.getElementById("Button").innerHTML = str1 + str2
}


function my_Function2 () {                                  // define a functione and name it
    var str =" This is my first string";                    // define a var and name it by giving a string value 
    str +=" and this is the second one.";                   // define a var and name it "concatenate +=" with var 1 by giving a string value 
    document.getElementById("Button1").innerHTML = str      // get document utilize an Id attribute, display a string concatenated.
}
