// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   const missionTarget = document.getElementById("missionTarget");
   missionTarget.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
    `
}

function validateInput(testInput) {
    if (testInput === "") { 
        return "Empty";
        } else if (isNaN(testInput)) {
            return "Not a number";
        } else if (!isNaN(testInput)) {
            return "Is a number";
        }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
        const pilotStatus = document.getElementById("pilotStatus");
        const copilotStatus = document.getElementById("copilotStatus");
        const fuelStatus = document.getElementById("fuelStatus");
        const launchStatus = document.getElementById("launchStatus");
        const cargoStatus = document.getElementById("cargoStatus");

        if (validateInput(pilotNameInput) === "Empty" || validateInput(copilotNameInput) === "Empty" || 
        validateInput(fuelLevelInput) === "Empty" || validateInput(cargoLevelInput) === "Empty") {
            alert("All fields are required!");
        } else if (  validateInput(pilotNameInput) === "Is a number" || validateInput(copilotNameInput) === "Is a number" || 
        validateInput(fuelLevelInput) === "Not a number" || validateInput(cargoLevelInput) === "Not a number"  ) {
            alert("Please enter valid information for each field!");
        } else {
            list.style.visibility = "visible";
            pilotStatus.innerHTML = `Pilot ${pilotNameInput} is ready for launch.`;
            copilotStatus.innerHTML = `CoPilot ${copilotNameInput} is ready for launch.`;
                if (fuelLevelInput < 10000 && cargoMassInput <= 10000) {
                    fuelStatus.innerHTML = "Fuel level too low for launch.";
                    cargoStatus.innerHTML = "Cargo mass ready for launch.";
                    launchStatus.innerHTML = "Shuttle not ready for launch";
                    launchStatus.style.color = "red";
                } else if (fuelLevelInput >= 10000 && cargoMassInput > 10000) {
                    fuelStatus.innerHTML = "Fuel level ready for launch.";
                    cargoStatus.innerHTML = "Cargo mass too heavy for launch.";
                    launchStatus.innerHTML = "Shuttle not ready for launch";
                    launchStatus.style.color = "red";
                } else if (fuelLevelInput < 10000 && cargoMassInput > 10000) {
                    fuelStatus.innerHTML = "Fuel level too low for launch.";
                    cargoStatus.innerHTML = "Cargo mass too heavy for launch.";
                    launchStatus.innerHTML = "Shuttle not ready for launch";
                    launchStatus.style.color = "red";
                } else {
                    fuelStatus.innerHTML = "Fuel level ready for launch.";
                    cargoStatus.innerHTML = "Cargo mass ready for launch.";
                    launchStatus.innerHTML = "Shuttle is ready to launch.";
                    launchStatus.style.color = "green";
                }
        }
    };


async function myFetch() {
    let planetsReturned;
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
    });
    return planetsReturned;
};
console.log(myFetch());

function pickPlanet(planets) {
    let index = Math.floor(Math.random()*planets.length);
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
