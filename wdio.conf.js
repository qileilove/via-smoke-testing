var chai = require('chai');
exports.config = {

    /**
     * server configurations
     */
     services: ['selenium-standalone'],
    host: '0.0.0.0',
    port: 4444,

    /**
     * specify test files
     */
    specs: [
        'test/*.spec.js'
    ],
    viewpoint:{
        width:1440,
        height:900
    },
    /**
     * capabilities
     */
    capabilities: [{
        browserName: 'chrome'
    }],
    screenshotPath: 'errorShots',

    /**
     * test configurations
     */
    // logLevel: 'silent',
    coloredLogs: true,
    baseUrl: 'http://deveportfolio.com/',
    waitforTimeout: 10000,
    framework: 'mocha',

    reporters: ['dot'],
    reporterOptions: {
        outputDir: '/allure-results'
    },
    plugins: {
             webdrivercss: {
                 screenshotRoot: 'visual/reference',
                 failedComparisonsRoot: 'visual/failed',
                 misMatchTolerance: 0.05,
                 screenWidth: [1024]
             }
         },
    mochaOpts: {
        ui: 'bdd',
    },

    onPrepare: function() {
        // return new Promise((resolve, reject) => {
        //     selenium.start((err, process) => {
        //         if(err) {
        //             return reject(err);
        //         }
        //         seleniumServer = process;
        //         resolve(process);
        //     })
        // });
    },
    onComplete: function() {
        // seleniumServer.kill();
    },
    //

    before: function(capabilities, specs) {
    global.expect = chai.expect;
    chai.Should();
    }
        // =====
        // Hooks
        // =====
        // WedriverIO provides several hooks you can use to interfere with the test process in order to enhance
        // it and to build services around it. You can either apply a single function or an array of
        // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
        // resolved to continue.
        //
        // Gets executed once before all workers get launched.
        // onPrepare: function (config, capabilities) {
        // },
        //
        // Gets executed before test execution begins. At this point you can access all global
        // variables, such as `browser`. It is the perfect place to define custom commands.
        // before: function (capabilities, specs) {
        // },
        //
        // Hook that gets executed before the suite starts
        // beforeSuite: function (suite) {
        // },
        //
        // Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
        // beforeEach in Mocha)
        // beforeHook: function () {
        // },
        //
        // Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
        // afterEach in Mocha)
        // afterHook: function () {
        // },
        //
        // Function to be executed before a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
        // beforeTest: function (test) {
        // },
        //
        // Runs before a WebdriverIO command gets executed.
        // beforeCommand: function (commandName, args) {
        // },
        //
        // Runs after a WebdriverIO command gets executed
        // afterCommand: function (commandName, args, result, error) {
        // },
        //
        // Function to be executed after a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
        // afterTest: function (test) {
        // },
        //
        // Hook that gets executed after the suite has ended
        // afterSuite: function (suite) {
        // },
        //
        // Gets executed after all tests are done. You still have access to all global variables from
        // the test.
        // after: function (capabilities, specs) {
        // },
        //
        // Gets executed after all workers got shut down and the process is about to exit. It is not
        // possible to defer the end of the process using a promise.
        // onComplete: function(exitCode) {
        // }
};
