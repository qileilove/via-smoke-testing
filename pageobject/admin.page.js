var page = require('./page');
var sleep = require('sleep');



var AdminPage = Object.create(page, {
    /**
     * define elements
     */
    hierarchy: {
        get: function () {
            return browser.element('.hierarchy a span ');
        }
    },
    import: {
        get: function () {
            return browser.element('#import');
        }
    },
    // btnStart: { get: function () { return browser.elements("#loginbutton"); } },
    setting: {
        get: function () {
            return browser.element('.settings');
        }
    },

    createNode: {
        get: function () {
            return browser.element('.create-node');
        }
    },

    set_child_folder_name: {
        get: function () {
            return browser.element('.jstree-rename-input');
        }

    },
    /**
     * define or overwrite page methods
     */

    save_child_folder: {
         get: function () {
             return browser.element('.jstree-container-ul');
         }   

    },


    template: {
        get: function () {
            return browser.element('.hierarchy-tabs li[lt-activate-element="template"]');
        }

    },

    createTemplateButton: {
        get: function () {
            return browser.element('.create-template .primary-button');
        }

    },

    templateTitle: {
        get: function () {
            return browser.element('.template-title #title');
        }
        
    },

    nextTemplateButton: {
        get: function () {
            return browser.element('#create-template-modal .save-and-cancel-buttons a.submit');
        }

    },


    createTemplate: {
        value: function (templatename) {
            this.createTemplateButton.click();
            sleep.sleep(1);
            this.templateTitle.waitForExist(3000);
            this.templateTitle.setValue(templatename);
            sleep.sleep(1);
            this.nextTemplateButton.click();
        }

    },

    standard: {
        get: function () {
            return browser.element('.hierarchy-tabs li[lt-activate-element="statement"]');
        }

    },




    createStandardSetButton: {
        get: function () {
            return browser.element('.create-statement .primary-button');
        }

    },

    standardSetTitle: {
        get: function () {
            return browser.element('#set-title');
        }

    },

    standardSetAbbreviation: {
        get: function () {
            return browser.element('#set-abbreviation');
        }

    },
    saveStandardSetButton: {
        get: function () {
            return browser.element('.create-set-form a.submit');
        }
    },

    createStandardSet: {
        value: function (setTitle,setAbbreviation) {
            this.createStandardSetButton.click();
            this.standardSetTitle.setValue(setTitle);
            this.standardSetAbbreviation.setValue(setAbbreviation);
            this.saveStandardSetButton.click();
        }
    },

    setFoldeNname: {
        value: function (nodename) {
            this.set_child_folder_name.click();
            this.set_child_folder_name.setValue(nodename);
            this.save_child_folder.click();
        }

    },

    import: {
        get: function () {
            return browser.element('.import a span');
        }
    },

    uploadButton: {
        get: function () {
            return browser.element(' div.upload label.btn.primary-button');
        }

    },

    importUser: {

        get: function () {
            return browser.element('div.upload input#file');
        }
    },

    uploadUser: {
        value: function (filepath) {
            sleep.sleep(1);
            this.importUser.chooseFile(filepath);
            sleep.sleep(1);
        }
    }

});

module.exports = AdminPage;
