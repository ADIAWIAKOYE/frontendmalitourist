import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegionService } from '../services/region.service';

@Component({
  selector: 'app-detailregion',
  templateUrl: './detailregion.component.html',
  styleUrls: ['./detailregion.component.css']
})
export class DetailregionComponent {
  id: any;
 
  region: any;
  habitant: any;
     constructor(private route: ActivatedRoute, private regionservice: RegionService){}

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

    

   

     }
}
