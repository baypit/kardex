import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Kardex } from 'src/app/Modelo/Kardex';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-kardex',
  templateUrl: './kardex.component.html',
  styleUrls: ['./kardex.component.css']
})
export class KardexComponent implements OnInit {

  listKardex:Kardex[] | undefined;
  constructor(private service:ServiceService, private router:Router ) { }

  ngOnInit(): void {
    this.service.getKardex().subscribe(data =>{
      this.listKardex=data;
    })
  }

}
