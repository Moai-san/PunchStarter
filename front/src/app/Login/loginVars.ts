
export module loginVars
{
  var isLogged:boolean = false;
  var isAdmin:boolean = false;
  /**
   * getIsAdmin
   */
  export function getIsAdmin()
  {
    return(isAdmin);
  }
  export function setIsAdmin(status:boolean)
  {
    isAdmin =status;
  }
  export function getIsLogged()
  {
    return(isLogged);
  }
  export function setIsLogged(status:boolean)
  {
    isLogged =status;
  }
}