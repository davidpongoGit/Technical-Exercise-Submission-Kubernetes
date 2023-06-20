# Technical-Exercise-Submission-Kubernetes
Demonstration of my skills and understanding in manual and automated testing, test case preparation, and API testing. This is for the Software Engineer in Test at UltimateQA. 

<h2>Table of Contents</h2>

[Functional Requirements](#functional)<br/>
[Test Plan](#plan)<br/> 
[Test Cases/Scenarios](#scenarios)<br/> 
[Code Quality](#quality)<br/> 
[API Testing](#api)<br/> 
[Test Reporting](#reports)<br/> 
[How to use this repo](#howto)<br/> 


<a name="functional"/>
<h1>Functional Requirements</h1>

- Web application loads correctly.
- Ensure graphics and logos are visible.
- The user is not logged in by default upon opening the web application.
- Entering an incorrect email or password will display an error message.
- Existing user account is able to log in successfully.
- New user account registration form requires all fields to be completed.
- New user account email field has validation for email type.
- Entering all correct signup details allows users to sign up to create a new account.
- New user is able to add contact details by clicking on Add Contact Details. The table should be empty beforehand. 
- New contact details have validation in force for birthday and postcode.
- Ensure input fields have placeholders.
- Perform API testing using the 'Contacts List Documentation'.
  
<a name="plan"/>
<h1>Test Plan</h1>

We have several requirements covered by automation testing, manual testing, and API testing with the report showing results for each. I have done a small exercise to decide which tests will be automated and which will be covered only by manual testing. Each requirement has been refined and converted into cucumber test cases (TC).

I have decided to use Cypress as my main automation tool with JavaScript and Cucumber to define my testable items in the form of feature files. The feature files will then be either tested manually or via automation. 

Technical specifications:
- IDE used IntelliJ Ultimate
- Node version 18.16.
- Cypress version 12.14.
- Cucumber framework applied by Cucumber-Preprocessor from NPMJS library.
- API Cypress Plugin used for Postman-like integration with Cypress for automation purposes.
- Postman was used for Manual API testing done prior to automating the collection.
- Report used is Mochaweseome HTML Report
  
<a name="scenarios"/>
<h1>Test Cases/Scenarios</h1>

Manual Testing Coverage:

- TC01: Website loads correctly without any issues and all elements are present.
- TC02: When entering the website, you should not be logged in by default and should have the options visible to either log in or sign up.
- TC03: Ensure all input fields on the login path and sign-up path have placeholders.

The manual tests will pass when ran as e2e automation because there is no test step implementation. 

Automated Testing Coverage:
- TC04: Entering an incorrect email or password will display an error message.
- TC05: Existing user account is able to log in successfully.
- TC06: New user account registration form requires all fields to be completed, otherwise an error message is displayed.
- TC07: New user account email field has validation for email type. Without entering @ the sign-up should not work.
- TC08: Entering all correct details on the signup page allows users to sign up to create a new account.
- TC09: New user is able to add contact details by clicking on Add Contact Details. The table should be empty beforehand. 
- TC10: New contact details have validation in force for email and postcode.

API Automated Test Coverage:
- TC11: Ensure that we can add, update, get and delete contacts using API.
  
<a name="quality"/>
<h1>Code Quality</h1>

For all my file naming I have used camel case  to separate the words in a phrase by making the first letter of each word capitalized and not using spaces. I have structured my directory to be easily readable. 

I have utilized object oriented page-object modeling method to create a keyword-driven automation framework for each page, method and action used in this example. This creates a clean, efficient and maintainable codebase with the least amount of technical debt. 

<a name="api"/>
<h1>API Testing</h1>

I have used Postman to manually create my API calls. Once I got them to work, I installed and configured the Cypress-API plugin to start automating this API test collection as part of the automation testing strategy. In the end, the API tests are now automated.
When you run the tests, API calls will throw 403 status code because my Bearer token would have expired. To get it to work, simply login, then inspect cookies and copy the token value. Replace the copied token value 
with the string inside fixtures/apiToken.json and the  run the command "npm run api". The API tests will work.

<a name="reports"/>
<h1>Test Reporting</h1>

I have installed and configured the Mochaweseome Test Reporting facility to create a readable report on the automated tests. For manual testing, I would normally use Jira to create and monitor bug tickets but in this example, I don't have access to Jira. 

<a name="howto"/>
<h1>How to use this repo:</h1>

- Simple clone and open this Git repository on your own local PC/Laptop and open in any modern IDE. 
- Ensure you have Node installed. 
- Open the terminal within your IDE and run the following commands:
- 'npm install'
- To run all tests, wait for the previous command to finish and then run 'npm run e2e' 
- To only run the API tests, run this command 'npm run api'
- To open the Cypress Automation Tool and select your test to run automatically, run this command 'npm run cypress-ui'

View my e2e folder for all feature files which will hold the manual test cases. Automated test cases including API testing will be triggered automatically as soon as you run the 'npm run tests'.

You can view the test report by opening the reports folder and open the index.html in any web browser. 
