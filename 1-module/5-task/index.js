/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
  if (str.length < maxlength) {
    return str
  } else
  return str.slice(0, (maxlength - 1)) + '…';
}

 // console.log( truncate("Вот, что мне хотелось бы сказать на эту тему:", 21) );
 // console.log( truncate("Всем привет!", 20) );
