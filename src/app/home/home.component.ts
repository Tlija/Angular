import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SherServesService } from '../services/sher-serves.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  firstName="maher ben "
 lastName="thaher"
 email="maher@gmail.com"
 linkImage="https://th.bing.com/th/id/OIP.avb9nDfw3kq7NOoP0grM4wHaEK?w=286&h=180&c=7&r=0&o=5&pid=1.7"
  titleStyle="color:red"
  titleStylee="block"
  constructor(private route:Router,private share:SherServesService){
  this.share.print()
  }
  
  show(){
    this.titleStylee="block"
  }
  number=1
  hidden(){
    this.titleStylee="none"
  }
  dec(){
    this.number++
  }
  inc(){

    this.number--
  }
  x=10
  y=10

  dataArray=["maher","bouch","hama",]
  
  gotoview(){
 this.route.navigate(['/profile/view'])
  }
  gotodetails(){
    this.route.navigate(['/profile/details'])


  }
}
