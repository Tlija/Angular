import { Component, ElementRef,AfterViewInit, EventEmitter, Input, Output, ViewChild, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ShareReplayConfig, Subscription } from 'rxjs';
import { ShareServiceService } from '../services/share-service.service';

@Component({
  selector: 'app-forme',
  templateUrl: './forme.component.html',
  styleUrls: ['./forme.component.css']
})
export class FormeComponent implements OnInit,AfterViewInit{


num:any
// ob:Subscription
ob2 :Subscription

@Input("name") myName:any

@Output()myEvent=new EventEmitter()
 names="RamadhanMobarek"

  // myForme=new FormGroup({
  //   fname:new FormControl,
  //   age: new FormControl

  // })
  /**Form builder */

  myForme:any
/**validations  les input */
ngOnInit(): void {

}
  constructor(private formbuilder:FormBuilder,private route:ActivatedRoute, private share:ShareServiceService){

this.myForme=this.formbuilder.group({
  fname:['',Validators.required],
  age:['',Validators.required],
  email:['',[Validators.email,Validators.required]],
  /**=================================ArryForm========================== */
  items:this.formbuilder.array([
    this.formbuilder.group({
      id:['1'],
      title:['']
    }),
    this.formbuilder.group({
      id:['2'],
      title:['']
    })
  ])

})
this.ob2=this.route.params.subscribe((params)=>{
  console.log(params);
})



/**observe le data */
this.share.testObservabel().subscribe(val=>console.log(val)).unsubscribe()
/**Note Bien que lobservabel est obligatoirement  fini par unsubsecribe */



  }
/**data  send child to parent  */
  printdata(){
    this.myEvent.emit(this.names)
  }
  print(){
    console.log(this.myForme);
  }

  add(f:NgForm){
    let data=f.value
    console.log(data);
  }
  get fname(){
  return this.myForme.get('fname')
  }
  get age(){
    return this.myForme.get('age')
  }
  get email(){
    return this.myForme.get('email')
  }
/** */
  get items(){
    return this.myForme.get('items')as FormArray
  }
  addnew(){
    let newInput=this.formbuilder.group({

        id:[''],
        title:['']

    })
    this.items.push(newInput)

  }
  /**delete form Array */
  delete(i:any){
    this.items.removeAt(i)

  }
/**controle input de  html  avec component .ts */
  @ViewChild('firstname')myInput!:ElementRef
  ngAfterViewInit(): void {
      this.myInput.nativeElement.value="tlija"
  }
}

