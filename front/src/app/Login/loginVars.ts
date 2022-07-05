import { LocalstorageService } from "../localstorage.service";

export module loginVars
{
  
  var isLogged:boolean = false;
  var isAdmin:boolean = false;
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
  }
}