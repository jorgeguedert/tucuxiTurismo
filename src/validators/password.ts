import {AbstractControl} from '@angular/forms';
export class PasswordValidation {

    static MatchPassword(AC: AbstractControl) {
       let password = AC.get('senha').value; // to get value in input tag
       let confirmPassword = AC.get('confirmSenha').value; // to get value in input tag
        if(password != confirmPassword) {
            console.log('false');
            AC.get('confirmSenha').setErrors( {MatchPassword: true} )
        } else {
            console.log('true');
            return null
        }
    }
}