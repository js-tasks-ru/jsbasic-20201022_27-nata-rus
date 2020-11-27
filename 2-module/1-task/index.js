/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {

  let salary = 0;

  for (let k in salaries) {
    if (typeof salaries[k] == 'number') {
      salary += salaries[k];
    }
  }

  return salary;
}
