import timeouts from '../constants/timeouts.js'
const selector = '.form_field-control';

export class PaymentPage {
    
    get addressField() {
        return $(selector);
    } 

    get cityField() {
        return $$(selector)[2];
    }  

    get stateField() {
        return $$(selector)[3];
    }  

    get zipCodeField() {
        return $$(selector)[4];
    }  

    get phoneNumberField() {
        return $$(selector)[5];
    }  

    get costPrice() {
        return $('.cost-price');
    }  

    fillAddressField() {
        this.addressField.waitForDisplayed(timeouts.long);
        return this.addressField.addValue('8 N. Brown Lane  Forest Hills');
    }

    fillCityField() {
        this.cityField.waitForDisplayed(timeouts.long);
        return this.cityField.addValue('New York');
    } 

    fillStateField() {
        this.stateField.waitForDisplayed(timeouts.long);
        return this.stateField.addValue('New York');
    } 

    fillZipCodeField() {
        this.zipCodeField.waitForDisplayed(timeouts.long);
        return this.zipCodeField.addValue('11375');
    } 

    fillPhoneNumberField() {
        this.phoneNumberField.waitForDisplayed(timeouts.long);
        return this.phoneNumberField.addValue('1111111111');
    } 

    retrievePrice() {
        this.costPrice.waitForDisplayed(timeouts.long);
        return this.costPrice.getText();
    }
}
