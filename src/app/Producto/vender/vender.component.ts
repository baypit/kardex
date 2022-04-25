import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Kardex } from 'src/app/Modelo/Kardex';
import { Producto } from 'src/app/Modelo/Producto';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-vender',
  templateUrl: './vender.component.html',
  styleUrls: ['./vender.component.css']
})
export class VenderComponent implements OnInit {

  productos:Producto[] | undefined;
  productoEdit:Producto=new Producto("1",1,1);
  kardexEdit:Kardex=new Kardex("1","1",1,new Date);
  constructor(private service:ServiceService, private router:Router ) { }

  ngOnInit(): void {
    this.refrescarListado();
  }

  vender(producto:Producto): void{
    if (producto != null ) {
      this.service.venderProducto(producto).subscribe(data=>{
        this.productoEdit= data;
        console.log(this.productoEdit);
        
        let date: Date = new Date();
        this.kardexEdit.producto = this.productoEdit.nombre;
        this.kardexEdit.operacion = "resta";
        this.kardexEdit.cantidad = this.productoEdit.cantidad;
        this.kardexEdit.fecha = date  ;
        
        this.service.registrarKardex(this.kardexEdit).subscribe(data=>{
          alert("Se ingreso el producto");
        })
        this.refrescarListado();
      })
    } 
  }


    refrescarListado():void{
      this.service.getProductos().subscribe(data =>{
        this.productos=data;
      })
    }
}
