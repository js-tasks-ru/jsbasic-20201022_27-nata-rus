/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
let str = 'вася';
str = ucFirst (str);

function ucFirst(str) {

  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

// alert( ucFirst (str) );
console.log(str);