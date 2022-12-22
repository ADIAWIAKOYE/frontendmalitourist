import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { DetailregionComponent } from './detailregion/detailregion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { RegionComponent } from './region/region.component';

const routes: Routes = [

  {
    path:"",
    redirectTo:"acceuil",
    pathMatch:'full'
  },
  {
    path:"inscription",
    component:InscriptionComponent
  },
  {
    path:"connexion",
    component:ConnexionComponent
  },
  {
    path:"acceuil",
    component:AcceuilComponent
  },
  {
    path:"region",
    component:RegionComponent
  },
  {
    path:"detailregion/:idregion",
    component:DetailregionComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
