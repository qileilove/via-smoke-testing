var page = require('./page')
const webdriverio = require('webdriverio');

var LoginPage = Object.create(page, {
    /**
     * define elements
     */
    email: { get: function () { return browser.element('#email'); } },
    password: { get: function () { return browser.element('#password'); } },
    // btnStart: { get: function () { return browser.elements("#loginbutton"); } },
    btnStart: { get: function () { return browser.element('#loginbutton'); } },


    /**
     * define or overwrite page methods
     */

    //
    submit: { value: function() {
        this.btnStart.click();
    } }
});

module.exports = LoginPage
