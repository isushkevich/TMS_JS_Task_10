"use strict";


class User {
    static canSendMessage = true;
    name = "Unknown";
    password = "Password";

    constructor(name, password) {
        this.name = name;
        this.password = password;
    }

    sendMessage(msg) {
        console.log(msg);
    }
}


class SuperUser extends User {
    static createdUsers = [];

    static getCreatedUsers() {
        return SuperUser.createdUsers;
    }

    constructor(name, password) {
        super(name, password);
        SuperUser.createdUsers.push(name);
    }

    createUser(name, password) {
        this.name = name;
        this.password = password;
        SuperUser.createdUsers.pop();
        SuperUser.createdUsers.push(name);
        return this;
    }
}



class Admin extends SuperUser {
    static deletedUsers = [];

    static deleteUser(name) {
        let createdUsers = super.createdUsers;
        for (let i = 0; i < createdUsers.length; i++) {
            if (createdUsers[i] === name) {
                this.deletedUsers.push(createdUsers.splice(i, 1));
            }
        }
    }

    static getDeletedUsers() {
        return Admin.deletedUsers;
    }
}


let user1 = new User("User1", "3ffj90");

let user2 = new SuperUser("SuperUser2", "32o29u3j9");

let user3 = new SuperUser();
user3.createUser("SuperUser3", "sf3t3");

let user4 = new SuperUser();
user4.createUser("SuperUser4", "f3f344f8l");

Admin.deleteUser("SuperUser3");

console.log(Admin.getCreatedUsers());