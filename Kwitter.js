function addUser(){
    var newUser = document.getElementById('Username').value;
    localStorage.setItem('Username',newUser);
    window.location = 'kwMainPage.html';
}
