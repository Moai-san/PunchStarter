import {Component} from '@angular/core';
import { Sugerencias } from "./sugerencias";

@Component(
{
    templateUrl: './contactus.html',
    styleUrls: ['./contactus.scss']

})
export class contactus
{
    model = new Sugerencias('', '', '', '', 56, '');
    submitted = false;
    onSubmit() { this.submitted = true; }
}