/*
  @name= Controller for patient form
  @authors=Marc Codina & Pablo Rodriguez
  @version= 1.0
  @description= this controller will bind values to the patient-form class, validate
  every input requirement and fill the select options of patient rol
  @date= 25/02/2019
*/

import { Component, OnInit } from '@angular/core';

//Model
import {Patient} from '../model/patient';
import {PatientRol} from '../model/patient-rol';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit {

  //properties
  patient: Patient;
  patientRols : PatientRol[]=[];

  constructor() { }

  ngOnInit() {

    let patientRolAuxs: string [] = ["healthy", "sick", "urgent" ];

    for (let i:number = 0; i < patientRolAuxs.length; i++){
      let patientRolaux = new PatientRol(i, patientRolAuxs[i]);
      this.patientRols.push(patientRolaux);
    }


    this.patient = new Patient();
  }

  patientIntro(): void {
    console.log(this.patient);

  }

}
