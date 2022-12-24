import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Commentaire } from '../Modules/region';
import { RegionService } from '../services/region.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-detailregion',
  templateUrl: './detailregion.component.html',
  styleUrls: ['./detailregion.component.css']
})
export class DetailregionComponent {
  id: any;
 nom:any;
  region: any;
  habitant: any;
  contenu: any;
  nomregion: any;
  habitanttt: any;
  commentaire: any;
  nbcommentaire: any;
     constructor(private route: ActivatedRoute, private regionservice: RegionService, private tokenStorage: TokenStorageService){}

     ngOnInit(): void {
      const idregion = this.route.snapshot.params['idregion']
      this.id = idregion
      console.log("l'ID est "+idregion)
      
      this.regionservice.getRegionID(idregion).subscribe(data=>{
        this.region=data;
        console.log("la region est "+this.region.nomregion )
        
      });


        this.regionservice.gethabitantidregion(idregion).subscribe(data=>{
        this.habitant=data;
        console.log("la population est "+this.habitant)
        
      })


      this.regionservice.getcommentaireidregion(idregion).subscribe(data=>{
        this.commentaire=data;
        console.log("le commentaire est "+this.commentaire )
        
      });

      this.regionservice.getnbcommentaireidregion(idregion).subscribe(data=>{
        this.nbcommentaire=data;
        console.log("le nombre commentaire est "+this.nbcommentaire )
        
      });

     this.nom = this.tokenStorage.getUser();

      this.nomregion = this.region.nomregion;
       
       
     }

     commentaireobjet: Commentaire = {
      idcommentaire: 0,
      contenu: '',
     }


     resetForm(){

      this.contenu = '';
    
    }


     commenter(){
      this.regionservice.postCommentaire(this.region.nomregion, this.nom, this.contenu).subscribe(data =>{

        console.log("---------------------------------"+data)
      })
      this.resetForm()
     }
}
