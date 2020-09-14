import { Component, OnInit, APP_ID } from '@angular/core';
import { GuardsCheckEnd } from '@angular/router';
// import { newArray } from '@angular/compiler/src/util';
import{ GetDataService} from "../get-data.service"


@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.css']
})
export class UpdatesComponent implements OnInit {
  public notification=[]
   public latest
   public oldest
  public api
  public notice
  Locationuser: any;
  // public i=0;
  
  constructor( private Getdata:GetDataService) { 
    this.places=this.notification
if(this.pure){
  this.listedplaces=this.notification
}
  }
  ngOnInit(): void {
   this.get().then((_)=>{
    for (let i = 0; i < this.notice.length; i++) {
      let obj = {  date:" ",
      title:" ",
      link:" "
    }
      if( this.notice[i].title.slice(0,9)[2]==='.' && this.notice[i].title.slice(0,9)[5]==='.' ){
        obj.date=this.notice[i].title.slice(0,10)
        obj.title=this.notice[i].title.slice(11)
      }
      else  if( this.notice[i].title.slice(0,9)[2]==='-' && this.notice[i].title.slice(0,9)[5]==='-' ){
        obj.date=this.notice[i].title.slice(0,10)
        obj.title=this.notice[i].title.slice(11)
      }
  
      else{
        obj.date="NA"
        obj.title=this.notice[i].title
      }
      obj.link=this.notice[i].link
      
      this.notification.push(obj)
      
      //  console.log( i + "  " + obj)
    }

    for (let j = this.notification.length-1; j >= 0;j--){
      if(this.notification[j].date!=="NA"){
         this.oldest=this.notification[j].date
        break;
      }

    }

    for (let j = 0; j < this.notification.length;j++){
      if(this.notification[j].date!=="NA"){
         this.latest=this.notification[j].date
        break;
      }

    }
    
  })

  }
  
  
get(){
 return new Promise
 ((resolve,reject)=>{
  this.Getdata.get_task2().subscribe(c=>{
    this.api=c
    
    console.log(this.api)
    this.notice=this.api.data.notifications 
    // this.places=this.api.data.notification
    // this.listedplaces=this.api.data.notifications
    resolve()
  })
})

}
  

  

places=[]
listedplaces=[]
pure=true
  previousvalue
  noproducts=false
  previoussearch=new Array()
  search(value){
    this.pure=false
// this.listedplaces.splice(0,this.listedplaces.length)
    if(this.previousvalue!=value){
      this.previousvalue=value
      console.log(value.length);

      if(this.listedplaces || value.length==0){
        this.pure=true
        console.log(this.listedplaces);
        this.noproducts=false
      }
    }

    if(value.length!=0){
      this.places.forEach((element)=>{
        if(element.title.toLowerCase()===value || element.link.toLowerCase()===value){
            this.listedplaces.push(element)
        }
        if(element.title.toLowerCase().includes(value) ||element.date.toLowerCase().includes(value)|| element.link.toLowerCase().includes(value)){
         
           this.listedplaces.push(element)}
        
      })
    }

    if(this.listedplaces.length===0 && value.length!=0){
      this.noproducts=true
    }
  }
  Location(place){
    this.Locationuser=place
  }
}

