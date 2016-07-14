const webdriverio = require('webdriverio');
const  LoginPage = require('../pageobject/search.page.js')


// init WebdriverIO
describe('Organization page', function(){
    beforeEach(function() {
        // force page reload
        browser.url('about:blank');
        browser.url('/');

    });

    it('list repositiories', function() {
     LoginPage.inputtext.setValue('foo');
     LoginPage.open();
    });


    // it('open project page', function() {
    //     brßßowser.click('.repo-list-item [href="/webdriverio/webdriverio"]');
    //     browser.waitForExist('.repository-content');
    //     expect(browser.getUrl()).toBe('https://github.com/webdriverio/webdriverio');
    //     expect(browser.getText('.files .content').slice(1, 6)).toEqual([
    //         '.github',
    //         'bin',
    //         'docs',
    //         'examples',
    //         'lib'
    //     ]);
    // });

});
