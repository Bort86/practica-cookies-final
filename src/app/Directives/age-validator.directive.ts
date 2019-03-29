import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appAgeValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: AgeValidatorDirective, multi: true}]
})
export class AgeValidatorDirective implements Validator{

  constructor() { }

  /*
    @name= validate
    @authors=Marc Codina & Pablo Rodriguez
    @version= 2.0
    @description= directive that will validate 
    if the introduced number is a correct age
    @date= 22/03/2019
    @params = formFieldToValidate (fields from a form)
    @ returns = null if true, a dictionary with the help message if wrong
  */
  validate(formFieldToValidate: AbstractControl): {[key: string] : any}{

    let validInput : boolean = false;

    if (formFieldToValidate.value!=undefined && !isNaN(formFieldToValidate.value)){
      if (formFieldToValidate.value> 0 && formFieldToValidate.value<99){
        if (formFieldToValidate.value>=18){
          validInput = true;
        }
        else{
          return validInput?null:{'MinorDetected':true};
        }
      }
      else{
        return validInput?null:{'OutofRange':true}
      }
    }

    return validInput?null:{'IsNotNumber': true};
  }
}
