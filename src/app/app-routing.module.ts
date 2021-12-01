import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './Producto/add/add.component';
import { EditarComponent } from './Producto/editar/editar.component';
import { ListarComponent } from './Producto/listar/listar.component';

const routes: Routes = [{path:'listar',component:ListarComponent},
{path:'add',component:AddComponent},
{path:'edit',component:EditarComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
