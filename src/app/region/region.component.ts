import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Fichier, Pays, Region } from '../Modules/region';
import { RegionService } from '../services/region.service';
 

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {
  regions : any;
  pays : any;
  formulaire!:FormGroup
  habitant : any;
  message: any;
  nompays: any;
  route: any;


  nomREGION: any;
  codeREGION: any;
  nomPAYS: any;
  lanparleREGION: any;
  habitantHABITANT: any;


     constructor( private service : RegionService, private formB: FormBuilder) { }

     ngOnInit(): void{
      this.service.getRegion().subscribe(data=>{
        this.regions=data;
        console.log("la region est"+data)
        
      });

      this.service.getPays().subscribe(data=>{
        this.pays=data;
        console.log("le pays est"+data )
        
      });
       
    

      this.formulaire=this.formB.group({
        nomregion:["",Validators.required],
        coderegion:["",Validators.required],
        file:["",Validators.required],
        description:["",Validators.required],
        doactivite:["",Validators.required],
        lanparle:["",Validators.required],
        superficie:["",Validators.required],
        nompays:["",Validators.required],
        nbhabitant:["",Validators.required],
        })
     }


     regionobjet: Region = {
       idregion: 0,
       coderegion: '',
       nomregion: '',
       doactivite: '',
       lanparle: '',
       superficie: '',
       description: '',
       nbhabitant:'',
     }

    
     paysObjet: Pays = {
       idpays: 0,
       nompays: ''
     }

     recuperepays : any;

    
  

     //les attributs qui sont utiliseés pur recuperer les valeurs des chaamps
     idregion: number = 0;
     coderegion: string = '';
     nomregion: string = '';
     doactivite: string = '';
     lanparle: string = '';
     superficie: string = '';
     description: string = '';
     nbhabitant: string = '';
     nompays$: string = '';


     
     file:any;
     fichier!:Fichier;
     select_pays! : any;

     //on vide le formulaire
   resetForm(){

  this.coderegion = '';
  this.nomregion = '';
  this.doactivite = '';
  this.lanparle = '';
  this.superficie = '';
  this.description = '';
  this.nbhabitant = '';
  this.nompays = '';

}

fileChang(event:any){
  this.file=event.target.files[0]
console.log(event)
}


creerregion(){
  // this.regionobjet=this.formulaire.value
  // let data =new FormData();
// alert('region')

this.nomREGION = this.formulaire!.get("nomregion")!.value
console.log("le nom est    "+this.nomREGION)

this.codeREGION = this.formulaire!.get("coderegion")!.value
console.log("le code est    "+this.codeREGION)

this.nomPAYS = this.formulaire!.get("nompays")!.value
console.log("le nompays est     "+this.nomPAYS)

this.lanparleREGION = this.formulaire!.get("lanparle")!.value
console.log("le lanparle est    "+this.lanparleREGION)

this.habitantHABITANT = this.formulaire!.get("nbhabitant")!.value
console.log("le habitant est    "+this.habitantHABITANT)

// for(let idpays of this.nompays)
// this.recuperepays = idpays;


  // data.append("file",this.file)

  // console.log(data)
  this.service.ajouterRegion(this.regionobjet.coderegion, this.regionobjet.nomregion, this.regionobjet.doactivite, this.regionobjet.lanparle, this.regionobjet.superficie, this.regionobjet.description,  this.nomPAYS, this.habitantHABITANT, this.file).subscribe(data => {
      this.formulaire.reset()
      // this.messages = "entite ajouter avec succes";
      this.message = data.contenu;
      
      console.log("---------------------------------"+data)
  })
     this.resetForm()
}




// regioncreer() {
//   this.fichier = this.formulaire.value

//   this.regionobjet.description = this.description;

//   this.regionobjet.nomregion = this.nomregion;

//   this.regionobjet.doactivite = this.doactivite; 

//   this.regionobjet.lanparle = this.lanparle;

//   this.regionobjet.superficie = this.superficie;

//   this.regionobjet.coderegion = this.coderegion; 

//   this.paysObjet.nompays = this.nompays; 


//   console.log(this.fichier.imageregion)


//   this.service.ajouterRegion(this.nomregion, this.description, this.nbhabitant, this.doactivite, this.lanparle, this.superficie, this.coderegion, this.paysObjet.nompays, this.fichier.file).subscribe(data => {

//     console.log(data)



//      if(data.Status == 200){
//        this.route.navigateByUrl("/gestionentite")
//      }

//     this.formulaire.reset()
//   })

//   this.resetForm();
 
// }




}
