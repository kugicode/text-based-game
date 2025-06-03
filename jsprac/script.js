let gameState = {
    location: "dungeon",
    defeatedGolem: false,
    hasGold: false,
    health: 100,
    inventory: []
};

function startGame() {
    console.log("You arrive at the dungeon!");
    console.log("Type `goRight()` or `goLeft()` to choose.");
}

function goRight() {
    console.log("A wild golem appears! Do you want to fight or run?");
    console.log("Type `fight()` or `runAway()` to choose.");
}

function goLeft() {
    console.log("You found gold! Do you want to take it?");
    console.log("Type `take()` or `leave()` to choose.");
}

function fight() {
    gameState.health -= 50;
    console.log(`You fought the wild golem and won, but have ${gameState.health} HP left!`);
    console.log("Type `checkProgress()` or `checkGold()` to see your progress! Then type `hiddenArea()` to advance.");
    gameState.defeatedGolem = true;
}

function runAway() {
    console.log("You safely ran away! Game over!");
}

function take() {
    console.log("You took some gold, now you're rich!");
    gameState.hasGold = true;
}

function leave() {
    console.log("You left the gold behind! Game over!");
}

function checkProgress() {
    if (gameState.defeatedGolem) {
        console.log("You have defeated the golem!");
    } else {
        console.log("First you need to go and fight the golem.");
    }
}

function checkGold() {
    if (gameState.hasGold) {
        console.log("You are rich now! You can buy armor and weapons!");
    } else {
        console.log("You need to find gold, you have no gold!");
    }
}

function hiddenArea() {
    if (gameState.defeatedGolem) {
        console.log("There is a hidden room... Type `enter()` or `exit()` to choose.");
    } else {
        console.log("You can't access the hidden room yet!");
    }
}

function enter() {
    console.log("You enter the hidden room and find a pile of gold! You have gold now!");
    console.log("Type `inventory('sword')` to buy a sword or `skip()` to save your gold!");
    gameState.hasGold = true;
}

function inventory(eqip) {
    if (eqip === 'sword' && gameState.hasGold) {
        console.log("You picked the legendary sword! But it cost all of your gold!");
        console.log("Type `fightBoss()` or `run()` to continue!");
        gameState.inventory.push("Sword");
        gameState.hasGold = false;
    } else {
        console.log("You don't have enough gold or chose an invalid item.");
    }
}

function fightBoss() {
    console.log("You're fighting the legendary dragon!");
    console.log("Type `useSword()` or `dontUse()` to choose!");
}

function run() {
    console.log("You ran away! Game Over!");
}

function useSword() {
    console.log("You used the legendary sword and defeated the dragon! You win!");
}

function dontUse() {
    console.log("You fought barehanded but were defeated... Game over!");
}

function exit() {
    console.log("You now left the dungeon! Game over!");
}

// Start the game
startGame();