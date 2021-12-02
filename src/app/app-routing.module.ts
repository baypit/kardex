import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './Producto/add/add.component';
import { EditarComponent } from './Producto/editar/editar.component';
import { ListarComponent } from './Producto/listar/listar.component';
import { VenderComponent } from './Producto/vender/vender.component';
import { IngresarComponent } from './Producto/ingresar/ingresar.component';
import { KardexComponent } from './Producto/kardex/kardex.component';

const routes: Routes = [{path:'listar',component:ListarComponent},
{path:'add',component:AddComponent},
{path:'edit',component:EditarComponent},
{path:'sold',component:VenderComponent},
{path:'ing',component:IngresarComponent},
{path:'kar',component:KardexComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
