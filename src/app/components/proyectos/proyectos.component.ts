import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit{
  dataProyectos:any;

  constructor(private datosProyectos:DataService){

  }

  ngOnInit(): void{
    this.datosProyectos.obtenerProyectos().subscribe(data =>{
      console.log(data)
    });
  }

}
