import { concat } from "rxjs";
import { LocalstorageService } from "../localstorage.service";
import * as CryptoJS from 'crypto-js';

export module loginVars
{
  var key ="6574";
  var isLogged:boolean = false;
  var isAdmin:boolean = false;
  var sessionId:string ='';
  var localStorage:LocalstorageService =new LocalstorageService();
  /**
   * getIsAdmin
   */
  export function getIsAdmin()
  {
    if(isAdmin==false)
    {
      if(localStorage.getData('isAdmin'))
      {
        return JSON.parse(localStorage.getData('isAdmin'));
      }
    }
    return(isAdmin);
  }
  export function setIsAdmin(status:boolean)
  {
    localStorage.saveData('isAdmin',JSON.stringify(status));
    isAdmin =status;
  }
  export function getIsLogged()
  {
    if(isLogged==false)
    {
      if(localStorage.getData('isLogged'))
      {
        return JSON.parse(localStorage.getData('isLogged'));
      }
    }
    return(isLogged);
  }
  export function setIsLogged(status:boolean)
  {
    localStorage.saveData('isLogged',JSON.stringify(status));
    isLogged =status;
    if(isLogged==false)
    {
      localStorage.removeData('sessionID');
      sessionId='';
    }
  }

  export function setSessionID(mail:string,name:string,surname:string)
  {
    var toEnc:string =mail.concat(",",name,",",surname);
    sessionId =encrypt(toEnc);
    localStorage.saveData('sessionID',JSON.stringify(sessionId));
  }

  export function getSessionID()
  {
    if(localStorage.getData('sessionID'))
    {
      return JSON.parse(localStorage.getData('sessionID'));
    }
    return sessionId;
  }
  export function getMail(myId:string)
  {
    var user:Array<String> =decrypt(myId).split(",");
    return(user[0]);
  }
  
  function encrypt(txt: string): string {
    return CryptoJS.AES.encrypt(txt, key).toString();
  }

  function decrypt(txtToDecrypt: string) {
    return CryptoJS.AES.decrypt(txtToDecrypt, key).toString(CryptoJS.enc.Utf8);
  }

}