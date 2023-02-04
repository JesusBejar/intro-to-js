let shipHealth = 3;
let shipAmmo = 3;
let targetHealth = 3;

function fireShip() {
  if (shipCanFire()) {
    shipAmmo--;
    if (isHit()) {
      targetHealth--;
      console.log("hit - targetHealth:", targetHealth);
    } else {
      console.log("miss");
    }
  } else {
    reloadShip();
    console.log("reloading, shipHealth:", shipHealth);
  }
}

function encounter() {
  console.log("You see a target");
  if (!isDestroyed(targetHealth) && !isDestroyed(shipHealth)) {
    fireShip();
    if (isDestroyed(targetHealth)) {
      console.log("Target eliminated");
    }
    if (isDestroyed(shipHealth)) {
      console.log("ship destroyed");
    }
  }
}

// The code for these functions are all easier than 
// you imagined...keep that in mind

// Generates a random # that determines damage value when ship is hit
function isHit() {
  return Math.random() > .5;
}

// Should return true if ship health is above 0 AND ammo is above 0
// Return falsa otherwise
function shipCanFire () {
  return shipAmmo > 0 && shipHealth > 0;
}

// Should return true if health is 0 or less
function isDestroyed () {
  return health <= 0;
}

// if ship runs out of ammo before destroying target, 
// it will suffer damage. this function reduces health
// by 1 and increases ammo by 3 
function reloadShip () {
  shipHealth--;
  shipAmmo +=3;
}