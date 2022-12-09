import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
import { FleureService } from 'src/app/services/fleure.service';
import { Bouquet } from 'src/app/shared/bouquet';
@Component({
  selector: 'app-modifbouquet',
  templateUrl: './modifbouquet.component.html',
  styleUrls: ['./modifbouquet.component.css']
})
export class ModifbouquetComponent implements OnInit {

  bouquet:Bouquet=new Bouquet();
  num_bouquet:any;
  constructor(private fs:FleureService,private router:Router,private route:ActivatedRoute ) { }

  ngOnInit(): void {
    this.bouquet=new Bouquet();
    this.num_bouquet=this.route.snapshot.params['_num_bouquet'];
    this.fs.getbouquetbyid(this.num_bouquet).subscribe(data=>this.bouquet=data);
  }
  modifbouquet(){
    this.fs.updatebouquet(this.num_bouquet,this.bouquet).subscribe(data=>this.router.navigate(['/bouquet']));
    }

}
