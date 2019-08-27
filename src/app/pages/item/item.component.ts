import { Component, OnInit } from '@angular/core';
import { ObtenerProductoService } from '../../services/obtener-producto.service';
import { ActivatedRoute }from '@angular/router';
import { descripcionInterface } from 'src/app/interfaces/producto-descripcion.interface';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

item:descripcionInterface;
id:String;
  constructor(private route:ActivatedRoute,
              public obtenerItem:ObtenerProductoService) { 

              }

  ngOnInit() {

    this.route.params.subscribe( parametros =>
      {
           //console.log(parametros['id']);
           
           this.obtenerItem.cargarItem(parametros['id']).subscribe( (producto:descripcionInterface) =>{
            this.item=producto;
            this.id=parametros['id'];
            
           });
    })
  }

}
