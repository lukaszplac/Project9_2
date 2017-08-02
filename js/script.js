var femaleNames = ["Ania", "Basia", "Kasia", "Wiesia"];
var maleNames = ["Marek", "Darek", "Lutek", "Romek", "Kazek"];
var allNames = femaleNames.concat(maleNames);
console.log(allNames);

function addName(newName) {
  if (isPresent(newName)) {
    console.log("Name already exists. " + newName + " not added." );
  } else {
   allNames.push(newName);
   console.log("Name " + newName + " added");
  }
}

function isPresent(newName) {
  if (allNames.indexOf(newName) >= 0) {
    return true;
  } else {
    return false;
  }
}

addName("Bronia"); //should be added
console.log(allNames);

addName("Wiesia"); //should not be added
console.log(allNames);

addName("Krystek"); //should be added
console.log(allNames);
