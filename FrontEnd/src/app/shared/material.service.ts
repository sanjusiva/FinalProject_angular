import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Material} from './material.model'
@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  selectedMaterial!: Material;
  materials: Material[] =[];
  userName:string='';
  readonly baseURL = 'http://localhost:3000/materials';

  
  constructor(private http:HttpClient) { }

  
  postMaterial(mat: Material) {
    //console.log(mat +"2");
    
    return this.http.post(this.baseURL, mat);
  }

  getMaterialList() {
    return this.http.get(this.baseURL);
  }

  putMaterial(mat: Material) {
    console.log("putttt 1");
    console.log(mat._id);
    
    return this.http.put(this.baseURL + `/${mat._id}`, mat);
  }

  deleteMaterial(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

  getUsername(username:string){
    this.userName=username;
}
}
