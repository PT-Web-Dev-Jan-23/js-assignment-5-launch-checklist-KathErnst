// Write your JavaScript code here!

const { formSubmission, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick 
        // a planet fom the list of planets and add that information to your destination.
        let destination = pickPlanet(listedPlanets);
        addDestinationInfo(document, destination.name, destination.diameter, destination.star, destination.distance, destination.moons, destination.imageUrl)
   });
  const list = document.getElementById("faultyItems");
  const form = document.getElementById("launchForm");
  list.style.visibility = "hidden";

   form.addEventListener("submit", function(event) {
    event.preventDefault();
    const pilotNameInput = document.querySelector("input[name=pilotName]");
    const copilotNameInput = document.querySelector("input[name=copilotName]");
    const fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    const cargoMassInput = document.querySelector("input[name=cargoMass]");

    formSubmission(document, list, pilotNameInput.value, copilotNameInput.value, fuelLevelInput.value, cargoMassInput.value);
   })
});
