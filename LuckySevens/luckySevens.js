/*
Creator: Lydia Strebe
Date created: 1/21/20
Date last modified: 1/26/20
*/

function rollDie(numSides) {
    return Math.floor(Math.random() * numSides) + 1;
}

function addDice() {
    return rollDie(6) + rollDie(6);
}

function playGame() {
    //Declare variables
    var startingBet = document.forms["placeBet"]["bet"].value;
    var gameMoney = parseInt(startingBet);
    var highScore = parseInt(startingBet);
    var highRoll = 0;
    var totalRolls = 0;

    //This is to validate the starting bet
    if (startingBet == "" || isNaN(startingBet) || startingBet <= 0) {
        alert("The starting bet must be a number greater than 0.");
        document.forms["placeBet"]["bet"]
            .parentElement.className = "form-inline has-error"; 
        document.forms["placeBet"]["bet"].focus(); 
        return false;
    }

    while (gameMoney > 0) {

        if (addDice() == 7) {
            gameMoney += 4;
        }
        else {
            gameMoney -= 1;
        }

        totalRolls += 1

        if (gameMoney > highScore) {
            highScore = gameMoney;
            highRoll = totalRolls
        }
    }
    document.getElementById("results").style.display = "table";
    document.getElementById("startingBet").innerText = '$' + startingBet + '.00';
    document.getElementById("totalRolls").innerText = totalRolls;
    document.getElementById("highScore").innerText = '$' + highScore + '.00';
    document.getElementById("highRoll").innerText = highRoll;
    document.getElementById("resetButton").style.display = "inline";
    return false;   
}
