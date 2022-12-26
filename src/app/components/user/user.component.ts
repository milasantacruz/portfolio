import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  dataPortfolio:any;
    // This is the option that uses the package's AnimationOption interface  
    options: AnimationOptions = {    
      path: 'https://assets9.lottiefiles.com/packages/lf20_wToGI28NVx.json'  
    };  
  
  constructor(private datosPortfolio:DataService){

  }

  ngOnInit(): void{
    this.datosPortfolio.obtenerUsuario().subscribe(data => {
      console.log(data)
      this.dataPortfolio=data;
    });
  }

   // This is the component function that binds to the animationCreated event from the package  
   onAnimate(animationItem:AnimationItem): void {    
    console.log(animationItem);  
  }

}
