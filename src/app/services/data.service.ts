import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  obtenerUsuario():Observable<any>
  {
    console.log("obteniendo Usuario...")
    return this.http.get('https://my-json-server.typicode.com/milasantacruz/miniback-jsonServer/user')
  }

  obtenerProyectos():Observable<any>
  {
    console.log("obteniendo Proyectos...")
    return this.http.get('https://my-json-server.typicode.com/milasantacruz/miniback-jsonServer/proyectos')
  }

  obtenerEducacion():Observable<any>
  {
    console.log("obteniendo Proyectos...")
    return this.http.get('https://my-json-server.typicode.com/milasantacruz/miniback-jsonServer/educacion')
  }

}
