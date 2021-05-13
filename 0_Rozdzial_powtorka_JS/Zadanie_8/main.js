const employee = {
	name: "Krzysztof",
	surname: "Nowak",
	age: 54,
	occupation: "Policjant"
}

const {name, surname, age, occupation} = employee;
console.log(name, surname, age, occupation);

const text = `Nazywam się ${name} ${surname}. Mam ${age} lata. Moj zawod to ${occupation}.`;

console.log(text);