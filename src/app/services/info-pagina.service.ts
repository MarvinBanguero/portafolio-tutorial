import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

info: InfoPagina ={};
cargada:true;

  constructor(private http: HttpClient) {

    console.log('Servicio InfoPagina Listo');
    
    this.http.get('assets/data/data-pagina.json')
         .subscribe((resp: InfoPagina)=> {

            //resp contendra toda la informacion del archivo json convertido en obj JavaScript
            this.info=resp;
            this.cargada=true;
            console.log(resp);//de esta manera muestro todos los datos
            //console.log(resp['email']); //de esta manera ,uestro las propiedades de interes
            ////////////////////////////////////////////////////////
           


         } )      

    //leer mi archivo JSON
   }
}
