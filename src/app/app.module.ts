import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from "./connexion/connexion.component";
import { AcceuilComponent } from './acceuil/acceuil.component';
import { RegionComponent } from './region/region.component';

@NgModule({
    declarations: [
        AppComponent,
        InscriptionComponent,
        ConnexionComponent,
        AcceuilComponent,
        RegionComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
       
    ]
})
export class AppModule { }
