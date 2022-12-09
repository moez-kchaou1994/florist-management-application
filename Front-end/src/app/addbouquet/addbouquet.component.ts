import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FleureService } from 'src/app/services/fleure.service';
import { Bouquet } from 'src/app/shared/bouquet';

@Component({
  selector: 'app-addbouquet',
  templateUrl: './addbouquet.component.html',
  styleUrls: ['./addbouquet.component.css']
})
export class AddbouquetComponent implements OnInit {
  bouquet:Bouquet=new Bouquet();
  constructor(private fs:FleureService,private router:Router) { }

  ngOnInit(): void {
  }
  addbouquet(){
    this.fs.addbouquet(this.bouquet).subscribe(data=>this.router.navigate(['/bouquet']));
 
 }

}
