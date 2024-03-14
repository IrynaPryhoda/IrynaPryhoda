const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const shuffleArray = array => array.sort(() => Math.random() - 0.5);

if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const variableName = getRandomNumber();

const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
// This is a comment
banana


const greet = name => `Hello, ${name}!`;

const capitalizeString = str => str.toUpperCase();
grape


const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
