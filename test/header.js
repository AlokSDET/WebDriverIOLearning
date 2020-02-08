describe('Interaction with elements in freshworks', function() {
    it('get header value',  function() {
        browser.url('https://www.freshworks.com/')
      const header = $('h1');
      let headerText = header.getText();
      console.log(headerText);

        
    })
})