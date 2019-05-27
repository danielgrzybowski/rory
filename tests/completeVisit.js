import { StartVisitPage } from '../pages/startVisitPage.js';
import { OnlineVisitPage } from '../pages/onlineVisitPage.js';
import { QuestionnairePage } from '../pages/questionnairePage.js';
import { ProductPage } from '../pages/productPage.js';
import { PaymentPage } from '../pages/paymentPage';
import timeouts from '../constants/timeouts.js';

const support = require('../support/CompleteVisitSupport');
const startVisitPage = new StartVisitPage();
const onlineVisitPage = new OnlineVisitPage();
const questionnairePage = new QuestionnairePage();
const productPage = new ProductPage();
const paymentPage = new PaymentPage();
const birthdate = '03/01/1979';
const zipcode = '11213';

describe('Complete visit with no additional conditions', () => {
    it('Should send the customer to the next page after she fills all the required fields', () => {
        browser.url('');
        startVisitPage.preLoader.isDisplayed(false);
        browser.pause(timeouts.long);
        
        startVisitPage.fillEmailAddressField();
        startVisitPage.fillFirstNameField();
        startVisitPage.fillLastNameField();
        startVisitPage.fillPasswordField();
        startVisitPage.acceptTerms();
        startVisitPage.clickStartVisitButton(); 
        
        browser.waitUntil(() => {
            return browser.getUrl() === support.generateUrl(10);
        }, 10000);
        
        expect(browser.getUrl()).to.equal(support.generateUrl(10))
    });

    it('After filling the questionnaire with no additional conditions it should redirect the customer to the product page', () => {
        onlineVisitPage.clickContinueVisitButton();

        browser.waitUntil(() => {
            return browser.getUrl() === support.generateUrl(15);
        }, timeouts.long);
   
        questionnairePage.pickFemaleOption();
        questionnairePage.fillDateOfBirthField(birthdate);
        questionnairePage.fillZipCodeField(zipcode);
        questionnairePage.clickNextButton();

        browser.waitUntil(() => {
            return browser.getUrl() === support.generateUrl(20);
        }, timeouts.long);

        questionnairePage.clickContinueButton();

        browser.waitUntil(() => {
            return browser.getUrl() === support.generateUrl(50);
        }, timeouts.long);

        questionnairePage.clickFirstOption();

        browser.waitUntil(() => {
            return browser.getUrl() === support.generateUrl(1000);
        }, timeouts.long);

        questionnairePage.clickSecondOption();

        browser.waitUntil(() => {
            return browser.getUrl() === support.generateUrl(6050);
        }, timeouts.extra_long);

        expect(browser.getUrl()).to.equal(support.generateUrl(6050))
    });

    it('It should offer personal lubricant for the $39 with 3-month plan', () => {
        questionnairePage.clickContinueOption();
        
        expect(productPage.getProductName()).to.equal('Personal Lubricant');
        expect(productPage.getPrice()).to.equal('$39');
    });

    it('Price on the payment page should equal to the price on the product page', () => {
        const price = productPage.getPrice();
        
        productPage.clickContinueButton(); 
        paymentPage.fillAddressField();
        paymentPage.fillCityField();
        paymentPage.fillStateField();
        paymentPage.fillZipCodeField();
        paymentPage.fillPhoneNumberField();
        
        expect(paymentPage.retrievePrice()).to.equal(price);
    });
});
