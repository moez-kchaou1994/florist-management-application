import { Component, OnInit } from '@angular/core';
import {Fleriste}  from './../shared/fleriste';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import {  SimpleModalService } from 'ngx-simple-modal';
import { ModalMsgComponent } from '../modal-msg/modal-msg.component';
import { FleureService } from '../services/fleure.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  public isloggedIn: Boolean = false;
  nom_fleuriste:any;
  password_f:any;
  f :any=[]=[];
  
  constructor(private authService : AuthService,
              public router: Router, private simpleModalService: SimpleModalService,private fs:FleureService) { }

  ngOnInit(): void {
    this.chargefleriste();
    
  }
  chargefleriste() {
    
    this.fs.getallfleuriste().subscribe(data => 
      {
        this.f = data;
        /*
        for(let i=0 ; i< data.length; i++){
          console.log("nom fleuriste",data[i].nom_fleuriste);
          console.log("password fleuriste",data[i].password_f);
        }
        */
       
      }),
      (err:any)=>console.log(err);
     
    
  }
  
  
  
  onLoggedin()
  { 
    localStorage.setItem('nom_fleuriste',this.nom_fleuriste);
    localStorage.setItem('password_f',this.password_f);
    let isValidUser: Boolean = this.authService.SignIn();
    //console.log("valid user "+isValidUser);
    if (isValidUser)
    {
      
      this.router.navigate(['/fleure']);     
    }
      
      else
      this.simpleModalService.addModal(ModalMsgComponent, {
        title: 'Alert',
        msg: "'Non connecté','Login ou mot de passe incorrecte!','error'"  ,
        type: 'danger',
        nature: 'msg'
      }, {
        draggable: false
      }).subscribe(() => { });
    }
    
        //console.log('Non connecté','Login ou mot de passe incorrecte!','error');
}