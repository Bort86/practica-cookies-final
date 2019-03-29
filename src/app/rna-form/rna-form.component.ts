/*
  @name= Controller for dna form
  @authors=Marc Codina & Pablo Rodriguez
  @version= 1.0
  @description= this controller will bind values to the protein-form class, format
  the entry date and date options, and initialize select options
  @date= 25/02/2019
*/

import { Component, OnInit } from '@angular/core';
import {INgxMyDpOptions, IMyDateModel} from 'ngx-mydatepicker';

//model
import {RnaForm} from '../model/rna-form';
import {Patient} from '../model/patient';
import {PatientRol} from '../model/patient-rol';

//Cookies
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-rna-form',
  templateUrl: './rna-form.component.html',
  styleUrls: ['./rna-form.component.css']
})
export class RnaFormComponent implements OnInit {
  cookieValue = 'UNKNOWN';

  //properties
  rna : RnaForm;
  patients : Patient[]=[];
  today : Date = new Date();
  myOptions: INgxMyDpOptions = {

        dateFormat: 'dd.mm.yyyy',
        disableSince: {year: this.today.getFullYear(), month: this.today.getMonth()+1, day: this.today.getDate() +1}
    };

  constructor(private cookieService : CookieService) { }

  /*
    @name= ngOnInit
    @authors=Marc Codina & Pablo Rodriguez
    @version= 2.0
    @description= initialize the app controller, onloads rols in selector and
    checks for cookies
    @date= 22/03/2019
    @params =
    @ returns =
  */
  ngOnInit() {
    this.rna = new RnaForm();

    //then we fill the patients array for the select with new patients
    this.patients.push(new Patient ('Marc', 'Codina', 26, 'Calle Aquí, 3, BCN', new PatientRol(1,'sick')));
    this.patients.push(new Patient ('Pablo', 'Rodriguez', 33, 'Calle Allí, 5, Guinardó', new PatientRol(2,'healthy')));
    this.patients.push(new Patient ('Marc', 'Rodriguez', 30, 'Calle Pacá, 9, Madrid', new PatientRol(3,'urgent')));

    //Looking for cookies
    if (this.cookieService.check('rnaForm')){
      let CookieObj : any = JSON.parse(this.cookieService.get('rnaForm'));
      //Filling Up
      this.rna.setId(CookieObj.id);
      this.rna.setSequence(CookieObj.sequence);
      this.rna.setEntryDate(CookieObj.entryDate);
      this.rna.setPatient(CookieObj.patient);
    }
  }

  /*
    @name= rnaIntro()
    @authors=Marc Codina & Pablo Rodriguez
    @version= 2.0
    @description= deletes previous cookies and log in console a new one
    @date= 22/03/2019
    @params =
    @ returns =
  */
  rnaIntro() : void{
    this.cookieService.delete("rnaForm");
    this.cookieService.set('rnaForm', JSON.stringify(this.rna))
    this.cookieValue = this.cookieService.get('rnaForm');
    console.log(this.cookieValue);
    //console.log(this.rna)
  }

}
