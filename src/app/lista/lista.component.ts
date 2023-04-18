import { Component, Input } from '@angular/core';
import { Producto } from '../_modelo/producto';
import { tipoProducto } from '../_modelo/tipoProducto';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  
  
  @Input() productos: Producto[]=[];

  opcion: string[] = Object.values(tipoProducto) as string[];
  ngOnInit(): void {
    
  }


  
}
