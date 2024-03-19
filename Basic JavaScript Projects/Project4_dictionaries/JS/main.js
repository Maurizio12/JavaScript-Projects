//Dictionary
function my_Dictionary (){
    var Animal = {
        species: "Dog",
        Color: "black",
        Breed: "Labrador",
        Age: 5,
        Sound: "Bark"
    };
    delete Animal.Color;                                             // if I choose color will be undefined 
    document.getElementById("Dictionary").innerHTML = Animal.Color;  //Animal.Breed parents.child 
}
