import { Component, EventEmitter, Output } from '@angular/core';
import { Pedido } from '../_modelo/pedido';

@Component({
  selector: 'app-formulario-hijo',
  templateUrl: './formulario-hijo.component.html',
  styleUrls: ['./formulario-hijo.component.css']
})
export class FormularioHijoComponent {
  pedidosH: Pedido[]= [];
  pedidoH: Pedido = new Pedido(0,"",0,0 );
  @Output() enviarDatos = new EventEmitter<Pedido[]>();

  addPedido(){
    this.pedidosH.push(this.pedidoH);
    this.enviarDatos.emit(this.pedidosH);
    this.pedidoH = new Pedido(0,"",0,0 );
  }

}
