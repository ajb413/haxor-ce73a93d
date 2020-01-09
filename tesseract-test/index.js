// import Tesseract from 'tesseract.js';
const Tesseract = require('tesseract.js');

Tesseract.recognize(
  'https://i.imgur.com/EAREK9a.png',
  'eng',
  { logger: m => console.log(m) }
).then(({ data: { text } }) => {
  console.log(text);
})