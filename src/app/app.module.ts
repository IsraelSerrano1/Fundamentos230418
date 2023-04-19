import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioComponent } from './producto_Padre/formulario.component';
import { FormsModule } from '@angular/forms';
import { ListaComponent } from './producto_Hijo/lista.component';
import { ListaPadreComponent } from './pedido_padre/lista-padre.component';
import { FormularioHijoComponent } from './pedido_hijo/formulario-hijo.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListaComponent,
    ListaPadreComponent,
    FormularioHijoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
