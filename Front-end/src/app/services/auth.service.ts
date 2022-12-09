import {Fleriste}  from './../shared/fleriste';
import { Client } from './../shared/client';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FleureService } from '../services/fleure.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  
  f :any=[]=[];
  c :any=[]=[];
 
  
  public isloggedIn: Boolean = false;
 

   
  constructor(private router: Router,private fs:FleureService) { }
  ngOnInit(): void {
    this.chargefleriste();
  }
  chargeclient() {
    
    this.fs.getallclient().subscribe(data => 
      {
        this.c = data;
        
       
      
       
      }),
      (err:any)=>console.log(err);
     
    
  }
  chargefleriste() {
    
    this.fs.getallfleuriste().subscribe(data => 
      {
        this.f = data;
      }),
      (err:any)=>console.log(err);
     
    
  }


logout() { 
  this.isloggedIn= false;
  localStorage.removeItem('loggedUser');
  localStorage.setItem('isloggedIn',String(this.isloggedIn));
  this.router.navigate(['/']);
}
SignIn():Boolean{
  this.chargefleriste();
  let validUser: Boolean = false;
  //console.log("service n",localStorage.getItem('nom_fleuriste'))
  //console.log("service p",localStorage.getItem('password_f')) 
      
      for(let i=0 ; i< this.f.length; i++){
        
        if(localStorage.getItem('nom_fleuriste')== this.f[i].nom_fleuriste && localStorage.getItem('password_f')==this.f[i].password_f) {
          //console.log("nom fleuriste",this.f[i].nom_fleuriste);
        //console.log("password fleuriste",this.f[i].password_f);
       
       
          validUser = true;
          
          this.isloggedIn = true;
          
         
          localStorage.setItem('isloggedIn',String(this.isloggedIn));
       
        
      }
    }
 

   return validUser;
}
  Signc():Boolean{
    this.chargeclient();
    let validUser: Boolean = false;
    //console.log("service n",localStorage.getItem('nom_client'))
    //console.log("service p",localStorage.getItem('password_c')) 
    for(let i=0 ; i< this.c.length; i++){
      //console.log("nom client",this.c[i].nom_client);
      //console.log("password client",this.c[i].password_c);
      
      if(localStorage.getItem('nom_client')== this.c[i].nom_client && localStorage.getItem('password_c')==this.c[i].password_c) {
        
      //console.log("true");
     
        validUser = true;
        
        this.isloggedIn = true;
        
       
        localStorage.setItem('isloggedIn',String(this.isloggedIn));
     
      
    }
    
    
    }
      return validUser;
  }

  

  setLoggedUserFromLocalStorage(login : string) {
    
    this.isloggedIn = true;
    
  }

 

}
