import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'educacion-item',
  templateUrl: './educacion-item.component.html',
  styleUrls: ['./educacion-item.component.css']
})
export class EducacionItemComponent {

  @Input() educacion: any;

  constructor(){

  }

  ngOnInit(): void{
    
  }

}
