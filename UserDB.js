class User {
    constructor(brugernavn, kodeord){
        this.brugernavn = brugernavn;
        this.kodeord = kodeord;
    }
}
if(localStorage.getItem('User') == null) {
    var userList = [];
    userList.push(new User('Magnus', 'magnus123'));
    userList.push(new User('Mathias','mathias123'));
    userList.push(new User('Kasper','kasper123'));
    userList.push(new User('123','123'));


    var userListString = JSON.stringify(userList)
    localStorage.setItem('User', userListString)
}
// Get the input field
var input = document.getElementById("myInput");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("myBtn").click();
    }
});