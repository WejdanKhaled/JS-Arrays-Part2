function isArrayLengthOdd(numbers) {
    const sizeOfArray = numbers.length;
    if (sizeOfArray % 2) {
        return true;
    } 
    else {
        return false;
 }
}
console.log(isArrayLengthOdd([1,2,3,4])); 
function isArrayLengthEven(numbers) {
    if (numbers.length % 2) {
        //numbers is odd 
        return false;
    } else {
        return true;
    }
}
console.log(isArrayLengthEven([1,2,3,4])); 

function addLailaToArray(instructors) {
    //copy array instructors
    const newInstructors = instructors;
    //add"Laila to array
    newInstructors.push("Laila")
    //return new array
    return newInstructors;

}
console.log(addLailaToArray(["Mshary","Hasan"]));
function eliminateTeam(teams) {
    //removeblast element from teamsn
   const lastTeam = teams.pop();
    //return tems
    return lastTeam;
}

console.log(eliminateTeam(["Brazil","Germany","Italy"]));

function secondHalfOfArrayIfItIsEven(fruits) {
    if (isArrayLengthEven(fruits)) {
        return fruits.slice(0, 1);
    }
}

console.log(secondHalfOfArrayIfItIsEven(["apple","orange","banana","kiwi"]));
