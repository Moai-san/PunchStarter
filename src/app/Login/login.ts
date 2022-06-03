import {Component} from '@angular/core';
import { UserLogin } from "./userLogin";
import { UserRegister } from "./userRegister";

@Component(
{
    templateUrl: './login.html',
    styleUrls: ['./login.scss']

})
export class login
{
    loginModel = new UserLogin('', '');
    registerModel = new UserRegister('', '', '', '', '');
    submitted = false;
    onSubmit() { this.submitted = true; }
}