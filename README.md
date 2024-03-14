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

- Creating Browse Page ✅

  - registered and logged in on TMDB to use their API's [got access token and api key] ✅
  - Copy NOW_PLAYING_MOVIES_API_OPTIONS into your constant file ✅
  - in Browse page make the API call to get Now playing movies ✅
  - creating a moviesSlice, and storing all our data into the moviesSlice ✅
    - movieSlice will have initialState as: ✅
      - nowPlayingMovies ✅
      - trailerVideo ✅
  - initailly do all these stuff -> fetch data from tmdb and then store it into redux in browser page ✅
  - then create a custom hook to do so to keep browse component clean ✅
  - create useNowPLayingMovies hook, in hooks folder ✅
  - create browse page UI ✅
  - plannning how to create the UI ✅
  - Browse page UI (2 parts) ✅
    - Maincontainer ✅
      - Video BG of Movie ✅
      - Video title & info ✅
    - SecondaryContainer ✅
      - MoviesCategories\*n ✅
        - MovieCards\*n ✅
  - as planned make 2 components, MainContainer + SecondaryContainer ✅
  - MainContainer ✅
    - fetch movies using useSelector from store ✅
    - create 2 components ✅
      - VideoTitle ✅
      - VideoBackground ✅
  - early retrurn is movies are not loaded ✅
  - else first movie will be main movie for which title and video will be shown ✅
  - destructure relevant info from object and passed it to videoTitle component as props ✅
  - Now for videoBackground, nowplaying movies api won't have the trailer ✅
  - We will use another API from tmdb, video api, which will take movie id and give video for that ✅
    - pass movie id as a prop to video BG comp ✅
  - in VideoBG comp make api call with movie id to get movie videos ✅
  - out of all the clips returned, use type="trailer" as bg ✅
  - in trailer is not there use any first video as bg (write logic) ✅
  - trailer object contains youtube id, from youtube take the embedded code , handle the id dynamically
  - for storing trailer id, make use of redux not local state, put entire object into redux, and use from there only ✅
  - make useMovieTrailer, to fetch trailer and store it in redux, make a custom hook for it, to make component cleaner ✅
  - css to make video bg and title look like how fateflix does ✅
  - building secondary container
  - planning building secondary conatiner
    - MovieList - Popular
      - moviescards\*n
    - MovieList - nowPLaying
    - MovieList - Horror
  - Make 2 components, MovieList & MovieCard ✅
  - pass movie list title from secondary container to movielist ✅
  - looppver movieCards into movieLIst ✅
  - use css to make it look like fateflix ✅
  - create differetnt hooks for getting different categories, i.e popular, trending, etc ✅
  - call those hooks also to browse page only > done via single hook only ✅
  - accordingly different lists would be there ✅

- Creating GptSearchPage component Feature ❌

  - in header > gpt search btn (only for signned in users)
  - on click of the btn > GptSearchPage component
  - GptSearchPage component > in browse component > accessble only on header btn click (build toggle functionilty)
  - to make the toggle functionlity work, store the reducer to toggle into redux store, create gptSlice
  - create action toggleGptSearchView
  - GPT Search component planning
    - bg image same as of /login screen
    - GptSearchBar
      - form > search bar + btn
        - note : onSubmit > preventDefault behaviour
    - GptMoviesSuggestions
  - put bg image in constants if already not coming
  - translation into other languages using a constant file
    - create a constant file lang, store object of 2 languages hindi, english in the contant file, each word on your app/site must be in these languages hardcoaded here
    - then on header give an option to toggle from select options
    - on select handler change the language as should be coming dynamically from contant file
    - even options in the select option also should come from constant file
    - do it only in the GptSearchComponent
    - when clicking on GptSearchComponent should toggle name from GptSearch to homepage
    - in homepage option for language change should not come

- Starting GptSearch Feature ❌

  - register on open ai
  - from platform.openai
  - get your api key
  - keep your key secret [paid api]
  - install open ai npm library, go through its docs, readme on github
  - make seprate util file to initialse open ai, export it
  - on click of search btn > submitHandler
    - preventDefault behaviour
    - import open ai
    - call the open ai function with the search term
    - dangerously allow error by openAi set it to allowed
    - be specific about passing the query, query , form one,
      - query : act as a movie recommendation system and recommend some movies to me for the specific query, query : {dynamic input} , give me comma separated values as result in an array format contains 5 movie titles only, such as for query : indian old is gold movies, result : [gadar, sholey, don, golmaal, kabhi khushi kabhi gam]
      - Flow
        - after query like this, openAI will give result for 5 movies
        - search these 5 titles using TMDB seach movie api's
        - movie details will comes to us, then simply display those movies to user in UI
  - in case open AI gpt does not give result, handle that error gracefully
  - create array of movies from result
  - now for all 5 movie names, we must call TMDB's search api, 5 movies - 5 api calls, create a utility function for the same
  - using map call that utility funciton -> func will be called 5 times -> won't give result -> async code, will return unresolved promises array
  - use promise.all to resolve promise and get the results
  - multiple movies will come as result
  - store those movies in redux store, in gpt slice itself
  - search results which are coming from open ai, after entering query store those also in redux store
    -- pass as an object : movieName , movieResult, destructure in reducer and store in store
  - movies extraction logic can be extracted into hooks

- Chat GPT Search result UI ❌

  - GetMoviesSuggestions
    - in this compoennt, get movies name, and movies from redux store
    - use the same already used > movieList component for display movie cards
    - map over movie names and multiple movieList components with movies

- Securing API Keys ❌

  - create .env file in root
  - append REACT_APP_API_KEY_NAME to keys to append it, no strings directly content
  - when need to use it use process.env.REACT_APP_API_KEY_NAME
  - add .env file to gitIgnore

- Memoization ❌

  - for avoiding unnecessry api calls we can memoize, hooks fetching ones
  - if redux store has data for example moveis, then don't make api call for fetching moveis
  - do the same for all fetching logics
  - no need to use useMemo
  - simply check if store has it, don't call fetch function in useEffect

- Make the site mobile responsive ❌
  - using tailwind
    - default sm:(tablet min-width:640px) md:(desktop min-width:768px)
    - mobile first approch,
      - sm : for tablets
      - md/lg : for desktop
      - by default : whatever styling is there would be for mobile

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

- In react we might notice that while developing our app, a lot of our actions like api calls, actions dispatched component renders happens two times ? why ? The answer is strict mode, the newer versions of create-react-app binds our central app inside strict mode(check in index.js), so strict mode is checking thing twice, it's an react's internal thing. [Note : only in dev it will happen, when you will create a prod build it won't happen]

- keep components clean and neat whatever code can be extracted extract them by creating custom hooks, for other components

- plan before writing a component and try to break it down into smaller components [modular coding]
