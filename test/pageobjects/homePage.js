const Common = require('./common');

class Homepage extends Common {
    /**
     * constructor
     */
    constructor() {
        super();

        this.$flight = () => $(`//a[@class='bui-tab__link']//span[@class='bui-tab__text']`);
        this.$carRentalButton = () => $(`(//span[@class='bui-tab__text'])[4]`);
        this.$carRentalPageHeader=() => $(`//span[@class="sb-searchbox__title-text"]`);
        this.$londonCarRental = () => $(`//a[@role="link"]`);
        this.$carRentalsHeader = () => $(`//span[@class="sb-searchbox__title-text"]`);
        this.$flightsButton = () => $(`//a[@data-decider-header="flights"]`);
        this.$flightPageHeader = () => $(`//h1[contains(text(),'Compare and book flights with ease')]`);
    }

    /**
     * Function to click on Flights
     */
    async ClickOnFlights() {
       await this.$flight().click();

    }
    async carRental() 
    {
        await this.$carRentalButton().click();
    }

    async carRentalsInLondon()
    {
   await this.$londonCarRental().click();
    }

    async flights()
    {
        await this.$flightsButton().click();
    }

    
}
module.exports = { homePage: new Homepage() }