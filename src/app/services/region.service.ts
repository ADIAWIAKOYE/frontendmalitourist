import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  file:any;

  constructor(private http:HttpClient) { }

  getRegion():Observable<any>
  {
    console.log("------------------------------")
    return this.http.get(`http://localhost:8080/region/readregion`);
  }

  getPays():Observable<any>
  {
    console.log("------------------------------")
    return this.http.get(`http://localhost:8080/Pays/read`);
  }





  //======================Ajouter région=================

  ajouterRegion(coderegion: string,  nomregion: string, doactivite: string, lanparle: string, 
    superficie: string, description: string, nompays: string, nbhabitant: string, file:any):Observable<any>{
    let data =new FormData();
    data.append("fileRegion",file);
    data.append("nomregion", nomregion);
    data.append("description", description);
    data.append("coderegion", coderegion);
    data.append("doactivite", doactivite);
    data.append("lanparle", lanparle);
    data.append("superficie", superficie);
    data.append("nbhabitant", nbhabitant);
    return this.http.post<any>(`http://localhost:8080/region/createregiontrue/${nompays}`, data);
  }

//======================Ajouter habitant=================

// posthabitant(nomregion: string, habitant: Habitant){
//   return this.http.post<Habitant>(`http://localhost:8080/Habitant/createHabitant/${nomregion}`, habitant);
// }
}
