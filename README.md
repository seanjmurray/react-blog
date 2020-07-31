## React-Blog
[![Version](https://img.shields.io/badge/version-1.0.4-brightgreen.svg)](https://github.com/seanjmurray/react-blog)
[![Build Status](https://travis-ci.com/seanjmurray/react-blog.svg?branch=master)](https://travis-ci.com/seanjmurray/react-blog)


## Dependencies

### Frontend 
  - @auth0/auth0-react: ^1.0.0
  - @testing-library/jest-dom: ^4.2.4
  - @testing-library/react: ^9.5.0
  - @testing-library/user-event: ^7.2.1
  - axios: ^0.19.2
  - react: ^16.13.1
  - react-dom: ^16.13.1
  - react-markdown: ^4.3.1
  - react-router-dom: ^5.2.0
  - react-scripts: 3.4.1
### Backend
  - dotenv: ^8.2.0
  - express: ^4.17.1
  - mongoose: ^5.9.23
  - morgan: ^1.10.0
  - slugify: ^1.4.4

### API's
 - [Auth0](https://auth0.com/)
    
## Installation

To get started with this app clone the repo and from the root Directory run:

```
$ npm i
$ cd server
$ npm i
$ cd ..
$ touch .env
``` 

while in the development environment use

```
$ npm start
```

This will start the server and build the React app. Be aware that you will not be able to see live updates.

## Dev Notes

### Build and Deployment
The repository is currently set to be hosted at the / route of its URL.  Also I have environmental variables so authentication will not work.

### Available Scripts 

#### `npm run lint`

Runs eslint checks on the src .js files. Linter follows recommended rules and uses react plugin.

#### `npm test`

Launches the test runner in the interactive watch mode.<br />

#### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance. This also runs `npm i` for the server's package.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!
#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

## Changelog
 - 2020-07-13 V 0.1 Project started basic functionality added
 - 2020-07-13 V 0.3 Deployed and update build command
 - 2020-07-15 V 0.4 Update styling and began working on CRUD
 - 2020-07-17 V 0.5 Add Auth using Auth0
 - 2020-07-18 V 0.6 Add Admin route 
 - 2020-07-19 V 1.0 Add comments fully deploy
 - 2020-07-24 V 1.0.1 Change fonts, add eslint and travis ci, start to work on refactoring
 - 2020-07-29 V 1.0.2 Change colors and fonts add link to portfolio
 - 2020-07-30 V 1.0.3 Fixed height of main sections, add substring to featured post on home page, Add very basic test
 - 2020-07-30 V 1.0.4 Fixed routing issues and switch, fix sorting on server /home route
 
## Credits

### Coded and designed by Sean Murray

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).