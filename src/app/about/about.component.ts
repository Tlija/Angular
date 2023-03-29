import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ShareServiceService } from '../services/share-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  lists={
    email:'zzzzz',
    role:'azeaz'
  }


dataArray:any
  constructor( private share:ShareServiceService, private http:HttpClient){
    console.log(this.share.data);

         this.http.get('http://localhost:7000/user').subscribe(data=>this.dataArray=data)
  }

}
