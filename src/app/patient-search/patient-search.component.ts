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

  ngOnInit() {

    this.generateRandomPatients();

    //Pagination and Filter properties' initialization
    this.itemsPerPage = 10;
    this.currentPage = 1;
    this.totalItems = this.patients.length;


    //this.ageFilter = 18;
    this.patientFiltered = this.patients;
  }

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

  filter():void{

  }

}
