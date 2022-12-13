const { windowHandleMethods } = require('../pageobjects/windowHandleMethods');


describe('Handling Multiple Windows switching to child window and then switching to parent window back',()=> {
    it('should make switching from parent to child and child to parent window', async() => {    
    browser.url('https://www.booking.com/')
    await browser.maximizeWindow();
    // var parentWindow = await browser.getWindowHandle()
    await $(`(//span[@class='bui-tab__text'])[4]`).click();
    await $(`//a[@role="link"]`).click();
    await browser.pause(5000);
    await $(`//a[@role="link"]`).click();
    await browser.pause(5000)
    await $(`(//h3[@class="bui-card__title"])[5]`).click();
    await browser.pause(5000)
   expect(await windowHandleMethods.verifyWindowsAreClosed()).toBe(true);
});
});