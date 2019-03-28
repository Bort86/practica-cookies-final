import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

var letter_check = new RegExp("[^A-Z]", "i");

@Directive({
  selector: '[appLengthValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: LengthValidatorDirective, multi: true}]
})
export class LengthValidatorDirective implements Validator{

  constructor() { }

  validate(formFieldToValidate: AbstractControl): {[key: string] : any}{

    let validInput : boolean = false;

    if (formFieldToValidate.value!=undefined) {
      if (formFieldToValidate.value.length>1){
        if (!letter_check.test(formFieldToValidate.value)) {
          validInput = true;
        }
        else{
          return validInput?null:{'OnlyLetters': true};
        }
      }
    }
    return validInput?null:{'TooShort': true};
  }
}
