import { Config } from 'protractor';
import * as reporter from 'cucumber-html-reporter';

export let config: Config = {
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    specs: ['../features/*.feature'],
    capabilities: {
      browserName: 'chrome'
    },
    cucumberOpts: {
        // require step definitions
        format: 'json:./cucumberreport.json',
        require: [
          './stepDefinitions/*.js' // accepts a glob
        ],
        // tags: "@calculatortesting",
        onComplete: ()  => {
          var options = {
            theme: 'bootstrap',
            jsonFile: './cucumberreport.json',
            output: './test/cucumber_report.html',
            reportSuiteAsScenarios: true,
            scenarioTimestamp: true,
            launchReport: true,
            metadata: {
                "App Version":"0.3.2",
                "Test Environment": "STAGING",
                "Browser": "Chrome  83.0.4103.97",
                "Platform": "Windows 10 Pro",
                "Parallel": "Scenarios",
                "Executed": "Remote"
            }
        };
        reporter.generate(options);
        }
    }
  }