# windowHandling-WDIO
This folder includes the window handling in webdriverIO (Parameterised) and Hnadling windows by using index number of the child windows
_________________________________________________________________________________________________________________________________________

Method 1:
_________

Opening childwindow from parent window - giving control to childwindow - expect the childwindow url - closing child window - Continue actions in the parent window.

CodeIncludes:

   --->  expect (await homePage.verifyUrl("/cars/city/gb","booking")).toBe(true);


  ----->  async verifyUrl(url,baseUrl) {
        try
        {
            await browser.switchWindow(url);
            await browser.closeWindow();
            await browser.switchWindow(baseUrl);
            return true
        } 
        catch (e) 
        {
            console.log(e)
            return false;
        }

    }
    
    
    Method 2:
    _________
    
    The Window handles should move from the parent window to all the child window by using index and close all the child window and the handle should move back to the parentwindow.
    This method is applicable when we have dynamic urls generated to the child windows
    
    CodeIncludes:
    
    describe('Handling Multiple Windows switching to child window and then switching to parent window back',()=> {
   
    it('should make switching from parent to child and child to parent window', async() => {    
    browser.url('https://www.booking.com/')
    await browser.maximizeWindow();
    
    var parentWindow = await browser.getWindowHandle()
    await $(`(//span[@class='bui-tab__text'])[4]`).click();
    await $(`//a[@role="link"]`).click();
    await $(`//a[@role="link"]`).click();
    
    var ID = await browser.getWindowHandles()
       for(var i = 0; i< ID.length; i++)
        {
             if( ID[i]!= parentWindow)
                {
                   await browser.switchToWindow(ID[i]);
                   await browser.closeWindow();
                }
       }
    await browser.switchToWindow(parentWindow)
});
});
    
    
