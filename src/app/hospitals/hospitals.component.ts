import { Component, OnInit } from '@angular/core';
import{GetDataService} from '../get-data.service'

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.css']
})
export class HospitalsComponent implements OnInit {
public statecollegebeds_api
public states
public summary
public medicalcollegebeds_api
public medicalbeds
selectedLevel
  Locationuser: any;
  places=[]
  dept=["Govt.","University","Society","Private","Govt-Society","Trust"]
  constructor(private Getdata:GetDataService) { }

  ngOnInit() {
    this.Getdata.get_task3a().subscribe(c=>{
      this.statecollegebeds_api=c
     this.states=this.statecollegebeds_api.data.regional
     this.summary=this.statecollegebeds_api.data.summary
     this.places=this.statecollegebeds_api.data.regional
    })
    this.Getdata.get_task3b().subscribe(c=>{
      this.medicalcollegebeds_api=c
      this.medicalbeds=this.medicalcollegebeds_api.data.medicalColleges
    })
  }

  
  selected(){
this.search(this.selectedLevel)
  }
listedplaces=[]
pure=true
  previousvalue
  noproducts=false
  previoussearch=new Array()
  search(value){
    this.pure=false
    if(this.previousvalue!=value){
      this.previousvalue=value
      console.log(value.length);

      if(this.listedplaces || value.length==0){
        this.pure=true
this.listedplaces.splice(0,this.listedplaces.length)
        console.log(this.listedplaces);
        this.noproducts=false
      }
    }

    if(value.length!=0){
      this.places.forEach((element)=>{
        if(element.title.toLowerCase()===value || element.link.toLowerCase()===value){
            this.listedplaces.push(element)
        }
        if(element.state.toLowerCase().includes(value)){
         
           this.listedplaces.push(element)}
        
     
        if(element.dept.toLowerCase().includes(value)){
         
           this.listedplaces.push(element)}
        
      })
    }

    if(this.listedplaces.length===0 && value.length!=0){
      this.noproducts=true
    }
  }
  searchs(value){
    this.pure=false
    if(this.previousvalue!=value){
      this.previousvalue=value
      console.log(value.length);

      if(this.listedplaces || value.length==0){
        this.pure=true
this.listedplaces.splice(0,this.listedplaces.length)
        console.log(this.listedplaces);
        this.noproducts=false
      }
    }

    if(value.length!=0){
      this.medicalbeds.forEach((element)=>{
        if(element.ownership.toLowerCase()==value ){
            this.listedplaces.push(element)
        }
        if(element.ownership==value ){
            this.listedplaces.push(element)
        }
        if(element.state.toLowerCase().includes(value)){
         
           this.listedplaces.push(element)}
        
     
        if(element.dept.toLowerCase().includes(value)){
         
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
  cartarr=[{
    "state": "A & N Islands",
    "name": "Andaman & Nicobar Islands Insitute of Medical Sciences, Port Blair",
    "city": "Port Blair",
    "ownership": "Govt.",
    "admissionCapacity": 100,
    "hospitalBeds": 460
  },
  {
    "state": "Andhra Pradesh",
    "name": "ACSR Government Medical College Nellore",
    "city": "Nellore",
    "ownership": "Govt.",
    "admissionCapacity": 150,
    "hospitalBeds": 750
  },
  {
    "state": "Andhra Pradesh",
    "name": "Alluri Sitaram Raju Academy of Medical Sciences, Eluru",
    "city": "Eluru",
    "ownership": "Trust",
    "admissionCapacity": 150,
    "hospitalBeds": 1070
  },
  {
    "state": "Andhra Pradesh",
    "name": "Andhra Medical College, Visakhapatnam",
    "city": "Visakhapatnam",
    "ownership": "Govt.",
    "admissionCapacity": 200,
    "hospitalBeds": 2017
  },
  {
    "state": "Andhra Pradesh",
    "name": "Apollo Institute of Medical Sciences and Research, Chittoor",
    "city": "Chittoor",
    "ownership": "Society",
    "admissionCapacity": 150,
    "hospitalBeds": 0
  }]
  total=[]
}
