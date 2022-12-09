import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FleureService } from 'src/app/services/fleure.service';
import { Fleure } from 'src/app/shared/fleure';

@Component({
  selector: 'app-addfleure',
  templateUrl: './addfleure.component.html',
  styleUrls: ['./addfleure.component.css']
})
export class AddfleureComponent implements OnInit {
  fleure:Fleure=new Fleure();

  constructor(private fs:FleureService,private router:Router) { }

  ngOnInit(): void {
    
  }
    addfleure(){
     this.fs.addfleure(this.fleure).subscribe(data=>this.router.navigate(['/fleure']));
  
  }
  

}
