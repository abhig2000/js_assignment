class User{
    constructor(name,age,email){
        this.name = name;
        this.age = age;
        this.email = email;
        this.course = [];
        this.coins=0;
    }

    login(){
        console.log(`${this.name} has logged in.`);
    }

    logout(){
        console.log(`${this.name} has logged in.`);
    }
}

class Moderator extends User{
   
    addcoins(user){
        user.coins++;
        console.log(`${user.name} has ${user.coins} coin.`);
    }

    removecoin(user){
        user.coins--;
        console.log(`${this.name} has removed 1 coin.`);
    }
}

class Admin extends Moderator{
    addcourse(user, course){
        user.course.push(course);
        console.log(user);
    }

    deletecourse(user,course){
        var index = user.course.indexOf(course);
        if(index>=0){
            user.course.splice(index,1)
        }
        console.log(user)
    }
}

let user1 = new User('Abhishek', 20,'abhi@gmail.com');
let mod = new Moderator('Joker', 20,'joker@gmail.com');
let admin = new Admin('Admin', 20,'admin@gmail.com');
mod.addcoins(user1);
mod.addcoins(user1);

admin.addcourse(user1, 'java');
admin.deletecourse(user1,'java');