# Netflix-GPT

Cloning Front-end of Netflix using React/Redux along with Firebase, Also utilising Open AI GPT for empowering various features.

# Design Documentation (rough flow - Dev Only)

- boilerPlate setup using create-react-app ✅
- cleanedUp the boilerPlate code to kickStart the project ✅
- added tailwindCSS config ✅
- creating components & utils folder ✅

- Login Component ✅

  - App > Body (body is Home page) ✅
  - Body > Login + Browse ✅
  - Create routing in Body (Revise routing first) - ✅
    - for / login
    - for /browse browse
  - added a errorPage also for unhandled routes ✅
  - Login > Header(comman) ✅
  - Developing Header ✅
  - Login > Form(login/ignup) ✅
  - Form validation ✅
  - useRef Hook instead of local state for holding form states ✅
  - creating utility validate.js for validating form, validating for name, email, password ✅
  - showing error messages in UI as per validation ✅

- Adding Firebase as Backend & deploying it on Prod ✅

  - create firebase project in firebase console, enable hosting also ✅
  - set up as instructed, copy project config ✅
  - you must enable authentication, enable it ✅
  - host the project via firebase hosting ✅
    - name your deployment folder as : build
    - rewrite all urls to index.html : no
    - set auto builds : no

- Creating Sign UP user account in Firebase ❌
  - in firebase docs find registering users
  - password based account > web modular api
  - getting get auth from a central place
  - write sign in and sign up logic following firebase docs
  - check if firebase is registering users
  - play with details returned after sign in/up

# Features

- NetFlix Home Page

  - Login / SignUp Form
  - Once logged in redirects to Broswe page

- Browse Page (After Authentication)

  - Header
  - Hero Movie
    - Trailer in backgorund
    - Title & descirption
    - Movie suggestions
      - Movie list carousel \* n
        - Movie \* n

- Netflix GPT
  - Search bar
  - Movie suggestion via AI on search

# Golden Rules To Follow / Gyaan

- Whenever handing with forms with many fields consider using external libraries like Formik

- In general whenever working on a piece of code always check if you can use any library for it, plenty of them are available , reusing code + Faster development
