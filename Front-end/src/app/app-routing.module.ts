import { LiveAnnouncer } from '@angular/cdk/a11y';
import { createComponentDefinitionMap } from '@angular/compiler/src/render3/partial/component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './modules/general/contact/contact.component';

import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { ProduitComponent } from './modules/general/produit/produit.component';


import { SigninComponent } from './signin/signin.component';

import { FleureComponent } from './fleure/fleure.component';
import { AddfleureComponent } from './addfleure/addfleure.component';
import { BouquetComponent } from './bouquet/bouquet.component';
import { ClientComponent } from './client/client.component';
import { AlllisteComponent } from './allliste/allliste.component';
import { AddbouquetComponent } from './addbouquet/addbouquet.component';
import { ModiffleureComponent } from './modiffleure/modiffleure.component';
import { ModifbouquetComponent } from './modifbouquet/modifbouquet.component';
import { ListecommandeComponent } from './listecommande/listecommande.component';
import { HomeclientComponent } from './homeclient/homeclient.component';


const routes: Routes = [
 
  
  
  {path: "menu",component:MenuComponent},
 
  {path: "fleure",component:FleureComponent},
  {path: "addfleure",component:AddfleureComponent},
  {path: "addbouquet",component:AddbouquetComponent},
  {path: "bouquet",component:BouquetComponent},
  {path: "client",component:ClientComponent},
  {path: "allliste/:_num",component:AlllisteComponent},
  {path: "modiffleure/:_num_fleure",component:ModiffleureComponent},
  {path: "modifbouquet/:_num_bouquet",component:ModifbouquetComponent},
  {path:"listecommande",component:ListecommandeComponent},
  {path:"homeclient",component:HomeclientComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
