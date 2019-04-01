import timeouts from '../constants/timeouts.js'

export class QuestionnairePage {
    
    get femaleOption() {
        return $$('.choice-item')[1];
    }

    get dateOfBirthField() {
        return $('#dateOfBirth');
    } 

    get zipCodeField() {
        return $('#zipcode');
    } 
    
    get nextButton() {
        return $('button*=Next');
    } 

    get continueButton() {
        return $('button*=Continue');
    } 

    get getFirstOption() {
        return $$('.flow-choice_list-link')[0];
    }

    get getSecondOption() {
        return $('button*=No, and my period has remained unchanged');
    }

    get getThirdOption() {
        return $$('.flow-choice_list-link')[2];
    }

    get continueOption() {
        return $('button*=Yes, continue with this option')
    }

    pickFemaleOption() {
        this.femaleOption.waitForDisplayed(timeouts.extra_long);
        return this.femaleOption.click();
    }
    
    fillDateOfBirthField(birthdate) {
        this.dateOfBirthField.waitForDisplayed(timeouts.long);
        return this.dateOfBirthField.addValue(birthdate);
    }

    fillZipCodeField(zipcode) {
        this.zipCodeField.waitForDisplayed(timeouts.long);
        return this.zipCodeField.addValue(zipcode);
    }
    
    clickNextButton() {
        this.nextButton.waitForDisplayed(timeouts.long);
        return this.nextButton.click();
    }    

    clickContinueButton() {
        this.continueButton.waitForDisplayed(timeouts.long);
        return this.continueButton.click();
    }   

    clickFirstOption() {
        this.getFirstOption.waitForEnabled(timeouts.long);
        return this.getFirstOption.click();
    }

    clickSecondOption() {
        this.getSecondOption.waitForEnabled(timeouts.long);
        return this.getSecondOption.click();
    }

    clickThirdOption() {
        this.getThirdOption.waitForEnabled(timeouts.long);
        return this.getThirdOption.click();
    }

    clickContinueOption() {
        this.continueOption.waitForDisplayed(timeouts.long);
        return this.continueOption.click();
    }
}
