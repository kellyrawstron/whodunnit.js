

//  LEXICAL SCOPE
var fname = "Kelly"


// FUNCTION SCOPE only visable inside the function
var secretsFunction = function () {
    var pinCode = [0, 0, 0, 0];
    console.log('name inside function:', fname);
}

secretsFunction();
console.log('name outside function:', fname);


var filterNamesByFirstLetter = function (names, letter) {
    var filteredNames = []
    // BLOCK SCOPE
    for (let name of names) {
        if (name[0] === letter) {
            filteredNames.push(name);
        }
    }
    // console.log("name after loop:", name);
    return filteredNames;
};

var students = ["Alice", "Bob", "Alyssia", "Artem", "Babs"];
var filteredStudents = filterNamesByFirstLetter(students, "A");
console.log("filteredStudents:", filteredStudents);


let isItFive = function (number) {
    let result;
    if (number === 5) {
         result = true;
    } else {
         result = false;
    }
    return result;
}

let calculateEnergy = function (mass) {
    const speedOfLight = 299792458;
    return mass * speedOfLight ** 2;
}

let energyOfMe = calculateEnergy(60);
console.log(energyOfMe);