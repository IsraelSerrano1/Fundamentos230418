import { Component, EventEmitter, Output } from '@angular/core';
import { Pedido } from '../_modelo/pedido';

@Component({
  selector: 'app-formulario-hijo',
  templateUrl: './formulario-hijo.component.html',
  styleUrls: ['./formulario-hijo.component.css']
})
export class FormularioHijoComponent {
  pedidos: Pedido[]= [];
  pedido: Pedido = new Pedido(0,"",0,0 )
  @Output() enviarDatos = new EventEmitter<Pedido[]>()

  addPedido(){
    this.pedidos.push(this.pedido)
    this.enviarDatos.emit(this.pedidos);
    this.pedido = new Pedido(0,"",0,0 );
  }

}
