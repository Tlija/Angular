import { HttpClient } from '@angular/common/http';
import { Component,OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { ShareServiceService } from '../services/share-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnDestroy{
dataArray:any

profil={
  email:"maherTlija@gmail.com",
  password:"maher tlija",

}

dataob:Subscription
  constructor( private share:ShareServiceService, private http:HttpClient){
    console.log(this.share.data);
/**================apple data localement =================== */
        //  this.http.get('http://localhost:7000/user')
        //  .subscribe(data=>{
        //   this.dataArray=data
        //   console.log(this.dataArray);
        // })
/**=================appel data apartire de server================= */
        this.dataob=this.share.getAlluser().subscribe(data=>this.dataArray=data)

        this.share.getOneStudent().subscribe(data=>console.log(data))
        this.share.getAllProd().subscribe(data=>console.log(data))



  }

  ngOnDestroy() {
  this.dataob.unsubscribe()
  }

}
