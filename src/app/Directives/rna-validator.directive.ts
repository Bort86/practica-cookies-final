import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

var rna_code = new RegExp("[^ACGU]", "i");

@Directive({
  selector: '[RnaValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: RnaValidatorDirective, multi: true}]
})
export class RnaValidatorDirective implements Validator {

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

        if (rna_code.test(formFieldToValidate.value)){
          validInput = false;
          return validInput?null:{'IsNotCorrect': true}
        }

    }

    return validInput?null:{'IsNotCorrect': true};
  }

}
