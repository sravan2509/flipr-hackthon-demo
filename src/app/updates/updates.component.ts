import { Component, OnInit } from '@angular/core';
import { GuardsCheckEnd } from '@angular/router';
// import { newArray } from '@angular/compiler/src/util';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.css']
})
export class UpdatesComponent implements OnInit {
  public notification:{date:any,title:any,link:any}[]= new Array()
  public i=0;
  constructor() { }
  ngOnInit(): void {
    // for (let i = 0; i < this.notice.length; i++) {
    //   if( this.notice[i].title.slice(0,9)[2]==='.' && this.notice[i].title.slice(0,9)[5]==='.' ){
    //     this.notification[i].date=this.notice[i].title.slice(0,10)
    //     this.notification[i].title=this.notice[i].title.slice(11)
    //   }
    //   else if( this.notice[i].title.slice(0,9)[2]===' ' ){
    //     this.notification[i].date="NA"
    //     this.notification[i].title=this.notice[i].title.slice(10)
    //   }
    //   else if(this.notice[i].title.slice(0,9)[2]==="&"){
    //     this.notification[i].date="NA"
    //     this.notification[i].title=this.notice[i].title.slice(10)
    //   }
    //   else{
    //     this.notification[i].date="NA"
    //     this.notification[i].title=this.notice[i].title
    //   }
    //   this.notification[i].link=this.notice[i].link
    // }
    this.notice.forEach((element)=>{
      if( element.title.slice(0,9)[2]==='.' && element.title.slice(0,9)[5]==='.' ){
       this.notification[this.i++].date=element.title.slice(0,10)
       this.notification[this.i++].title=element.title.slice(11)
     }
     else if( element.title.slice(0,9)[2]===' ' ){
       this.notification[this.i++].date="NA"
       this.notification[this.i++].title=element.title.slice(10)
     }
     else if(element.title.slice(0,9)[2]==="&"){
       this.notification[this.i++].date="NA"
       this.notification[this.i++].title=element.title.slice(10)
     }
     else{
       this.notification[this.i++].date="NA"
       this.notification[this.i++].title=element.title
     }
     this.notification[this.i++].link=element.link
   })
  }
  public   notice= [
    {
      "title": "PIB",
      "link": "https://pib.gov.in/newsite/pmreleases.aspx?mincode=31"
    },
    {
      "title": "02.08.2020 Revised guidelines for International Arrivals",
      "link": "https://www.mohfw.gov.in/pdf/RevisedguidelinesforInternationalArrivals02082020.pdf"
    },
    {
      "title": "24.05.2020 Guidelines for international arrivals",
      "link": "https://www.mohfw.gov.in/pdf/Guidelinesforinternationalarrivals.pdf"
    },
    {
      "title": "24.05.2020 Guidelines for domestic travel (air/train/inter-state bus travel)",
      "link": "https://www.mohfw.gov.in/pdf/Guidelinesfordomestictravel(airortrainorinter-statebustravel).pdf"
    },
    {
      "title": "20.03.2020 Instructions to all major and minor ports for dealing with(COVID-19)",
      "link": "https://www.mohfw.gov.in/pdf/DGSOrder04of2020.pdf"
    },
    {
      "title": "PIB",
      "link": "https://pib.gov.in/newsite/pmreleases.aspx?mincode=31"
    },
    {
      "title": "02.08.2020 Revised guidelines for International Arrivals",
      "link": "https://www.mohfw.gov.in/pdf/RevisedguidelinesforInternationalArrivals02082020.pdf"
    },
    {
      "title": "24.05.2020 Guidelines for international arrivals",
      "link": "https://www.mohfw.gov.in/pdf/Guidelinesforinternationalarrivals.pdf"
    },
    {
      "title": "24.05.2020 Guidelines for domestic travel (air/train/inter-state bus travel)",
      "link": "https://www.mohfw.gov.in/pdf/Guidelinesfordomestictravel(airortrainorinter-statebustravel).pdf"
    },
    {
      "title": "20.03.2020 Instructions to all major and minor ports for dealing with(COVID-19)",
      "link": "https://www.mohfw.gov.in/pdf/DGSOrder04of2020.pdf"
    },
    {
      "title": "PIB",
      "link": "https://pib.gov.in/newsite/pmreleases.aspx?mincode=31"
    },
    {
      "title": "02.08.2020 Revised guidelines for International Arrivals",
      "link": "https://www.mohfw.gov.in/pdf/RevisedguidelinesforInternationalArrivals02082020.pdf"
    },
    {
      "title": "24.05.2020 Guidelines for international arrivals",
      "link": "https://www.mohfw.gov.in/pdf/Guidelinesforinternationalarrivals.pdf"
    },
    {
      "title": "24.05.2020 Guidelines for domestic travel (air/train/inter-state bus travel)",
      "link": "https://www.mohfw.gov.in/pdf/Guidelinesfordomestictravel(airortrainorinter-statebustravel).pdf"
    },
    {
      "title": "20.03.2020 Instructions to all major and minor ports for dealing with(COVID-19)",
      "link": "https://www.mohfw.gov.in/pdf/DGSOrder04of2020.pdf"
    },
  ]

  // check(index){
  //   if(this.notifications[index].title.slice(0,9).trim().length==9 && this.notifications[index].title.slice(0,9)[2]==='.'){
  //     console.log( this.notifications[index].title.slice(0,9).trim().length+"efsd"+true+'yuhuyhgyu'+this.notifications[index].title.slice(0,9)[2])
  //    return true
  //   }

  

  
  
  
  
  
}
