import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'laboral-item',
  templateUrl: './laboral-item.component.html',
  styleUrls: ['./laboral-item.component.css']
})
export class LaboralItemComponent {

  @Input() labor: any

  constructor(){

  }

  ngOnInit(): void{

  }


}
