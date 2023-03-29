import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareServiceService {
  data={
    name:"hachem",
    lastname:"tlijani",
    country:'tunisia',
  }
  isAdmin=true

  constructor(private http:HttpClient ) { }
  print(){
    console.log(this.data.name);
    console.log(this.data.lastname);
    console.log(this.data.country);


  }
  /**teste lobservabol */
  testObservabel(){
    return new Observable((observer)=>{
      setTimeout(()=>{
        observer.next('one')

      },2000)

      setTimeout(()=>{
        observer.next('tow')

      },4000)

      setTimeout(()=>{
        observer.next('three')

      },6000)
      setTimeout(()=>{
        observer.complete()

      },7000)

    },)

  }

  getAlluser(){
   return this.http.get('http://localhost:7000/user/')  }

   getOneStudent(){
    return this.http.get('http://localhost:7000/user/6423edf08eec825328d1a8ca')
   }

   getAllProd(){
    return this.http.get('http://localhost:7000/products')  }

}
