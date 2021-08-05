https://github.com/MohmmadNada/Cookie-Stand-Admin-2/pull/2

# Lab 39 
## Overview
Your job is to continue work on Cookie Stand Admin app using [Next.js](https://nextjs.org/) and style using [Tailwind CSS](https://tailwindcss.com/).
**But now you’ll be working with data from a remote API!**

## Annoying Change Explanation
The component names have changed slightly since last version. That is intentional. The concepts should map over from previous lab. E.g. `<Header> --> <CookieStandHeader>`. There’s a reason for this, and it’s not to pester you!

Also, the layout of Cookie Stand Form has changed a bit. This WILL happen all the time as devs. We may as well get used to it now.
## Feature Tasks and Requirements
* All features from versions 1 an 2 should be complete.
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


# STEPS : 
1. let`s add data file 
   1. add data.js in top level 