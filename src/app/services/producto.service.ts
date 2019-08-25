import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoInterface } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
cargando=true
producto:ProductoInterface[]=[];


  constructor(private http:HttpClient) { 
     this.cargarProducto();
     console.log('servicio producto');
  }

  private cargarProducto(){
     this.http.get('https://angular-html-2c91a.firebaseio.com/producto_idx.json')
     .subscribe((resp:ProductoInterface[])=>{
          this.producto=resp;
          console.log(resp);
          this.cargando=false;
     }
      )
  }
}
