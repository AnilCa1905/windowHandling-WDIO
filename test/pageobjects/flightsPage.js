const Common = require('./common');

class Flightpage extends Common {
/**
 * constructor
 */
    constructor() {
        super();
        this.$fromDestination = () => $(`(//input[@class='css-h71vi3-SearchboxInput'])[1]`);
        this.$fromDestinationSelect = () => $(`//span[text()='Cochin International Airport']`);
        this.$toDestination = () => $(`(//div[@class="css-195ievx-inputContainer"])[2]`);
        this.$toDestinationSelect = () => $(`//span[text()='Calicut International Airport']`);
        this.$openCalender = () => $(`//button//div[@class='css-195ievx-inputContainer']`);
        this.$fromDate = () => $(`//span[text()='18']`);
        this.$toDate = () => $(`//span[text()='20']`);
        this.$travelerDropDown = () => $(`(//span[@class="Icon-module__root___DweoM Icon-module__root--size-large___gsdYP"])[2]`);
        this.$addAdult = () => $(`//button[@class='css-153jucu']`);
        this.$addChild = () => $(`(//button[@class='css-153jucu'])[2]`);
        this.$childDropDown = () => $(`//select[@name='children']`);
        this.$addChildAge = () => $(`//option[@value='5']`);
        this.$doneButton = () => $(`//button[@class='css-ya5gr9']`);
        this.$searchButton = () => $(`//button[@class='css-ya5gr9 wide']`);
        this.$resultPageDestination = () => $(`//div[text()='COK']`);
        this.$resultPageArrival = () => $(`//div[text()='CCJ']`);
    }
    /**
     * Function to select From and To destination
     */
    async selectFromDestinations() {
        await this.$fromDestination().setValue("Kochi");
        await this.$fromDestinationSelect().click();
    }
    /**
     * function to select To Destination
     */
    async selectToDestination() {
        await this.$toDestination().setValue("Calicut");
        await this.$toDestinationSelect().click();
    }
    /**
     * Function to select Date
     */
    async selectDates() {
        await this.$openCalender().click();
        await this.$fromDate().click();
        await this.$toDate().click();
    }
    /**
     * Function to select the No.of travelers
     */
    async selectTravelers() {
        await this.$travelerDropDown().click();
        await this.$addAdult().click();
        await this.$addChild().click();
        await this.$childDropDown().click();
        await this.$addChildAge().click();
        await this.$doneButton().click();
    }
    /**
     * Function to search Flight
     */
    async searchFlight() {
        await this.$searchButton().click();
    }
}

module.exports = { flightPage: new Flightpage }//export 