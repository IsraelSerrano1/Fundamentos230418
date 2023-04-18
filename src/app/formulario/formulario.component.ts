import { Component } from '@angular/core';
import { Producto } from '../_modelo/producto';
import { tipoProducto } from '../_modelo/tipoProducto';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  productos: Producto[]=[]
  producto: Producto = new Producto("",0,0,0)

  

  addProducto(){
    // console.log(this.opcion)
    this.productos.push(this.producto);
    this.producto= new Producto("",0,0,0);
  }

}
