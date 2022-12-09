import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
import { FleureService } from 'src/app/services/fleure.service';
import { Fleure } from 'src/app/shared/fleure';
@Component({
  selector: 'app-modiffleure',
  templateUrl: './modiffleure.component.html',
  styleUrls: ['./modiffleure.component.css']
})
export class ModiffleureComponent implements OnInit {
  fleure:Fleure=new Fleure();
  num_fleure:any;
  constructor(private fs:FleureService,private router:Router,private route:ActivatedRoute ) { }

  ngOnInit(): void {
    this.fleure=new Fleure();
    this.num_fleure=this.route.snapshot.params['_num_fleure'];
    this.fs.getfleurebyid(this.num_fleure).subscribe(data=>this.fleure=data);
  }
  modiffleure(){
    this.fs.updatefleure(this.num_fleure,this.fleure).subscribe(data=>this.router.navigate(['/fleure']));
    }
}
