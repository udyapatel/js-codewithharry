// Import stylesheets
import './style.css';


// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
console.log('Hello console');
console.log(45*45);

//type conversion and type corecion

console.log('Welcome');
let myVar=String(10);
console.log(myVar,(typeof myVar));
let booleanVar= String(true);
console.log(booleanVar,(typeof booleanVar));
let date = new Date();
console.log(date);
let myStr="135";
let myNum= 11111;
console.log(myStr + myNum);
const greet="Good Morning";
const name = "Udya";
console.log(greet + ' ' + name);
document.getElementById(date,'app');
let html;
html  = "<h1> this is heading</h1>"+
        "<p> this is My para</p>";

html = html.concat('this', ' str2');
console.log(html);
console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());
console.log(html);
console.log(html[1]);
console.log(html.indexOf('<'));
console.log(html.lastIndexOf('<'));
console.log(html.charAt(3));
console.log(html.endsWith('dsfsdfd'));
console.log(html.includes(' fg'));
console.log(html.substring(1,6));
console.log(html.slice(0, 4))
console.log(html.split('>'));
console.log(html.replace('this', 'it'));
