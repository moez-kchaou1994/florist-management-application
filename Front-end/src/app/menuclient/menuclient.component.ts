import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-menuclient',
  templateUrl: './menuclient.component.html',
  styleUrls: ['./menuclient.component.css']
})
export class MenuclientComponent implements OnInit {

  constructor(public authService: AuthService,
    private router: Router) { }
  ngOnInit(): void {
  }
  onLogout(){
    this.authService.logout();
  }

}
