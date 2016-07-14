var page = require('./page')

var OrgPage = Object.create(page, {
    /**
     * define elements
     */
    orgButton: {
        get: function () {
            return browser.element('li.organizations a span');
        }
    },
    createOrgButton: {
        get: function () {
            return browser.element('a.create');
        }
    },

    orgName: {
        get: function () {
            return browser.element('.organization-editor .organization-name');
        }
    },


    adminEmail: {
        get: function () {
            return browser.element('.organization-editor .organization-email');
        }
    },


    password: {
        get: function () {
            return browser.element('.organization-editor .organization-password');
        }
    },

    repassword: {
        get: function () {
            return browser.element('.organization-editor .organization-password[name="confirm_password"]');
        }
    },


    savebutton: {
        get: function () {
            return browser.element('.save-and-cancel-buttons a.btn-success');
        }
    },
    /**
     * define or overwrite page methods
     */
    open: {
        value: function () {

            this.btnStart.click();
        }
    },
    
    createOrg: {
        value: function () {
            this.createOrgButton.waitForExist(5000);
            this.createOrgButton.click();
        }
        
    },

    saveOrg: {
        value: function () {
            this.savebutton.waitForExist(5000);
            this.savebutton.click();
        }

    }

});

module.exports = OrgPage
