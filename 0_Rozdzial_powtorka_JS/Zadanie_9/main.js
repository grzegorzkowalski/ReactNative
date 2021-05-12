const cake = "🎂";

console.log(new Date());

const currentYear = new Date().getFullYear();
const birthdayYear = 1986;

console.log(currentYear-birthdayYear);

for (let i = 0; i < (currentYear-birthdayYear) ; i++) {
    console.log(cake, i);
}
