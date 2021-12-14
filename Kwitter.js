function addUser(){
    var newUser = document.getElementById('Username').value;
    localStorage.setItem(newUser, 'Username');
    window.location = 'kwMainPage.html';
}
