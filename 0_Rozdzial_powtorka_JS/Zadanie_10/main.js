function randomNumber() {
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const random = getRandomInt(1,10);
    console.log(random);
    if (random % 2 === 0) {
        return "Liczba parzysta";
    }
    else {
        return "Liczba nieparzysta";
    }
}

console.log(randomNumber());