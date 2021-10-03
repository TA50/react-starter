# react-material-ui

This a starter templete to build a react material ui application
first run "npm install", then change the name of the app in package.json and also in the .env file.

# template folder structure
* src 
  - components: where your shared components should live. The Template gives you a predesigned very usefull ready to use components : 
    -   ErrorHandler: this is mainly used to wrap the entire app => very useful :)
    -   Loader: it gives you the spinner that would show if the loader is active
    -   GenericTable: a Table made with love above the MUI table with predesigned filters, pagination and sorting just give it what it need as properties and it is ready to go.
  - core
    - API
    - constants
    - services: a little mock for the powerfull dependancy injection principal                     https://en.wikipedia.org/wiki/Dependency_injection#:~:text=In%20software%20engineering%2C%20dependency%20injection,it%20depends%20on%2C%20called%20dependencies.&text=The%20'injection'%20refers%20to%20the,part%20of%20the%20client's%20state.
   . Few services are already made available as 
      - Feedback: gives you a little feedback on the upper right corner.
      - Configuration: this is the way you should read from the appsettings file
      - Logger: the main reason to use the logger is to throw error in a standard and consistent way across all the application. It also can log information tho.
      - Storage: this where you can preserve some information. The most important file here is the IStorageService interface the implementaion of this interface depends on the             need of your application, you are free to use any storage system you prefer. I am using memory based storage, but you can benefit from the cookie, localStorage, ... etc.
    - store: the store I am using is built on Redux. the store folder archeticture I am using is to put every reducer in its own folder with all the actions, dispatcher and so on. this folder called a ducx. this folder structure is inspired by this repo https://github.com/erikras/ducks-modular-redux.
    - types: here you store all the main types in your application.
  - layout
  - pages
  - routes
  - app-styles.ts
  - App.tsx
  - appsettings.ts : configuration. be carefull do not consume this data without the use of the config service as it will pay attention to the env type.
  - index.ts
  - theme.ts  : mui theme object.

## why this folder structure: 
  the main purpose of using the core folder which conatin all this logic is to seperate the ui code from the code behind which may contain too much logic that would distract you from you main goal which is to create more powerfull ui experience.
# Note :
I am using here material ui version 4 as the material ui team rebranded their package with mui5, so version 5 aka mui5 could break your app. 
