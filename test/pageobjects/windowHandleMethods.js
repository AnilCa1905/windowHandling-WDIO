const Common = require('./common');

class Windowhandlemethods extends Common {
    /**
     * constructor
     */
    constructor()
     {
        super();
     }

/**
 * 
 * @returns 
 */
    async verifyWindowsAreClosed() {
        try{
        let parentWindow = await browser.getWindowHandle();
        let ID = await browser.getWindowHandles()
        for(let i = 0; i< ID.length; i++){
            if( ID[i]!= parentWindow)
            {
                await browser.switchToWindow(ID[i]);
                await browser.closeWindow();
            }
        }
        await browser.pause(3000)
        await browser.switchToWindow(parentWindow)
        await browser.pause(3000)

        return true;

    }
    catch (e)
    {
        console.log(e);
        return false;
    }

}
}
module.exports = { windowHandleMethods: new Windowhandlemethods() }