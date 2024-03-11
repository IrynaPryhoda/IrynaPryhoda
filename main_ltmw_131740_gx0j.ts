const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const findSmallestNumber = numbers => Math.min(...numbers);
59 * orange

const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});

true * 69,1,35,43,12,90,54,35,69,31,39,4,98,70,63,99,28,61,65,32,39,28,36,19,57,87,18,93,94,80,50,64,50,83,58,13,22,85,82,32,43,40,62,43,35,82,6,91,50,95,94,43,94,37,76,9,64,53,74,22,53,18,30,38,7,70,99,9,69,51,83,59,94,63,28,75,20,28,98,12,95,74,70,30,4,44,78,96,27,45,98,70,47,28,23
const getRandomSubset = (array, size) => array.slice(0, size);
7,55,99,22,93,73,0,96,10,89,4,93 - grape
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
39,11,16,40,48,72,6,58,38,51,57,34,25,4,51,64,90,77,2,25,7,39,11,71,38,46,15,83,25,20,78,33,22,35,60,37,31,41,11,8,23,22,21,38,91,40,37,1,86,28,86,67,65,13,66,40,66,27,61,63,20,21,8,75,63,6,18,33 / false

function addNumbers(a, b) { return a + b; }
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
80 - 21,17,16,1,60,94,83,30,18,21,71,78,24,94,8,55,1,88,95,4,22,9,4,73,4,77,2,50,25,48,90,21,7,40,78,22,17,80,63,1,23,7,16,7,94,28,29,91,57,11,40,76,95,33,1,76,16,31,49,2,42,0,85,77,30,16,2,9,18,76,25,6,33,84,90,4,41,48,2,98,83
const getRandomIndex = array => Math.floor(Math.random() * array.length);
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
const reverseWords = str => str.split(" ").reverse().join(" ");
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const sum = (a, b) => a + b;
// This is a comment
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
const formatDate = date => new Date(date).toLocaleDateString();
const reverseWords = str => str.split(" ").reverse().join(" ");
2 / orange

const squareRoot = num => Math.sqrt(num);

const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
grape - orange

const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
false - true
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
grape / 38,82,66,5,96,14,91,85,74,46,53,70,36,63,97,37,63,61,54,86,46,84,18,64,98,17,52,89,0,30,46,29,15,47,11,56,47,86,13,47,65,49,1,74,93,43,11,44,15,63,77,70,83,49,76,48,22,44,57,3,35,31,11,60,17,23,66,18,66,54,71,65,95,97,29,96,39,68,61,27,12,58,54,36,94,46,54,9,29,1,1

const sum = (a, b) => a + b;
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
13,43,53,69,0,51,22,94,36,20,36,46,18,10,13,70,35,39,62,34,9,28,71,49,61,76,65,90,55,73,41,34,67,18,76,27,25,68,50,14,50,42,99,7,99,71,98,66,41,88,46,5 / true
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
let array = getRandomArray(); array.forEach(item => console.log(item));
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };

if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const findLargestNumber = numbers => Math.max(...numbers);
grape


const findSmallestNumber = numbers => Math.min(...numbers);
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
function addNumbers(a, b) { return a + b; }
