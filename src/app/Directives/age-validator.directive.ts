import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appAgeValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: AgeValidatorDirective, multi: true}]
})
export class AgeValidatorDirective implements Validator{

  constructor() { }

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
