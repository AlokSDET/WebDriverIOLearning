/*
describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('https://webdriver.io')
        const title = browser.getTitle()
        assert.strictEqual(title, 'WebdriverIO � Next-gen WebDriver test framework for Node.js')
        //setValue == sendkeys
        
    })
})
*/


describe('Interaction with elements', function() {
    it('enter value in field',  function() {
        browser.url('/')
        global.assert(browser.getTitle,'Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more');
        const search = $('#twotabsearchtextbox')
        browser.maximizeWindow();
        search.setValue("Apple mac");
        browser.pause(5000);// similar to thread.sleep
        //setValue == sendkeys
        
    })

    it('get text from a field',  function() {
        browser.url('/')
        const label = $('span.a-size-base.a-color-base');
        let text = label.getText();
        console.log(text);
        
    })

    it('click on a  field',  function() {
        browser.url('/')
        const search = $('#twotabsearchtextbox')
        search.setValue("laptop");
        const icon = $('input.nav-input');
         icon.click();
    })
})