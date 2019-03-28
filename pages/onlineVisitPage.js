import timeouts from '../constants/timeouts.js'

export class OnlineVisitPage {
    
    get howItWorksButton() {
        return $('button*=Here\'s how it works');
    }

    get whyRoryButton() {
        return $('button*=Why Rory?');
    } 
    
    get continueVisitButton() {
        return $('button*=Continue my visit');
    } 

    clickhowItWorksButton() {
        this.howItWorksButton.waitForDisplayed(timeouts.long);
        return this.howItWorksButton.click();
    }
    
    clickwhyRoryButton() {
        this.whyRoryButton.waitForDisplayed(timeouts.long);
        return this.whyRoryButton.click();
    }
    
    clickContinueVisitButton() {
        this.continueVisitButton.waitForDisplayed(timeouts.long);
        return this.continueVisitButton.click();
    }    
}
