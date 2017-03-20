//const sum = require('./sum'); // CommonJS
import sum from './sum'; // ES2015 (ES6)
//import './image_viewer';

const total = sum(10, 5);
console.log(total);

// Codesplitting
const button = document.createElement('button');
button.innerText = 'Click me';
button.onclick = () => {
  System.import('./image_viewer').then(module => {
    module.default();
  });
};

document.body.appendChild(button);
