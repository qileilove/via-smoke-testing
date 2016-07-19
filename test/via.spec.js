const webdriverio = require('webdriverio');
const sleep = require('sleep');
const  LoginPage = require('../pageobject/login.page.js');

const  OrgPage = require('../pageobject/org.page.js');
const  AdminPage = require('../pageobject/admin.page.js');
$ = require('cheerio');

// init WebdriverIO
describe('Organization page', function(){
    beforeEach(function() {
        // force page reload
        browser.url('about:blank');
        browser.url('/');
        // browser.waitForExist('#email');
        browser.windowHandleSize({width:1440,height:900});
    });

    it('login support', function() {
     LoginPage.email.setValue('aaa@livetext.com');
     LoginPage.password.setValue('aaa');
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
        sleep.sleep(1);
        expect(browser.getText('.organization-list .panel-group:nth-child(1) div a .organization-name:first-child')).to.eql('aasdawwww');
        OrgPage.loginOut();
        browser.waitForExist('#email');

    });

    it('login admin',function () {
        LoginPage.email.setValue('test@aszxc21312312d.com');
        LoginPage.password.setValue('R0ys1ngh4m');
        LoginPage.btnStart.waitForExist(3000);
        LoginPage.submit();
        AdminPage.hierarchy.waitForExist(3000);
        AdminPage.import.click();
        $('div.upload input#file').attr('style', 'display: block;');
        AdminPage.uploadUser("./file/user.csv");
        // AdminPage.hierarchy.click();
        // AdminPage.createNode.click();
        // AdminPage.setFoldeNname("testnode");
        // AdminPage.standard.click();
        // AdminPage.createStandardSet("test_set","this is a standard set");
        // AdminPage.template.click();
        // sleep.sleep(1);
        // AdminPage.createTemplate('testtemplate');
        
        // var notification = browser.element(' li.organizations a span');
        // notification.waitForExist(5000);
        // expect(browser.isExisting(' li.organizations a span')).to.be.ok;
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
