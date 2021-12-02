import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Modelo/Producto';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }

  producto:Producto | undefined;

  prepararParaGuardar(name: string, valor: string, cantidad: string){
    this.producto = new Producto(name, parseInt(valor, 10), parseInt(cantidad, 10));
    console.log(name);
    console.log(valor);
    console.log(this.producto.nombre);
    console.log(this.producto.cantidad);
    this.Guardar(this.producto);
  }

  Guardar(persona:Producto){
    this.service.createProducto(persona).subscribe(data=>{
      alert("Se agrego con exito !!!");
      this.router.navigate(["listar"]);
    })
  }

}
