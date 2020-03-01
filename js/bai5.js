let starsList = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe","Regulus"];
let  constellations = [ "Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa Major","Leo"];

let input = prompt("Enter the star you want to search:");
process(input)
function process(inputValue) {
    let indexOfStar = starsList.indexOf(inputValue);
    if(indexOfStar!=-1){
        alert("The "+input+" is in "+constellations[indexOfStar]);
    }
    else {
        alert("Star not found");
    }
}