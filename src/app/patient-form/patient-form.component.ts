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

//Cookies
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit {
  //declaring the cookie that we'll log in console later
  cookieValue : any;

  //properties
  patient: Patient;
  patientRols : PatientRol[]=[];

  constructor(private cookieService: CookieService) { }

  /*
    @name= ngOnInit
    @authors=Marc Codina & Pablo Rodriguez
    @version= 2.0
    @description= initialize the app controller, onloads patients rol in selector and
    checks for cookies
    @date= 22/03/2019
    @params =
    @ returns =
  */
  ngOnInit() {

    let patientRolAuxs: string [] = ["healthy", "sick", "urgent" ];

    for (let i:number = 0; i < patientRolAuxs.length; i++){
      let patientRolaux = new PatientRol(i, patientRolAuxs[i]);
      this.patientRols.push(patientRolaux);
    }

    this.patient = new Patient();

    //Looking for Cookies
    if (this.cookieService.check('patientForm')){
      let CookieObj : any = JSON.parse(this.cookieService.get('patientForm'));
      Object.assign(this.patient, CookieObj);
      //Setting up the id
      this.patient.setName(CookieObj.name);
      this.patient.setSurname(CookieObj.surname);
      this.patient.setAge(CookieObj.age);
      this.patient.setAddress(CookieObj.address);
      this.patient.setRol(CookieObj.rol);
    }

  }

  /*
    @name= patientIntro()
    @authors=Marc Codina & Pablo Rodriguez
    @version= 2.0
    @description= deletes previous cookies and log in console a new one
    @date= 22/03/2019
    @params =
    @ returns =
  */
  patientIntro(): void {
    this.cookieService.delete("patientForm");
    this.cookieService.set('patientForm', JSON.stringify(this.patient))
    this.cookieValue = this.cookieService.get('patientForm');
    console.log(this.cookieValue);
    //console.log(this.patient);

  }

}
