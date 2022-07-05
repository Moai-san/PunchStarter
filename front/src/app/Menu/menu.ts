import {Component} from '@angular/core';
import { loginVars } from '../Login/loginVars';

@Component(
{
    selector: 'menu',
    templateUrl: './menu.html',
    styleUrls: ['./menu.scss']

})
export class menu
{
    public getUserAdmin()
    {
        return (loginVars.getIsAdmin());
    }

    public getUserLogged()
    {
        return (loginVars.getIsLogged());
    }

    public setUserLogout()
    {
        loginVars.setIsLogged(false);
    }
}