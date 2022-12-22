import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from "./connexion/connexion.component";
import { AcceuilComponent } from './acceuil/acceuil.component';
import { RegionComponent } from './region/region.component';
import { DetailregionComponent } from './detailregion/detailregion.component';
import { HttpClientModule } from '@angular/common/http';
import { RegionService } from './services/region.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

@NgModule({
    declarations: [
        AppComponent,
        InscriptionComponent,
        ConnexionComponent,
        AcceuilComponent,
        RegionComponent,
        DetailregionComponent,
        
    ],
    providers: [RegionService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule  
    ]
})
export class AppModule { }
