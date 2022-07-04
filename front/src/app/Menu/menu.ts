import {Component, Input} from '@angular/core';
import { login, userIsAdmin } from "../Login/login";

@Component(
{
    selector: 'menu',
    templateUrl: './menu.html',
    styleUrls: ['./menu.scss']

})
export class menu
{
    isAdmin:boolean = userIsAdmin();
}