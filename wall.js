function convertToWall(number) {

    let wall = "";
    while (number > 1) {
        wall = (number % 2) + wall;
        number = Math.floor(number / 2); 
    }

    wall = "1" + wall;

    while (wall.length < 64) {
        wall = "0" + wall;
    }

    return wall;

}

function convertToNumber(wall) {

    let number = 0;
    let exponent = 0;
    for (let i = wall.length - 1; i >= 0; i--) {
        
        if (wall[i] === "1") {
            number += 2 ** exponent;
        }

        exponent++;

    }

    return number;

}

function generateFixedWall(numberRepresentation, repairKits, attackedPlaces) {

    let wall = convertToWall(numberRepresentation);
    let fixing = false;
    let wallArray;

    for (let i = 0; i < attackedPlaces.length; i++) {
        wallArray = wall.split("");
        wallArray[attackedPlaces[i]] = "0";
        wall = wallArray.join("");
    }

    console.log(wall)

    for (let i = wall.length - 1; i >= 0; i--) {
        
        if (repairKits === 0) {
            break;
        }

        if (i !== 0) {

            if (wall[i] === "0" && wall[i - 1] === "0") {
                fixing = true;
            }
          

        }

        if (fixing) {
            if (wall[i] === "1") {
                fixing = false;
                continue;
            }
            wallArray = wall.split("");
            wallArray[i] = "1";
            wall = wallArray.join("");
            repairKits--;
        }


    }

    console.log(wall)
    return convertToNumber(wall);

}


console.log(generateFixedWall(98989898, 10, [45, 10]))