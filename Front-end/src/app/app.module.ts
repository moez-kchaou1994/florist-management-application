import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'; //service
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';


import { defaultSimpleModalOptions, SimpleModalModule,DefaultSimpleModalOptionConfig } from 'ngx-simple-modal';
import { CommonModule } from "@angular/common";
import { NgSelect2Module} from 'ng-select2';

import { ContactComponent } from './modules/general/contact/contact.component';
import { SigninComponent } from './signin/signin.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { ProduitComponent } from './modules/general/produit/produit.component';

import { MenuComponent } from './menu/menu.component';

import { ModalMsgComponent } from './modal-msg/modal-msg.component';
import { FleureComponent } from './fleure/fleure.component';
import { AddfleureComponent } from './addfleure/addfleure.component';
import { BouquetComponent } from './bouquet/bouquet.component';
import { AlllisteComponent } from './allliste/allliste.component';
import { ClientComponent } from './client/client.component';
import { AddbouquetComponent } from './addbouquet/addbouquet.component';
import { ModiffleureComponent } from './modiffleure/modiffleure.component';
import { ModifbouquetComponent } from './modifbouquet/modifbouquet.component';
import { ListecommandeComponent } from './listecommande/listecommande.component';
import { HomeclientComponent } from './homeclient/homeclient.component';
import { MenuclientComponent } from './menuclient/menuclient.component';



@NgModule({
  declarations: [
   
    AppComponent,
   
    
    ContactComponent,
    SigninComponent,
    NotFoundComponent,
    ProduitComponent,
    /
    MenuComponent,
    
    ModalMsgComponent,
    FleureComponent,
    AddfleureComponent,
    BouquetComponent,
    AlllisteComponent,
    ClientComponent,
    AddbouquetComponent,
    ModiffleureComponent,
    ModifbouquetComponent,
    ListecommandeComponent,
    HomeclientComponent,
    MenuclientComponent,
    
    
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DataTablesModule,
    HttpClientModule,
    AppRoutingModule,
    NgSelect2Module,
    MatSliderModule,
    FormsModule,
    SimpleModalModule.forRoot({container: 'modal-container'}, {...defaultSimpleModalOptions, ...{
      closeOnEscape: true,
      closeOnClickOutside: true,
      wrapperDefaultClasses: 'o-modal o-modal--fade',
      wrapperClass: 'o-modal--fade-in',
      animationDuration: 300,
      autoFocus: true
    }}),
    
    
    BrowserAnimationsModule
  ],
  providers: [{
    provide: DefaultSimpleModalOptionConfig,
    useValue: {...defaultSimpleModalOptions, ...{ closeOnEscape: true, closeOnClickOutside: true }}
  }],
  entryComponents: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
