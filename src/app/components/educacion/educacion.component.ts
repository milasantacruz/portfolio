import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {

  dataEducacion:any;

  constructor(private datosEducacion:DataService){

  }

  ngOnInit(): void{
    this.datosEducacion.obtenerEducacion().subscribe(data=>{
      this.dataEducacion = data
    })
  }
}
