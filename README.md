# CRAZEE-BURGER

A fast food application that allows complete order management by the customer with real-time cart updates and an administrator interface.

Content of the differents tickets :

### F01 - Creating the Login Page without CSS
- Add text (Welcome to our place + Login).
- Form.
- Button with label "Access your space" without a chevron for now.
- Placeholder : "enter your first name".
- Clear the form when it has been submitted.
- When i enter a name and click "access your space" button, an alert box appears and says "Hello" followed by the first name entered in the input box.
- The user must enter a first name in order to display the message in the alert box otherwise an error message is displayed informing the user that the field is mandatory.

### F02 - Creation of the Order Page with redirection to/from LoginPage (without CSS).

- No CSS.
- Creation of the Order Page ("OrderPage").
- On the login page, when i click on 'Access my space', i should be redirected to the order page.
- When i am on the order page, if i click on "Log Out", i am redirected to the Login page (mockup).
- Once redirected to the order page, i should be able to see "Hello" followed by the first name entered on the login page. For example, if i entered "Bob", i should see on the order page "Hello Bob" (see mockup).
- Remove the alert box defined in the previous ticket F01.
- Plan for an error page (without CSS) in case the user directly enters in the URL bar an address that matches no route or pages of the suite. 
- The error page should display a button "Return to the homepage" that leads back to the login page.

