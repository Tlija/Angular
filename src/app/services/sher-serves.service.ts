import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SherServesService {
  data={
    name:'hachem',
    last:'bejaoui',
    country:'tunisia'
  }
  url="www.winopapa.com"

  constructor() { }

  print(){
    console.log(this.data.name)
    console.log(this.data.last)
    console.log(this.data.country)


  }

}
