import chance from 'chance';
import timeouts from '../constants/timeouts.js'
let generate = new chance;
const password = '12345678';

export class StartVisitPage {

    get preLoader(){
        return $('.start_preloader start_preloader--fade_out')
    }
    
    get emailAddressField() {
        return $('#temporaryEmail');
    }

    get firstNameField() {
        return $('#firstName');
    } 
    
    get lastNameField() {
        return $('#lastName');
    } 
    
    get passwordField() {
        return $('#password');
    } 

    get termsCheckbox() {
        return $('.checkbox');
    } 

    get startVisitButton() {
        return $('button*=Start my visit');
    } 

    fillEmailAddressField() {
        this.emailAddressField.waitForDisplayed(timeouts.long);
        return this.emailAddressField.addValue(generate.email({domain: 'rorytest.com'}));
    }
    
    fillFirstNameField() {
        this.firstNameField.waitForDisplayed(timeouts.long);
        return this.firstNameField.addValue(generate.first({ gender: "female" }));
    }
    
    fillLastNameField() {
        this.lastNameField.waitForDisplayed(timeouts.long);
        return this.lastNameField.addValue(generate.last());
    }    

    fillPasswordField() {
        this.passwordField.waitForDisplayed(timeouts.long);
        return this.passwordField.addValue(password);
    }
    
    acceptTerms() {
        this.termsCheckbox.waitForDisplayed(timeouts.long);
        return this.termsCheckbox.click();
    }    

    clickStartVisitButton() {
        this.startVisitButton.waitForDisplayed(timeouts.long);
        return this.startVisitButton.click();
    }
}
