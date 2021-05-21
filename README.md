# Lab8_Starter

[Test Result Screenshot](https://github.com/lynguyxn/Lab8/blob/main/test-results.JPG)

## Name:

* Ly Nguyen

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)

    (1) Within a Github action that runs whenever code is pushed 

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

    I would not use a unit test because sending a message to another user requires the "message" feature to interact with the rest of the application or another component.

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters

    I would use a unit test because this is an individual component that does not need to interact with the rest of the application. No matter how the rest of the app performs, this feature should always be able to pass its unit test since it is independent of other components.

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?

    I expect it to run the tests, but you would not be able to interact with the application since there is no browser UI.

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?

    ```
    beforeAll(async () => {
        await page.goto('http://127.0.0.1:5500');
        await page.click('header > img')
        await page.waitForTimeout(500);
      });
    ```
