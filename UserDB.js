/*
I bogen:
class, 101, 102, 115, 119, 263, 331
 */

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
