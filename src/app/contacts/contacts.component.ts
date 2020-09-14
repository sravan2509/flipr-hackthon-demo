import { Component, OnInit } from '@angular/core';
import{GetDataService} from '../get-data.service'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(private Getdata:GetDataService) { }
public api;
public regional
  ngOnInit() {
    this.Getdata.get_task1().subscribe(c=>{
this.api=c
console.log(this.api)
this.regional=this.api.data.contacts.regional
    })
     
    

  }

}
