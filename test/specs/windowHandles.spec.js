describe('Handling Multiple Windows switching to child window and then switching to parent window back',()=> {
    it('should make switching from parent to child and child to parent window', async() => {    
    browser.url('https://www.booking.com/')
    await browser.maximizeWindow();
    var parentWindow = await browser.getWindowHandle()
    await $(`(//span[@class='bui-tab__text'])[4]`).click();
    await $(`//a[@role="link"]`).click();
    await browser.pause(5000);
    await $(`//a[@role="link"]`).click();
    await browser.pause(5000)
    var ID = await browser.getWindowHandles()
    for(var i = 0; i< ID.length; i++){
        if( ID[i]!= parentWindow)
        {
            await browser.switchToWindow(ID[i]);
            await browser.closeWindow();
        }
    }
    await browser.pause(5000)
    await browser.switchToWindow(parentWindow)
    await browser.pause(5000)
});
});