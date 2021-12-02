import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './Producto/add/add.component';
import { ListarComponent } from './Producto/listar/listar.component';
import { EditarComponent } from './Producto/editar/editar.component';
import {FormsModule} from '@angular/forms';
import { ServiceService } from './Service/service.service';
import {HttpClientModule} from'@angular/common/http';
import { VenderComponent } from './Producto/vender/vender.component';
import { IngresarComponent } from './Producto/ingresar/ingresar.component';
import { KardexComponent } from './Producto/kardex/kardex.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListarComponent,
    EditarComponent,
    VenderComponent,
    IngresarComponent,
    KardexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
