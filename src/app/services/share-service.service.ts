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

  constructor() { }
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
}
