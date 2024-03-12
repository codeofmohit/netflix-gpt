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

- Creating Sign UP user account in Firebase ✅

  - in firebase docs find registering users ✅
  - password based account > web modular api ✅
  - getting get auth from a central place ✅
  - write sign in and sign up logic following firebase docs ✅
  - check if firebase is registering users ✅
  - play with details returned after sign in/up ✅

- Setting up redux tool kit + Sign in/up/out functionlity via Firebase Auth ✅

  - revise redux tool kit first ✅
  - once the user in sign in / up, firebase returns a user object with access token ✅
  - we will store that user into the redux store, to keep track of session ✅
    - 2 actions, in user slice, adduser, and removeuser ✅
  - then we will navigate the user to browse page
  - when user sign up/sign in : adduser, when sign out : removeuser ✅
  - after sign in/up : navigate user to browser page ✅
  - after sign out : navigate user to login page / ✅
  - useNavigate() hook of react router dom ✅
  - once the user logged in then only, browse page will be shown, otherwise make browse page protected ✅
  - once user logs in / or sign up then only show & actigvate sign out button/functionlity in header ✅
  - update profile via update api, once sign in/up with userName ✅
  - display the user name + photo URL(s) [dummy as of now], in header once logged in ✅
  - Fixed the bug > made login and browse protected via adding onAuthChange api from firebase, and navigation is handled by it only ✅
  - Fixed another bug, added 2 users, 1 from redux store, 1 from firebase auth, to fix name collapsing issue ✅
  - adding loader while signing up and siginig in for better and smooth UX ✅
  - unsubscribed the onAuthChange subscription ✅
  - constant file added for dummy strings and constant data ✅

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
