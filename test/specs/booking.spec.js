const { homePage } = require('../pageobjects/homePage');
const { flightPage } = require('../pageobjects/flightsPage');

xdescribe('End to End flow for booking.com', () => {
    it('User should be able to load the url successfully', async () => {
        await homePage.openUrl();
        await expect(browser).toHaveUrl(`https://www.booking.com/`);
    });
    it('user should be able to click on Car rentals', async () => {
        await homePage.carRental();
        expect(await homePage.$carRentalPageHeader().isDisplayed()).toBe(true, 'Expect car rental page header to be displayed');
    });
    it('user should be able to navigate to the next window while clicking searching car rentals in London', async () => {
        await homePage.carRentalsInLondon();
        expect(await homePage.verifyUrl("/cars/city/gb", "booking")).toBe(true);
        expect(await homePage.$carRentalsHeader().isDisplayed()).toBe(true, 'Expected header to be displayed');

    });
    it('user should be able to navigate to the next window while clicking searching car rentals in paris', async () => {
        await homePage.carRentalsInParis();
        expect(await homePage.verifyUrl("/cars/city/fr", "booking")).toBe(true);
        expect(await homePage.$carRentalsHeader().isDisplayed()).toBe(true, 'Expected header to be displayed');

    });
    it('user should be able to navigate to the next window while clicking searching car rentals in Madrid', async () => {
        await homePage.carRentalsInMadrid();
        expect(await homePage.verifyUrl("/cars/city/es", "booking")).toBe(true);
        expect(await homePage.$carRentalsHeader().isDisplayed()).toBe(true, 'Expected header to be displayed');

    });

});
