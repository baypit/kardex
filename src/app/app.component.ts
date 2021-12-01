import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListarComponent } from './Producto/listar/listar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kardex';

  constructor(private router:Router){
    
  }

  listar(){
   this.router.navigate(["listar"]);   
  }

  nuevo(){
    this.router.navigate(["add"]);   
   }

}
