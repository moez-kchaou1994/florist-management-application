import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Fleure } from '../shared/fleure';
import { Bouquet } from '../shared/bouquet';
import { Fleriste } from '../shared/fleriste';
import { Commande } from '../shared/commande';
import { Client } from '../shared/client';
@Injectable({
  providedIn: 'root'
})
export class FleureService {
  host=environment.fleurehost;
  constructor(private http:HttpClient) {
    
  }
  getfleure():Observable<Fleure[]>{ return this.http.get<Fleure[]>(this.host+'getlistfleure');}
  addfleure(f:Fleure):Observable<Fleure>{
    return this.http.post<Fleure>(this.host+'cf',f);}
  addbouquet(b:Bouquet):Observable<Bouquet>{
      return this.http.post<Bouquet>(this.host+'cb',b);}
    updatefleure(num_fleure:any,f:any):Observable<Fleure>{
      return this.http.put<Fleure>(this.host+'updatefleure'+'/'+num_fleure,f);
    }
    updatebouquet(num_bouquet:any,b:any):Observable<Bouquet>{
      return this.http.put<Bouquet>(this.host+'updatebouquet'+'/'+num_bouquet,b);
    }
    deletefleure(num_fleure:any):Observable<Fleure>{
      return this.http.delete<Fleure>(this.host+'removefleure'+'/'+num_fleure);
    }
    getboquet():Observable<Bouquet[]>{ return this.http.get<Bouquet[]>(this.host+'getlistbouquet');}

    deletebouquet(num_bouquet:any):Observable<Fleure>{
      return this.http.delete<Fleure>(this.host+'removebouquet'+'/'+num_bouquet);
    }
    getallfleuriste():Observable<Fleriste[]>{ return this.http.get<Fleriste[]>(this.host+'getlistfleuriste');}
    getallclient():Observable<Client[]>{ return this.http.get<Client[]>(this.host+'getlistclient');}
    getallcommande():Observable<Commande[]>{ return this.http.get<Commande[]>(this.host+'getlistcommande');}
    getfleurebyid(num_fleure:number):Observable<Fleure>{
      return this.http.get<Fleure>(this.host+'getfleurebyid/'+num_fleure);}
    getbouquetbyid(num_bouquet:number):Observable<Bouquet>{
      return this.http.get<Bouquet>(this.host+'getbouquetbyid/'+num_bouquet);}
      Createcommandef(num_com:any,num_fleure:any,c:Commande):Observable<Commande>{
        return this.http.post<Commande>(this.host+'createcom_f/'+num_com+'/'+num_fleure,c);}
    saveCommande(c:Commande):Observable<Commande>{
      // let header = new Headers({'Content-Type': 'application/json'});
      let options = {headers:new HttpHeaders().set('Content-Type','application/json')};
      // return this.http.post<Commande>(this.host+'saveCommande',JSON.stringify(c), options);
      return this.http.post<Commande>(this.host+'saveCommande',c, options);

    }
    Createcommandeb(num_com:any,num_bouquet:any,c:Commande):Observable<Commande>{
      return this.http.post<Commande>(this.host+'createcom_b/'+num_com+'/'+num_bouquet,c);}
      createcommande(num_client:any,c:Commande):Observable<Commande>{
        return this.http.post<Commande>(this.host+'addcommande/'+num_client,c);}
        getfleuristebynompwd(nom_fleuriste:any,password_f:any):Observable<Fleriste>{
          return this.http.get<Fleriste>(this.host+'getfleuristebynompwd/'+nom_fleuriste+'/'+password_f);}
  
}
