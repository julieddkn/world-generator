let wType;
let wDiameter = [];
let wAtmospheres;
let wClimate = [];
let wHydrographics;
let wPopulation;
let wGovernment;
let wLawLevel;
let wTechLevel;
let wHooks;

function generate() {
        // var dice1;
        // var dice2;
    
    $(".result").css("display", "block");
    function rollTheDice() {
        let roll = Math.floor(Math.random() * 12 + 1)
        return roll;
    };
        
        // dice1 = rollTheDice();
        // dice2 = rollTheDice();
        
        // document.getElementById('d1').innerHTML = dice1;
        // document.getElementById('d2').innerHTML = dice2;
        
    let typeDice = rollTheDice();
    let diameterDice = rollTheDice();
    let climateDice = rollTheDice();
    let hydrographicsDice = rollTheDice();
    let populationDice = rollTheDice();
    let governmentDice = rollTheDice();
    let lawLevelDice = rollTheDice();
    let techLevelDice = rollTheDice();
    let hooksDice = rollTheDice();
        
// 🐸🐸🐸 CONDITION TYPE 🐸🐸🐸
// influe diametre, temperature et population
    if (typeDice >= 11) {
        wType = "Hostile";
        populationDice -= 2;
    } else if (typeDice >= 4) {
        wType = "Terrestrial";
        populationDice += 1;
    } else if (typeDice == 3) {
        wType = "Satellite";
        diameterDice -= 5;
        populationDice -=1
    } else {
        wType = "Asteroid";
        populationDice -= 2;
    }
// 🐸🐸🐸 AFFICHAGE TYPE 🐸🐸🐸
    document.getElementById('worldType').innerHTML = wType;
    document.getElementById('typeDice').innerHTML = typeDice;




// 🐸🐸🐸 CONDITION DIAMETRE 🐸🐸🐸
    if (diameterDice == 12) {
        wDiameter = [16000, 1.25];
    } else if (diameterDice == 11) {
        wDiameter = [14500, 1.14];
    } else if (diameterDice == 10) {
        wDiameter = [13000, 1.02];
    } else if (diameterDice == 9) {
        wDiameter = [11000, 0.86];
    } else if (diameterDice == 8) {
        wDiameter = [9500, 0.74];
    } else if (diameterDice == 7) {
        wDiameter = [8000, 0.63];
    } else if (diameterDice == 6) {
        wDiameter = [6500, 0.51];
    } else if (diameterDice == 5) {
        wDiameter = [5000, 0.39];
    } else if (diameterDice == 4) {
        wDiameter = [4000, 0.31];
    } else if (diameterDice == 3) {
        wDiameter = [3000, 9.24];
    } else if (diameterDice == 2) {
        wDiameter = [1500, 0.12];
    } else {
        wDiameter = [1000, 0.08];
    }
// 🐸🐸🐸 AFFICHAGE DIAMETRE 🐸🐸🐸
    document.getElementById('worldDiameter').innerHTML = "<b>Diameter : </b>" + wDiameter[0] + "<b> - Typical Surface Gravity : </b>" + wDiameter[1];




// 🐸🐸🐸 CONDITIONS ATMOSPHERE 🐸🐸🐸
    let terrestrialRoll = rollTheDice();
    if (wType == "Asteroid") {
        wAtmospheres = "An asteroid world has no atmosphere";
    } else if (wType == "Satellite" && diameterDice >= 6) {
        wAtmospheres = "It possesses the same range of atmospheres as a terrestrial world."
    } else if (wType == "Satellite" && diameterDice < 6) {
        wAtmospheres = "A “thin” atmosphere, owing to a lack of either oxygen or sufficient oxygen to support life. Breathing masks are thus recommended.."
    } else if (wType == "Hostile") {
        wAtmospheres = "A hostile world possesses a “hazardous” atmosphere, which is not breathable, either due to a total lack of oxygen(or indeed any other gases) or because the gases that make them up are insidious, corrosive, or otherwise dangerous.Space suits are required."
    } else if (wType == "Terrestrial" && terrestrialRoll <= 6) {
        wAtmospheres = "This world possesses a “standard” oxygen-nitrogen atmosphere"
    } else if (wType == "Terrestrial" && terrestrialRoll > 6) {
        wAtmospheres = "It possesses a “near-standard” atmosphere, which is breathable but tainted with a contaminant of some kind. Such contaminants are dangerous to Terrans, meaning that filter masks may be required. The exact nature of the contaminant is up to the GM."
    };

// 🐸🐸🐸 AFFICHAGE DE L'ATMOSPHERE 🐸🐸🐸
    document.getElementById('worldAtmospheres').innerHTML = wAtmospheres;




// 🐸🐸🐸 CONDITION CLIMATE 🐸🐸🐸
    if (climateDice >= 12) {
        wClimate[0] = "Blistering";
        wClimate[1] = "Above 45°C"; 
    } else if (climateDice >=10) {
        wClimate[0] = "Warm";
        wClimate[1] = "30 to 40°C";
    } else if (climateDice >= 6) {
        wClimate[0] = "Temperate";
        wClimate[1] = "0 to 30°C";
    } else if (climateDice >= 2) {
        wClimate[0] = "Cool";
        wClimate[1] = "to -15°C";
    } else {
        wClimate[0] = "Freezing";
        wClimate[1] = "Below °C";
    }
    
    if (wType == "Satellite") {
        wClimate[1] += " (add 5° cause it's a satellite)"
    }
// 🐸🐸🐸 AFFICHAGE DU CLIMAT 🐸🐸🐸
document.getElementById('worldClimate').innerHTML = "<b>Climat : </b>" + wClimate[0] + " - <b>Temparature Range = </b>" + wClimate[1];




// 🐸🐸🐸 CONDITION HYDROGRAPHIC 🐸🐸🐸
let hydroPourcent = ((hydrographicsDice - 2) * 10) + "%";
if (wType == "Asteroid") {
    wHydrographics = "Asteroid worlds always have a hydrographic percentage of 0%";
} else if (wType == "Hostile") {
    wHydrographics = hydroPourcent + " but Hostile worlds are unlikely to have much (or any) water on their surfaces, so this percentage refers to some other liquid, such as hydrocarbons or ammonia."
} else {
    wHydrographics = hydroPourcent
}

// 🐸🐸🐸 AFFICHAGE HYDROGRAPHIC 🐸🐸🐸
document.getElementById('worldHydrographics').innerHTML = wHydrographics;



// 🐸🐸🐸 AFFICHAE RESULTAT DES DES 🐸🐸🐸
    document.getElementById('typeDice').innerHTML = typeDice;
    document.getElementById('diameterDice').innerHTML = diameterDice;
    document.getElementById('climateDice').innerHTML = climateDice;
    document.getElementById('hydrographicsDice').innerHTML = hydrographicsDice;


}


