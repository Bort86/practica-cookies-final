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
import {ProteinForm} from '../model/protein-form';
import {Patient} from '../model/patient';
import {PatientRol} from '../model/patient-rol';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-protein-form',
  templateUrl: './protein-form.component.html',
  styleUrls: ['./protein-form.component.css']
})
export class ProteinFormComponent implements OnInit {
  cookieValue = 'UNKNOWN'

  //properties
  protein : ProteinForm;
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
    @description= initialize the app controller, onloads patients in selector and
    checks for cookies
    @date= 22/03/2019
    @params =
    @ returns =
  */
  ngOnInit() {
    this.protein = new ProteinForm();

    //then we fill the patients array for the select with new patients
    this.patients.push(new Patient ('Marc', 'Codina', 26, 'Calle Aquí, 3, BCN', new PatientRol(1,'sick')));
    this.patients.push(new Patient ('Pablo', 'Rodriguez', 33, 'Calle Allí, 5, Guinardó', new PatientRol(2,'healthy')));
    this.patients.push(new Patient ('Marc', 'Rodriguez', 30, 'Calle Pacá, 9, Madrid', new PatientRol(3,'urgent')));


    //Looking for Cookies
    if (this.cookieService.check('proteinForm')){
      let CookieObj : any = JSON.parse(this.cookieService.get('proteinForm'));
      this.protein.setId(CookieObj.id);
      this.protein.setSequence(CookieObj.sequence);
      this.protein.setEntryDate(CookieObj.entryDate);
      this.protein.setPatient(CookieObj.patient);
    }

  }

  /*
    @name= proteinIntro()
    @authors=Marc Codina & Pablo Rodriguez
    @version= 2.0
    @description= deletes previous cookies and log in console a new one
    @date= 22/03/2019
    @params =
    @ returns =
  */
  proteinIntro() : void{
    this.cookieService.delete("proteinForm");
    this.cookieService.set('proteinForm', JSON.stringify(this.protein))
    this.cookieValue = this.cookieService.get('proteinForm');
    console.log(this.cookieValue);
    //console.log(this.protein)
  }

}
