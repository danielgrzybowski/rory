import timeouts from '../constants/timeouts.js'

export class ProductPage {

    get productName() {
        return $('.start-title');
    }

    get price() {
        return $('.cost_header-price-new');
    }  

    get continueButton() {
        return $('button*=Continue');
    } 

    getProductName() {
        this.productName.waitForDisplayed(timeouts.extra_long);
        return this.productName.getText();
    }

    getPrice() {
        this.price.waitForDisplayed(timeouts.long);
        return this.price.getText();
    } 

    clickContinueButton() {
        this.continueButton.waitForDisplayed(timeouts.long);
        return this.continueButton.click();
    }
}
