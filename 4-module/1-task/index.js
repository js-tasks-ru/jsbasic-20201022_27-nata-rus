/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  
  let ulFriends = document.createElement('ul');

  for (let key of friends) {
    ulFriends.innerHTML += `<li>${key.firstName} ${key.lastName}</li>`
  }

  return ulFriends;

}
