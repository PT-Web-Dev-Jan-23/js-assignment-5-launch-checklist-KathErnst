// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
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
    let form = document.getElementById("testForm");
    form.addEventListener("submit", function (event) {
        const pilotNameInput = document.querySelector("input[name=pilotName]");
        const copilotNameInput = document.querySelector("input[name=copilotName]");
        const fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        const cargoMassInput = document.querySelector("input[name=cargoMass]");

        const faultyItems = document.getElementById("faultyItems");
        const pilotStatus = document.getElementById("pilotStatus");
        const copilotStatus = document.getElementById("copilotStatus");
        const fuelStatus = document.getElementById("fuelStatus");
        const launchStatus = document.getElementById("launchStatus");
        const cargoStatus = document.getElementById("cargoStatus");

        if ((validateInput(pilot) === "Empty") || (validateInput(copilot) === "Empty") || 
        (validateInput(fuelLevel) === "Empty") || (validateInput(cargoLevel) === "Empty")) {
            alert("All fields are required!");
            event.preventDefault();
        } else if (  (validateInput(pilot) === "Is a number") || (validateInput(copilot) === "Is a number") || 
        (validateInput(fuelLevel) === "Not a number") || (validateInput(cargoLevel) === "Not a number")  ) {
            alert("Make sure to enter valid information for each field!");
            event.preventDefault();
        } else {
            pilotStatus.innerHTML = `Pilot ${pilotNameInput} is ready for launch.`;
            copilotStatus.innerHTML = `CoPilot ${copilotNameInput} is ready for launch.`;
                if (fuelLevelInput < 10000) {
                    faultyItems.style.visibility = "visible";
                    fuelStatus.innerHTML = "Fuel level too low for launch.";
                    launchStatus.innerHTML = "Shuttle not ready for launch";
                    launchStatus.style.color = "red";
                } else if (cargoMassInput > 10000) {
                    faultyItems.style.visibility = "visible";
                    cargoStatus.innerHTML = "Cargo mass too heavy for launch."
            } //TEMPLATE LITERAL?? ^^^^^^^^^
        }
    })
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
