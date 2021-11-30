function addUser(){
    var newUser = document.getElementById('Username').value;
    localStorage.setItem(newUser);
    window.location = 'kwMainPage.html';
}