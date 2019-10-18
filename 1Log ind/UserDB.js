class User {
    constructor(brugernavn, kodeord){
        this.brugernavn = brugernavn;
        this.kodeord = kodeord;
    }
}
if(localStorage.getItem('User') == null) {
    var userList = [];
    userList.push(new User('Alexandra', 'alexandra123'));
    userList.push(new User('Magnus', 'magnus123'));
    userList.push(new User('Mathias','mathias123'));
    userList.push(new User('Kasper','kasper123'));
    userList.push(new User('123','123'));


    var userListString = JSON.stringify(userList)
    localStorage.setItem('User', userListString)
}