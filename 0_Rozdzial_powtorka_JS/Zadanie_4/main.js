const vegetables = ["pomidory", "papryke", "baklazan"];
const fruits = ["czeresnie", "wisnie", "jablka"];
const salad = [...vegetables, ...fruits];
console.log(salad);



//Stwórz klasę Dog.
//
// Ustaw w konstruktorze właściwości name, age, legs, breed.
// Dodaj dwie metody: introduceMyself, która wyświetli w konsoli podane dane i bark, pies niech zaszczeka.
// Stwórzy nowy obiekt typu pies, podaj w konstruktorze odpowiednie dane wejściowe i wywołaj metody introduceMyself i bark.

class Dog {
    constructor(name, age, legs, breed) {
        this.name = name;
        this.age = age;
        this.legs = legs;
        this.breed = breed;
    }

    introduceMyself() {
        const info = `Moje imię to ${this.name}, moj wiek to ${this.age}`;
        console.log(info);
    }

    bark() {
        console.log("How how");
    }
}

const szogi = new Dog("Szogi", 10, 4, "shit-tzu");
szogi.introduceMyself();
szogi.bark();