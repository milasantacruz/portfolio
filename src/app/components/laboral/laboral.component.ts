import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'laboral',
  templateUrl: './laboral.component.html',
  styleUrls: ['./laboral.component.css']
})
export class LaboralComponent {
  dataProyectos:any;

  constructor(private datosProyectos:DataService){

  }

  ngOnInit(): void{
    this.datosProyectos.obtenerProyectos().subscribe(data =>{
      this.dataProyectos = data
      console.log(data)
    });
  }

}
