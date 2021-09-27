var myPetsArray = ["Dog", "Cat"];

function myArrayFunction(myPets) {
    var myNewPets = [...myPets];
    // Adding new values
    myNewPets.push("Bird", "Fish");
    // Deleting dog
    myNewPets.pop();
    //Adding Lion
    myNewPets[0] = "Lion";
    
    return myNewPets;
}

console.log(myArrayFunction(myPetsArray));
module.exports = myArrayFunction;