import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appIdValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: IdValidatorDirective, multi: true}]
})
export class IdValidatorDirective implements Validator {

  constructor() { }

  /*
    @name= validate
    @authors=Marc Codina & Pablo Rodriguez
    @version= 2.0
    @description= directive that will if an id is not empty and numeric
    @date= 22/03/2019
    @params = formFieldToValidate (fields from a form)
    @ returns = null if true, a dictionary with the help message if wrong
  */
  validate(formFieldToValidate: AbstractControl): {[key: string] : any}{

    let validInput : boolean = false;

    if (formFieldToValidate.value!=undefined && !isNaN(formFieldToValidate.value)
        && formFieldToValidate.value >=1){
      validInput = true;
    }

    return validInput?null:{'IsNotNumber': true};
  }

}
