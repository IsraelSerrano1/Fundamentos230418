import { Component } from '@angular/core';
import { Pedido } from '../_modelo/pedido';

@Component({
  selector: 'app-lista-padre',
  templateUrl: './lista-padre.component.html',
  styleUrls: ['./lista-padre.component.css']
})
export class ListaPadreComponent {
  pedidosP: Pedido[] = [];
  
  recivePedido(pedidoH:Pedido[]){
    this.pedidosP=pedidoH;
  }

}
