import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

equipo:any=[];
info: InfoPagina ={};
cargada:true;

  constructor(private http: HttpClient) {

    console.log('Servicio InfoPagina Listo');
    this.cargarEquipo();
    this.cargarInfo();
         

    //leer mi archivo JSON
   }

   private cargarInfo(){
    this.http.get('assets/data/data-pagina.json')
    .subscribe((resp: InfoPagina)=> {

       //resp contendra toda la informacion del archivo json convertido en obj JavaScript
       this.info=resp;
       this.cargada=true;
       console.log(resp);//de esta manera muestro todos los datos
       //console.log(resp['email']); //de esta manera ,uestro las propiedades de interes
       ////////////////////////////////////////////////////////
      


    } ) 
   }

   private cargarEquipo(){
    this.http.get('https://angular-html-2c91a.firebaseio.com/equipo.json')
    .subscribe((resp:any[])=> {

       //resp contendra toda la informacion del archivo json convertido en obj JavaScript
       this.equipo=resp;
       this.cargada=true;
       console.log(resp);//de esta manera muestro todos los datos
       //console.log(resp['email']); //de esta manera ,uestro las propiedades de interes
       ////////////////////////////////////////////////////////
      


    } ) 
   }
}
