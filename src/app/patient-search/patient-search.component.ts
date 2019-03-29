import { Component, OnInit } from '@angular/core';

// importing models
import {Patient} from '../model/patient';
import {PatientRol} from '../model/patient-rol';

import {PatientService} from '../services/patient.service';

@Component({
  selector: 'app-patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.css']
})
export class PatientSearchComponent implements OnInit {

  // Attributes
  patients : Patient []=[];
  patientFiltered: Patient []=[];
  //Pagination properties
  itemsPerPage: number;
  currentPage: number;
  totalItems: number;

  //Filter properties
  nameFilter: string;
  surnameFilter: string;
  ageFilter: number;

  constructor(private patientService: PatientService) { }

  /*
    @name= ngOnInit()
    @authors=Marc Codina & Pablo Rodriguez
    @version= 2.0
    @description= calls for method to generate random patients, sets Attributes
    for pagination and filter
    @date= 22/03/2019
    @params =
    @ returns =
  */
  ngOnInit() {

    this.generateRandomPatients();

    //Pagination and Filter properties' initialization
    this.itemsPerPage = 10;
    this.currentPage = 1;
    this.totalItems = this.patients.length;


    this.ageFilter = 18;
    this.patientFiltered = this.patients;
  }

  /*
    @name= generateRandomPatients()
    @authors=Marc Codina & Pablo Rodriguez
    @version= 2.0
    @description= generates 100 random patients with name, surname, rol and age
    @date= 22/03/2019
    @params =
    @ returns =
  */
  generateRandomPatients(){
    let randomName: string;
    let randomAge: number;
    let randomRol: PatientRol;

    for (let i = 0; i < 100; i++){
      randomAge = Math.floor(Math.random()*99);

      if (i%5==0){randomName = "Pablo";}
      else {randomName="Tipo "+i;}

      randomRol= new PatientRol(i, "sick " + i);

      let patient = new Patient(randomName,"De incógnito" + i, randomAge);
      patient.setRol(randomRol);
      this.patients.push(patient);
    }
  }

  /*
    @name= filter()
    @authors=Marc Codina & Pablo Rodriguez
    @version= 2.0
    @description= filters patients with callback function by name, surname and age
    @date= 22/03/2019
    @params =
    @ returns = 3 boolean flags, so the view can confirm wheter to push the patient
    it's checking inside the for as a filtered or a wrong one
  */
  filter():void{

  this.patientFiltered = this.patients.filter(
    patient => {

      let nameValid = false;
      let surnameValid = false;
      let ageValid = false;

      ageValid = patient.getAge() <= this.ageFilter;

      if(this.nameFilter && this.nameFilter !="") {
        nameValid = patient.getName().toLowerCase().indexOf(this.nameFilter.toLowerCase())!=-1;

      } else {
        nameValid=true;
      }

      if(this.surnameFilter && this.surnameFilter !="") {
        surnameValid = patient.getSurname().toLowerCase().indexOf(this.surnameFilter.toLowerCase())!=-1;
      } else {
        surnameValid=true;
      }
      return (nameValid && surnameValid && ageValid)
      }
    );
  }

}
