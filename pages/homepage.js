class HomePage {
    get pageHeader() {
        return $('h1');//single elements
        // $$ : multiple elements
    }
    get subHeader() {return $('div.banner-text-content>p.sub-text');}// single quote = css
    get supportLink() {return $("//a[text()='Support']")}// double quotes = xpath
}

module.exports = new HomePage();