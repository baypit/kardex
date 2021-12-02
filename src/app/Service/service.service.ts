import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../Modelo/Producto';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }


  Url='http://localhost:8080/api/productos';

  getProductos(){
    return this.http.get<Producto[]>(this.Url);
  }

  createProducto(producto: Producto){
    let Url='http://localhost:8080/api/registroProducto';
    return this.http.post<Producto>(Url,producto);
  }

  getProductoId(id:number){
    console.log("id "+id)
    let Url='http://localhost:8080/api/listarProductoId';
    return this.http.post<Producto>(Url,id);
  }

  updateProducto(producto:Producto){
    console.log("ipersona "+producto.id);
    console.log("ipersona nombre "+producto.nombre);
    return this.http.put<Producto>(this.Url+"/"+producto.id, producto);
   
  }

  deleteProducto(producto:Producto){
    console.log("ipersona "+producto.id);
    console.log("ipersona nombre "+producto.nombre);
    return this.http.delete<Producto>(this.Url+"/"+producto.id)
   
  }

}
