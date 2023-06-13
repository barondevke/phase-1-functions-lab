// Code your solution in this file!

function distanceFromHqInBlocks(distance) {
    if (distance >= 42) {
        return distance - 42

    }
    else {
        return 42 - distance
    }

}

function distanceFromHqInFeet(distance) {
    if (distance >= 42) {
        return (distance - 42) * 264
    }
    else {
        return (42 - distance) * 264
    }
}

function distanceTravelledInFeet(a, b) {
    if (a >= b) {
        return (a - b) * 264
    }

    else {
        return (b - a) * 264
    }
}

function calculatesFarePrice(start, destination) {

    if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) < 2000) {
        return (distanceTravelledInFeet(start, destination) - 400) * 0.02
    }
    else if (distanceTravelledInFeet(start, destination) < 400) {
        return 0
    }
    else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500) {
        return 25
    }
    else if (distanceTravelledInFeet(start, destination) > 2500) {
        return 'cannot travel that far'
    }
}
