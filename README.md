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

### F03 - Add style to the LoginPage (with CSS)

- Replicate the mockup for the Login page only (not for OrderPage).
- Replicate the mockup for the Login page only (not for OrderPage).
- Change the login button label to "Access my space" (instead of "Access your space").

#### Assets :

- Title Font: Amatic SC ("Regular 400" and "Bold 700")
- Body Font: OpenSans ("Medium 500")
- Styling Library: styled-components 
- Icon Library: react-icons

### F04 - Creation of the navbar (with CSS)

- Adhere to the style of the mockup for the navbar only.
- On the right:
  * Add profile icon.
  * Add "Hey, " followed by the name of the authenticated user.
  * When I click on "Log out", I should be redirected to the Login page.
- On the left:
  * Add "Crazee Burger" logo.
  * When I click on the logo, the page should reload (like a standard refresh).
- For now:
  * The background should be in simple orange (without pattern): #FF9F1A (color "primary").
  * Ignore the menu, the cart, and the admin button (they will be addressed later).
- font-family: "Open Sans", sans-serif;
- background: #F5F5F7.
- box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset.
- border-radius: 0px 0px 15px 15px.

### F05 - Display Menu Products

LABEL : MENU
- Follow the mockup.
- Prices are displayed in euros and rounded to the nearest cent.
- In the card, if the name is too long, an ellipsis truncate the end of the word with "...".

#### Assets :
CSS for "Menu":
- background: #F5F5F7;
- box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
- padding: 50px 50px 150px;
- grid-row-gap: 60px;
- CSS for product cards:
- box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%).

### F06 - Create the Admin Button

- When the user arrives on the order page, they see an admin button in the navbar that displays "ACTIVATE ADMIN MODE".
- When the user clicks on the admin button for the first time, the button changes and then displays "DEACTIVATE ADMIN MODE", and a pop-up/toast notification appears at the bottom right of the screen to inform them that they have entered admin mode with the message "Admin mode activated".
- The notification toast ONLY appears when the user switches from NON-ADMIN to ADMIN mode.
- When the user clicks on the admin button again, the button changes back and re-displays "ACTIVATE ADMIN MODE".
- When the user reloads the page, the button returns to its initial state (the admin button displays "ACTIVATE ADMIN MODE").

### F07 - Show / Minimize / Open the Admin Panel

- When the user enters ADMIN mode, the panel appears and displays three tabs: "minimize/open", "add a product", and "modify a product". The "add a product" tab is the default displayed tab.
- When the user enters ADMIN mode, they can minimize and then reopen the admin panel without completely hiding it, and with the last opened tab highlighted just before minimizing the panel.
- When the user is in ADMIN mode and the admin panel is minimized, if they click on "add a product", the panel automatically opens on the "add a product" tab.
- When the user is in ADMIN mode and the admin panel is minimized, if they click on "modify a product", the panel automatically opens on the "modify a product" tab.
- When I exit and return to ADMIN mode, the state of the panel should be saved (e.g., if I exit admin mode while the panel is minimized on the "modify a product" tab, when I return to ADMIN mode, the panel should still be minimized and remain on the same previously selected and minimized "modify a product" tab).

#### Assets : 

- Use those react-icons : FiChevronDown, FiChevronUp, AiOutlinePlus, MdModeEditOutline

### F08 - Create the Admin Panel (adding and deleting new product live)

- When I click on the "Add a Product" tab in the Admin panel, I see a form (empty) for adding the product. I can enter 3 fields: name, price, and product image with a product preview image.
- None of the fields are mandatory. "No required".

The NAME field:

- will indicate in placeholder: "Product name (e.g., Super Burger)". If not filled in and the form is submitted, the card will display a blank in the place of the product name.
The IMAGE field:
- will indicate in placeholder: "URL link of an image (e.g., https://photo-of-my-product.png)".
- will only accept URL links. If not filled in and the form is submitted, the "coming soon" image is displayed by default (see available in the assets).

The PRICE field:

- will indicate in placeholder: "Price".
- will accept comma-separated amounts (French notation). E.g., "2119,56", and "2119.56" will result in a price displayed on the menu card of "€2,119.56". If not filled in and the form is submitted, the value is €0.00.

In Admin mode, when I submit my form (filled in or not):

- a new product appears in the menu with the information provided (if provided)
- a message "Added successfully!" then appears for 2 seconds before disappearing.
- the form is cleared

No error handling here. They will possibly be dealt with later in another ticket (e.g., in the IMAGE field, we are not managing the case where entering text that is not a URL is not allowed, etc).

To DELETE PRODUCT : 

When I enter Admin mode, I see buttons appear to delete products from my menu. Outside of Admin mode, these buttons are therefore not visible.

If all the products in the Menu have been deleted, then a button appears to generate new default products. Only the user in ADMIN mode is allowed to regenerate products.

The user in CLIENT mode will read another out-of-stock message (see mockup).