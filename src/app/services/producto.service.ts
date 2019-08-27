import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoInterface } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
cargando=true
producto:ProductoInterface[]=[];
productoFiltrado:ProductoInterface[]=[];


  constructor(private http:HttpClient) { 
     this.cargarProducto();
     console.log('servicio producto');
  }

  private cargarProducto(){
    return new Promise((resolve,reject)=>{
      this.http.get('https://angular-html-2c91a.firebaseio.com/producto_idx.json')
      .subscribe((resp:ProductoInterface[])=>{
           this.producto=resp;
           this.cargando=false;
           resolve();
      })
    });
    
  }
public buscarProducto( termino:string){

  if(this.producto.length===0){
     //cargar productos
     this.cargarProducto().then(()=>{
       //se ejecutara despues de tener los productos
       //aplicar el filtro
      this.productoFiltro( termino );
     })
  }else{
      this.productoFiltro(termino);
  }
}


private productoFiltro(termino: string){
   
   this.productoFiltrado=[];
   termino= termino.toLocaleLowerCase();

   this.producto.forEach( prod=>{
      const titulo = prod.titulo.toLocaleLowerCase();
      if(prod.categoria===termino || titulo===termino){
      
         this.productoFiltrado.push(prod);
    }
   })
   
}
}
