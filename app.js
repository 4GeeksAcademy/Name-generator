/* eslint-disable no-console */
const firstNames = ["John", "Jack", "Michael", "Emily", "David"];
const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones"];

function generateRandomName() {
    const randomFirstNameIndex = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastNameIndex = lastNames[Math.floor(Math.random() * lastNames.length)];

    const randomFirstName = firstNames[randomFirstNameIndex];
    const randomLastName = lastNames[randomLastNameIndex];

    return randomFirstName + " " + randomLastName;
}
console.log(generateRandomName());