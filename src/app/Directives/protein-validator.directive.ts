import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

var protein_code = new RegExp("[^FLSYCWPHQRIMTNKVADEG]", "i");

@Directive({
  selector: '[ProteinValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: ProteinValidatorDirective, multi: true}]
})
export class ProteinValidatorDirective implements Validator{

  constructor() { }

  /*
    @name= validate
    @authors=Marc Codina & Pablo Rodriguez
    @version= 2.0
    @description= directive that will validate wheter the introduced field has
    right values (dna code, rna code, protein code, etc)
    @date= 22/03/2019
    @params = formFieldToValidate (fields from a form)
    @ returns = null if true, a dictionary with the help message if wrong
  */
  validate(formFieldToValidate: AbstractControl): {[key: string] : any}{

    let validInput : boolean = true;

    if (formFieldToValidate.value!=undefined){

        if (protein_code.test(formFieldToValidate.value)){
          validInput = false;
          return validInput?null:{'IsNotCorrect': true}
        }

    }

    return validInput?null:{'IsNotCorrect': true};
  }

}
