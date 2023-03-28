import { Component } from '@angular/core';
import { ShareServiceService } from '../services/share-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  verifAdmin:any

  constructor( private sh:ShareServiceService){
  this.verifAdmin=this.sh.isAdmin
  }
}
