//get document element
const datastore = document.getElementById('profiledata');
const users = JSON.parse(localStorage.getItem('Users'))||[];

users.forEach(user => {
    const listItem = document.createElement('li');
    listItem.textContent = `Username ${user.username}`;
    datastore.appendChild(listItem);
});

