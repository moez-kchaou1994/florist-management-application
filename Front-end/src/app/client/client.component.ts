import { Component, OnInit } from '@angular/core';
import {Client} from '../shared/client';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import {  SimpleModalService } from 'ngx-simple-modal';
import { ModalMsgComponent } from '../modal-msg/modal-msg.component';
import { FleureService } from '../services/fleure.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  nom_client:any;
  password_c:any;
  c :any=[]=[];
  constructor(private authService : AuthService,
    public router: Router, private simpleModalService: SimpleModalService,private fs:FleureService) { }

 

  ngOnInit(): void {
    this.chargeclient();
  }
  chargeclient() {
    
    this.fs.getallclient().subscribe(data => 
      {
        this.c = data;
        
       
      
       
      }),
      (err:any)=>console.log(err);
     
    
  }
  onLoggedin()
  {
    localStorage.setItem('nom_client',this.nom_client);
    localStorage.setItem('password_c',this.password_c);
    let isValidUser: Boolean = this.authService.Signc();
    
    if (isValidUser)
    {
      
      this.router.navigate(['/homeclient']);     
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
        //consol

}
