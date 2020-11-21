/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {

    for (let key = 0; key < table.rows.length; key++) {

        let row = table.rows[key];

        if (row.cells[1].innerHTML < 18) {
          row.style = 'text-decoration: line-through';
        }

        if (row.cells[2].innerHTML === 'f') {
          row.classList.add('female');
        } else {
          row.classList.add('male');
        }

        if (row.cells[3].getAttribute('data-available') === 'true') {
          row.classList.add('available');
        } else if (row.cells[3].getAttribute('data-available') === null) {
          row.setAttribute('hidden', '');
        } else {
          row.classList.add('unavailable');
        }
      }

      

}
