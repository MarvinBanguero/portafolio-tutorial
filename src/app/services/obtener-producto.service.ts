import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ObtenerProductoService {

  constructor(private http:HttpClient) { 
    
  }

  public cargarItem(id:string){

    return this.http.get(`https://angular-html-2c91a.firebaseio.com/producto/${id}.json`);
  }
}
