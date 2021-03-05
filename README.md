pet-store-api-tests :

This code repository contains API tests for petstore v2 (https://petstore.swagger.io/v2/swagger.json)
This is sample API testing project which will test the following requests:

store : Access to Petstore orders

1. Place an order for a pet
Method : POST
​/store​/order

2. Find purchase order by ID
Method : GET
​/store​/order​/{orderId}

3. Delete purchase order by ID
Method : DELETE
​/store​/order​/{orderId}

4. Returns pet inventories by status
Method : GET
​/store​/inventory

Here is checklist of assertion/validation performed in the tests:
  1. Verify basic performance sanity/Response time SLA (is 5 sec.)  
  2. Verify correct HTTP status code
  3. Verify response payload
  4. Verify response headers
  5. Validate the schema
  6. Happy Path
  7. Negative 
 
Dependencies:
Make sure you have node 12+ and npm installed.

Note: 
Run and tested on windos 10 os (Node version :v12.18.4 )
ESLINT is installed and configured.
Pre-commit hook is used in this project to make sure non linted code is not allowed to commit.
run : `npm run lint` command to make code is in proper format.


Running Tests:
 1. Checkout the code from repo.

 2. Navigate to project directory : <HOME/CLONEPATH>/<pet-store-api-tests> . 

 3. run on command line/bash  : `npm install`

 4. once all the dependencies are installed run `npm run test`