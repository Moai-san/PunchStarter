import {Component} from '@angular/core';
import { UserLogin } from "./userLogin";
import { UserRegister } from "./userRegister";
import usersData from '../../assets/users.json'; 

interface User {  
    name: String;
    surname: String;
    mail: String;
    password: String;
    bDate: String;
}

@Component(
{
    templateUrl: './login.html',
    styleUrls: ['./login.scss']

})
export class login
{
    loginModel = new UserLogin('', '');
    registerModel = new UserRegister('', '', '', '', '');
    loginsubmitted = false;
    loginOnSubmit() { this.loginsubmitted = true; }
    registersubmitted = false;
    registerOnSubmit() { this.registersubmitted = true; }
    users: User[] = usersData;
}