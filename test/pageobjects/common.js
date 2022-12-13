module.exports = class Common {
    /**
     * constructor
     */
    constructor() {
        //       this.$homePageHeader = () => $(`//span[text()='Find your next stay']`);
    }

    async openUrl() {
        await browser.url(`https://www.booking.com/`);
        await browser.maximizeWindow();
        //     await this.$homePageHeader().waitForDisplayed(10000);
    }
    async verifyUrl(url, baseUrl) {
        try {
            await browser.switchWindow(url);
            await browser.closeWindow();
            await browser.switchWindow(baseUrl);
            return true;
        }
        catch (e) {
            console.log(e)
            return false;
        }

    }
}