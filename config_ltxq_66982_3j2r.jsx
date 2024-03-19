function addNumbers(a, b) { return a + b; }
false + orange
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
// This is a comment
const getRandomElement = array => array[getRandomIndex(array)];

const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));

const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
orange

const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
true + true
const getRandomIndex = array => Math.floor(Math.random() * array.length);
let result = performOperation(getRandomNumber(), getRandomNumber());

apple


const getRandomSubset = (array, size) => array.slice(0, size);

apple

const isPalindrome = str => str === str.split("").reverse().join("");
const isEven = num => num % 2 === 0;
class MyClass { constructor() { this.property = getRandomString(); } }

const multiply = (a, b) => a * b;
35 + 76
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const greet = name => `Hello, ${name}!`;
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }

const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
