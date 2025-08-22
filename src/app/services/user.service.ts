import {UserDetail} from '../model/model';

export class UserService {
    Users:UserDetail[] = [
        new UserDetail ("test1","123456"),
        new UserDetail ("test2","12345"),
        new UserDetail ("test3","1234"),
    ];

    getUserList(){
        return this.Users;
    }

    createUser(name:string, password:string){
        let user = new UserDetail(name,password)
        this.Users.push(user)
    }
}