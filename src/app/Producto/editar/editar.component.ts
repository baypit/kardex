import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Modelo/Producto';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  productoEdit:Producto=new Producto("1",1,1);
  constructor(private router:Router, private service: ServiceService) { }

  ngOnInit(): void {
    this.editar();
  }

  editar(){
    let id = localStorage.getItem("id");
    console.log("id --"+id);
    if(id != null){
      this.service.getProductoId(+id).subscribe(data=>{
        this.productoEdit=data;
        console.log("Producto "+ this.productoEdit.nombre);
      })
    }
   
  }

  actualizar(producto:Producto){
    this.service.updateProducto(producto).subscribe(data=>{
      this.productoEdit = data;
      alert("Se actualizo el producto");
      this.router.navigate(["listar"]);
    })
  }


}
