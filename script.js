// // Write your JavaScript code here!

window.addEventListener("load", function() {

    // when the submit button is clicked it will go to script helper to validate all info given and then update the form based off of incorrect or correct input
    document.getElementById('formSubmit').addEventListener('click', function(event){
        event.preventDefault();
        formSubmission(document, 
            document.getElementById('faultyItems'), 
            document.getElementById('pilotName').value, 
            document.getElementsByName('copilotName')[0].value, 
            document.getElementsByName('fuelLevel')[0].value, 
            document.getElementsByName('cargoMass')[0].value);
    }) 

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
        const pick = pickPlanet(listedPlanets);
        // console.log(pick);
        addDestinationInfo(document, pick.name, pick.diameter, pick.star, pick.distance, pick.moons, pick.image)
   })
   
});
