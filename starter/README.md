## Prerequisites
-Node.js installation
-Protractor -npm install -g protractor
-Installing WebDriver -webdriver-manager start
-In your config file, set seleniumAddress to the address of the running server. This defaults to http://localhost:4444/wd/hub.
-Jasmine test framework for its testing interface

## Description
- run tests: `protractor conf.js`
-Need to run tests using command prompt by giving command 'protractor conf.js'

## Explanation
•	I have installed all the prerequistes for this validation through protractor.
•	created spec.js and conf.js files
•	added information about spec.js and selenium adddress in the conf.js file
•	wrote all the commands in the spec.js file
•	considered Test suite name as 'Alfresco ADF automation QA exercise' in Describe block
•	considered testcase name as 'Get into QA Excercise' in It block.
•	To avoid the error 'Error: Timeout - Async callback was not invoked within timeout specified by jasmine.DEFAULT_TIMEOUT_INTERVAL.' used jasmine.DEFAULT_TIMEOUT_INTERVAL
