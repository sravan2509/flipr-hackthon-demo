import { Component, OnInit, APP_ID } from '@angular/core';
import { GuardsCheckEnd } from '@angular/router';
// import { newArray } from '@angular/compiler/src/util';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.css']
})
export class UpdatesComponent implements OnInit {
  public notification=[]
   public latest
   public oldest
  
  public i=0;
  
  constructor() { }
  ngOnInit(): void {
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
      
       console.log( i + "  " + obj)
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
    
  
  }
  

 
public api={
  "success": true,
  "data": {
    "notifications": [
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
        "title": "19.03.2020 Additional Travel Advisory",
        "link": "https://www.mohfw.gov.in/pdf/Traveladvisory.pdf"
      },
      {
        "title": "18.03.2020 Standard Operating Procedure for Passenger Movement post Disembarkation",
        "link": "https://www.mohfw.gov.in/pdf/SOPQuarantineofPassengers.pdf"
      },
      {
        "title": "17.03.2020 Additional Travel Advisory",
        "link": "https://www.mohfw.gov.in/pdf/TravelAdvisory17thMarch.pdf"
      },
      {
        "title": "16.03.2020 Additional Travel Advisory",
        "link": "https://www.mohfw.gov.in/pdf/TravelAdvisory16thMarch.pdf"
      },
      {
        "title": "14.03.2020 Restrictions on International passenger traffic through Land Check Posts",
        "link": "https://www.mohfw.gov.in/pdf/NewinstructionsDt14032020Restirctiononinternationalpassengertraffic.pdf"
      },
      {
        "title": "13.03.2020 Restrictions on International passenger traffic through land check posts-COVID 19",
        "link": "https://www.mohfw.gov.in/pdf/GuidelinesDT13032020.pdf"
      },
      {
        "title": "11.03.2020 Consolidated Travel Advisory - 11 March 2020",
        "link": "https://www.mohfw.gov.in/pdf/ConsolidatedTraveladvisoryUpdated11032020.pdf"
      },
      {
        "title": "11.03.2020 Visa restrictions issued by Bureau of Immigration (BOI) after meeting of GoM on COVID19 - 11 March 2020",
        "link": "https://www.mohfw.gov.in/pdf/VisarestrictionsrelatedtoCOVID19Ministries.pdf"
      },
      {
        "title": "11.03.2020 Decisions- High level Group of Ministers meeting to review current status and actions for prevention and management of COVID-19",
        "link": "https://www.mohfw.gov.in/pdf/HFWnCoVGoM11March2020II.pdf"
      },
      {
        "title": "10.03.2020 Standard Operating Procedure (SOP) for COVID-19 Management- International Cruise Ships at major Indian Ports",
        "link": "https://www.mohfw.gov.in/pdf/InternationalCruiseShipsSOPforCovid19.pdf"
      },
      {
        "title": "10.03.2020 Additional Travel Advisory",
        "link": "https://www.mohfw.gov.in/pdf/AdditionalTravelAdvisory10032020.pdf"
      },
      {
        "title": "10.03.2020 Travel Advisory (Home Isolation)",
        "link": "https://www.mohfw.gov.in/pdf/AdditionalTravelAdvisory1homeisolation.pdf"
      },
      
      {
        "title": "05.03.2020 Advisory - Mass Gatherings",
        "link": "https://www.mohfw.gov.in/pdf/advisoryformassgathering.pdf"
      },
      {
        "title": "22.05.2020 Revised advisory on the use of Hydroxychloroquine (HCQ) as prophylaxis for COVID-19 infection",
        "link": "https://www.mohfw.gov.in/pdf/RevisedadvisoryontheuseofhydroxychloroquineasprophylaxisforSARSCOVID19infection.pdf"
      },
      {
        "title": "21.05.2020 Guidance note for Immunization services during and post COVID outbreak",
        "link": "https://www.mohfw.gov.in/pdf/3ImmunizationServicesduringCOVIDOutbreakSummary150520202.pdf"
      },
      {
        "title": "19.05.2020 Guidelines for Dental Professionals in Covid-19 situation",
        "link": "https://www.mohfw.gov.in/pdf/DentalAdvisoryF.pdf"
      },
      {
        "title": "18.05.2020 Revised Strategy for COVlD-19 testing in lndia",
        "link": "https://www.mohfw.gov.in/pdf/Revisedtestingguidelines.pdf"
      },
      {
        "title": "07.04.2020 Revised Guidelines for Dialysis of COVID – 19 patients",
        "link": "https://www.mohfw.gov.in/pdf/RevisedGuidelinesforDialysisofCOVID19Patients.pdf"
      },
      {
        "title": "05.04.2020 Guidelines for Quarantine facilities COVID-19",
        "link": "https://www.mohfw.gov.in/pdf/90542653311584546120quartineguidelines.pdf"
      },
      {
        "title": "26-03-2020 Gazette Notification - Hydroxychloroquine now a schedule H1 drug, can be sold on prescription only",
        "link": "https://www.mohfw.gov.in/pdf/218927g.pdf"
      },
      {
        "title": "24-03-2020 Letter from Ministry of Consumer Affairs, Food & Public Distribution to States to take appropriate measures to ensure the availability of Ethyl Alcohol/Ethanol/ENA to the manufacturers of hand sanitizers in order to contain Corona Virus COVID- l9",
        "link": "https://www.mohfw.gov.in/pdf/ReviewofpricesofEssentialCommodities.pdf"
      },
      {
        "title": "20-03-2020 Advisory for Hospitals and Medical Institutions",
        "link": "https://www.mohfw.gov.in/pdf/AdvisoryforHospitalsandMedicalInstitutions.pdf"
      },
      {
        "title": "15-03-2020 SOP for Mock Drill on 22nd March 2020 for Hospital Preparedness",
        "link": "https://www.mohfw.gov.in/pdf/MockDrill.pdf"
      },
      {
        "title": "05.09.2020 Manual for Surveillance Teams for containment zones",
        "link": "https://www.mohfw.gov.in/pdf/ManualforSurveillanceTeamsforcontainmentzones.pdf"
      },
      {
        "title": "02.08.2020 Revised guidelines for International Arrivals",
        "link": "https://www.mohfw.gov.in/pdf/RevisedguidelinesforInternationalArrivals02082020.pdf"
      },
      {
        "title": "17.07.2020 Advisory for Gated Residential Complexes with regards to COVID-19",
        "link": "https://www.mohfw.gov.in/pdf/AdvisoryforRWAsonCOVID19.pdf"
      },
      {
        "title": "17.07.2020 Guidelines for Gated Residential Complexes Desirous of Setting Up Small Covid Care Facility by Resident Welfare Associations / Residential Societies / Non-Governmental Organizations (NGOs)",
        "link": "https://www.mohfw.gov.in/pdf/CovidCareFacilityinGatedcomplexes.pdf"
      },
      {
        "title": "04.06.2020 SOP on preventive measures in Restaurants to contain spread of COVID-19",
        "link": "https://www.mohfw.gov.in/pdf/3SoPstobefollowedinRestaurants.pdf"
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
        "title": "22.05.2020 Revised advisory on the use of Hydroxychloroquine (HCQ) as prophylaxis for COVID-19 infection",
        "link": "https://www.mohfw.gov.in/pdf/RevisedadvisoryontheuseofhydroxychloroquineasprophylaxisforSARSCOVID19infection.pdf"
      },

      {
        "title": "12.05.2020 Poster for Felicitating our Nurses and Midwives on International Nurses day 2020",
        "link": "https://www.mohfw.gov.in/pdf/PosterInternationalNurseDay2020.pdf"
      }
    ]
  },
  "lastRefreshed": "2020-09-14T04:42:23.168Z",
  "lastOriginUpdate": "2020-09-14T02:30:00.000Z"
}
  

  
public   notice=this.api.data.notifications
  
  
}
