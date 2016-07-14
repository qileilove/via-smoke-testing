const webdriverio = require('webdriverio');
const  LoginPage = require('../pageobject/login.page.js')

const  OrgPage = require('../pageobject/org.page.js')

// init WebdriverIO
describe('Organization page', function(){
    beforeEach(function() {
        // force page reload
        browser.url('about:blank');
        browser.url('/');
        // browser.waitForExist('#email');
        browser.windowHandleSize({width:1440,height:900});
    });

    it('list repositiories', function() {
     LoginPage.email.setValue('support@livetext.com');
     LoginPage.password.setValue('r0ys1ngh4m');
     LoginPage.btnStart.waitForExist();
     LoginPage.submit();
     var notification = browser.element(' li.organizations a span');
     notification.waitForExist(5000);
    expect(browser.isExisting(' li.organizations a span')).to.be.ok;

    });

    it('create org', function() {
      browser.url('/website-admin#/website-admin/organizations');
        OrgPage.orgButton.click();
        OrgPage.createOrg();
        expect(browser.isExisting(' a.create.btn.primary-button.ng-scope')).to.be.ok;
        OrgPage.orgName.setValue('aasdawwww');
        OrgPage.adminEmail.setValue('test@aszxc21312312d.com');
        OrgPage.password.setValue('R0ys1ngh4m');
        OrgPage.repassword.setValue('R0ys1ngh4m');
        OrgPage.saveOrg();
        expect(browser.getText('.organization-list .panel-group:nth-child(1) div a .organization-name:first-child')).toEqual('aasdawwww');

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
