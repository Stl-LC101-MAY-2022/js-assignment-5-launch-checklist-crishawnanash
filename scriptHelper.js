// // Write your helper functions here!

require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
        const div = document.getElementById("missionTarget")
    
       // Here is the HTML formatting for our mission target div.
       
        div.innerHTML =     `
            <h2>Mission Destination</h2>
            <ol>
                <li>Name: ${name}</li>
                <li>Diameter: ${diameter}</li>
                <li>Star: ${star}</li>
                <li>Distance from Earth:${distance}</li>
                <li>Number of Moons: ${moons}</li>
            </ol>
            <img src="${imageUrl}">
        `
    
    }
    
    function validateInput(testInput) {
        let result
    
        if(testInput === "")
        {
            result = "Empty"
        }
        else if(isNaN(testInput))
        {
            result = "Not a Number"
        }
        else
        {
            result = "Is a Number"
        }
    console.log(testInput + "results are " + result)
        return result
    }

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   
    //easy recall for changing list status items
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus"); 
    let h2 = document.getElementById("launchStatus");

    //check for no empty fields
    let notEmpty = false;
    let fuelNumber = false;
    let cargoNumber = false;
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty" ) 
    {
        alert("All fields are required")
    }
    else
    {
        notEmpty = true
    }

    if(validateInput(fuelLevel)=== "Is a Number")
    {
        fuelNumber = true;
    }
    else
    {
        alert("Fuel Level should be a number. Please correct.")

    }

    if(validateInput(cargoLevel)=== "Is a Number")
    {
        cargoNumber = true;
    }
    else
    {
        alert("Cargo Level should be a number. Please correct.")

    }

    //if all valid imputs continue 
    if(notEmpty == true && fuelNumber == true && cargoNumber == true)
    {
    
        if(fuelLevel < 10000)
        {
            list.style.visibility= "visible"
            h2.style.color = 'red'
            h2.innerHTML = "Shuttle Not Ready for Launch"
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`
            copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`
            fuelStatus.innerHTML = "Fuel level too low for launch"
        }
    
        if(cargoLevel > 10000)
        {
            list.style.visibility= "visible"
            h2.style.color = 'red'
            h2.innerHTML = "Shuttle Not Ready for Launch"
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`
            copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`
            cargoStatus.innerHTML = "Cargo mass too heavy for launch"
        }
    
        if(fuelLevel > 10000 && cargoLevel < 10000){
            list.style.visibility= "visible"
            h2.style.color = 'green'
            h2.innerHTML = "Shuttle Ready for Launch"
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`
            copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`
            fuelStatus.innerHTML = "Fuel level high enough for launch"
            cargoStatus.innerHTML = "Cargo mass low enough for launch"
        }
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
        return response.json();    
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let randomIndex = Math.floor(Math.random() * planets.length)

    let currentPlanet = planets[randomIndex]

    return currentPlanet
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;


