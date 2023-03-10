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

        // const pilotNameInput = document.querySelector("input[name=pilotName]");
        // const copilotNameInput = document.querySelector("input[name=copilotName]");
        // const fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        // const cargoMassInput = document.querySelector("input[name=cargoMass]");


        if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || 
        validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
            alert("All fields are required!");
        } else if (  validateInput(pilot) === "Is a number" || validateInput(copilot) === "Is a number" || 
        validateInput(fuelLevel) === "Not a number" || validateInput(cargoLevel) === "Not a number"  ) {
            alert("Please enter valid information for each field!");
        } else {
            list.style.visibility = "visible";
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch.`;
            copilotStatus.innerHTML = `CoPilot ${copilot} is ready for launch.`;
                if (fuelLevel < 10000 && cargoLevel <= 10000) {
                    fuelStatus.innerHTML = "Fuel level too low for launch.";
                    cargoStatus.innerHTML = "Cargo mass ready for launch.";
                    launchStatus.innerHTML = "Shuttle not ready for launch";
                    launchStatus.style.color = "red";
                } else if (fuelLevel >= 10000 && cargoLevel > 10000) {
                    fuelStatus.innerHTML = "Fuel level ready for launch.";
                    cargoStatus.innerHTML = "Cargo mass too heavy for launch.";
                    launchStatus.innerHTML = "Shuttle not ready for launch";
                    launchStatus.style.color = "red";
                } else if (fuelLevel < 10000 && cargoLevel > 10000) {
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
        if (response.status >= 400) {
            throw new Error ("Bad response");
        }
        else {
            return response.json();
        }
    });
    return planetsReturned;
};


function pickPlanet(planets) {
    let index = Math.floor(Math.random()*planets.length);
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
