# Lab 39 
## Overview
Your job is to continue work on Cookie Stand Admin app using [Next.js](https://nextjs.org/) and style using [Tailwind CSS](https://tailwindcss.com/).
**But now you’ll be working with data from a remote API!**

## Annoying Change Explanation
The component names have changed slightly since last version. That is intentional. The concepts should map over from previous lab. E.g. `<Header> --> <CookieStandHeader>`. There’s a reason for this, and it’s not to pester you!

Also, the layout of Cookie Stand Form has changed a bit. This WILL happen all the time as devs. We may as well get used to it now.
## Feature Tasks and Requirements
* - [x] All features from versions 1 an 2 should be complete. 
* The `specs` for lab are screen shots [Cookie Stand Admin Version 3](https://codefellows.github.io/code-401-python-guide/curriculum/class-39/lab/cookie-stand-admin-version-3.png) and [Cookie Stand Admin Login](https://codefellows.github.io/code-401-python-guide/curriculum/class-39/lab/cookie-stand-admin-login.png)

* pages/Index.js should export a `<Home>` component.
* `<Home> `requirements
    * If user is NOT logged in then `<LoginForm>` should render.
    * If user Is logged in then `<CookieStandAdmin>` component should render.
* `<LoginForm>` requirements
    * Should receive a function passed in to call when form is submitted.
    * The function should be called with username and password arguments.
* `<CookieStandAdmin>` requirements:
  * Component should continue to display Cookie Stand info as in version 2
  * Add a `delete` icon in each stand’s location cell.
  * Clicking `delete` icon should immediately delete the Cookie Stand.
  * API should be informed that Cookie Stand was deleted.
* Continue to style all components using TailwindCSS utility classes to match spec.
## Implementation Notes
* Continue work in `cookie-stand-admin` repository
* You will be supplied with an API URL by instructor
  * https://cookie-stand-api.herokuapp.com/admin
  * https://cookie-stand-api.herokuapp.com/api/v1/cookie-stands/
  * https://cookie-stand-api.herokuapp.com/api/token/
  * https://cookie-stand-api.herokuapp.com/api/refresh/
  * You will be supplied a username/password to use API => Username and password: rudy
* **IMPORTANT** Complete version 1 & 2 tasks before moving on to version 3 features.
* Pro tip: [Tailwind CSS Extension Pack](https://marketplace.visualstudio.com/items?itemName=andrewmcodes.tailwindcss-extension-pack)
## User Acceptance Tests
No testing required.

## Configuration
Continue work in `cookie-stand-admin` repository in Github

Refer to [Lab Submission Instructions](https://codefellows.github.io/code-401-python-guide/reference/submission-instructions/labs/) for detailed instructions.

## Stretch Goals
* Use your own API instead of supplied one.
* Add a confirmation dialog when deleting a Cookie Stand.
* Add a list of Cookie Stand locations to Overview page.
    * There is some trickiness here regarding logged in status. Try to figure it out!
* Add edit feature.


# STEPS: 
1. let`s add data file 
   1. add data.js in top level 
   2. add array 
   3. export defult 
   4. import it in files need it , and remove it from props.

2. change `<Header> --> <CookieStandHeader>`
   1. in Header.js and CookieStandAdmin.js
3. refering to https://codefellows.github.io/code-401-python-guide/curriculum/class-39/lab/cookie-stand-admin-version-3.png we want to add button for Rudy and Sign Out
   1.  add it on header.js 
   2.  add some style 
4. add form style 

5. pages/Index.js should export a `<Home>` component.
  * add component Home => add every thing to CookieStandAdmin component. 

6. a. If user is NOT logged in then `<LoginForm>` should render.
      1. add hook for token 
      2. add login component after check the token is empty or not 
   b. If user IS logged in then `<CookieStandAdmin>` component should render.

7. add component file for loginform add fun and return LogIn form 
   1. add prevent defult => get value username and password and save it , return it.

## get data from api 
1.  index.jd => add api urls => for data , token , refresh.
2. make request to get token 
3. add fun in home to make req to get token (ligindata) by post ()  
      1. this fun is sync => we want it to wait => we want it to be async => add wait ; sync mean line by line  
4. set token in hook in index and get it -> check the condition 
5. now Need to get array of data  
   1. make Req to Url using Access Token 
      1. add Token as props to cookies stands component 
      2. Open Cookies stands Component and add url whice had data
      3. add function to get data  => async => with config Bearer => set it in hook
6. use effect => no one can use the state before it is done => inside effect will run first 
7. Next step => foramt data to be like what we build in datajs by map => Done 