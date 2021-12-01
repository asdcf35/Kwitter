function addUser(){
    var newUser = document.getElementById('Username').value;
    localStorage.setItem(newUser, 'user');
    window.location = 'kwMainPage.html';
}