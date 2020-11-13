/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  return str
  .split('-')
  .map( (strUpper, index) => index == 0 ? strUpper : strUpper[0].toUpperCase() + strUpper.slice(1) )
  .join('');
}


// console.log( camelize('background-color') );
// console.log( camelize('list-style-image') );
// console.log( camelize('-webkit-transition') );
