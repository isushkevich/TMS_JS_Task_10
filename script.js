"use strict";


class User {
    static canSendMessage = true;
    name = "Unknown";
    password = "Password";

    constructor(name = "Unknown", password = "Password") {
        this.name = name;
        this.password = password;
    }

    sendMessage(msg) {
        console.log(msg);
    }
}


class SuperUser extends User {
    static createdUsers = [];
    name = "Unknown";
    password = "Password";

    static getCreatedUsers() {
        return SuperUser.createdUsers;
    }

    constructor(name = "Unknown", password = "Password") {
        super(name, password);
        SuperUser.createdUsers.push(name);
    }

    static createUser(name, password) {
        SuperUser.createdUsers.push(name);
        return new User(name, password);
    }
}



class Admin extends SuperUser {
    static deletedUsers = [];

    static deleteUser(name) {
        let createdUsers = super.createdUsers;
        for (let i = 0; i < createdUsers.length; i++) {
            if (createdUsers[i] === name) {
                this.deletedUsers.push(createdUsers.splice(i, 1));
                console.log(name + " was deleted.");
            }
        }
    }

    static getDeletedUsers() {
        return Admin.deletedUsers;
    }
}


let user1 = new User("User1", "3ffj90");

let user2 = new SuperUser("SuperUser2", "32o29u3j9");

let user3 = SuperUser.createUser("SuperUser3", "sf3t3");

let user4 = SuperUser.createUser("SuperUser4", "f3f344f8l");

Admin.deleteUser("SuperUser3");

console.log(Admin.getCreatedUsers());