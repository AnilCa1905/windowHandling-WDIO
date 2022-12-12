# windowHandling-WDIO
This folder includes the window handling in webdriverIO (Parameterised)
--------------------------------------------------------------------------------------------------------------

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
