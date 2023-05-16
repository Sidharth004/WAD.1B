//get the form element add event listner

document.getElementById("registerform").addEventListener('submit',function(e){
    e.preventDefault();

    const username = document.getElementById('username').value;

    const userData = {
        username
    };

    //retrieve the existing entries into storeor create empt array
    const store  = JSON.parse(localStorage.getItem('Users'))||[];
    //push the data into[]
    store.push(userData);
    //set the data into localstorage
    localStorage.setItem('Users',JSON.stringify(store));

    //AJAX post request
    var xhr = new XMLHttpRequest();

    xhr.open('POST','http://localhost:3000/register',true);
    xhr.setRequestHeader('Content-Type','application/json;charset=UTF-8');
    xhr.send(JSON.stringify(userData));

    //route to profile section
    window.location.href='profile.html';

    
});