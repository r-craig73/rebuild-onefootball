# rebuild-onefootball

### by Ron Craig (ron.craig@comcast.net)
#### 03/30/2018-04/08/2018

### GitHub repository: https://github.com/r-craig73/rebuild-onefootball

## Description
### A project rebuilding onefootball.com English (http://onefootball.com/en/home) using angular.
### Week 1: build functionality, week 2: add a database and deploy online

### Original site
#### Top main page...
<kbd><img src="./src/assets/Onefootball-sc01.png" alt="Original onefootball.com  top screenshot"></kbd>
#### Bottom main page...
<kbd><img src="./src/assets/Onefootball-sc02.png" alt="Original onefootball.com  bottom screenshot"></kbd>

### Rebuild site (updated: 04/07/2018 evening)
#### Welcome page...
<kbd><img src="./src/assets/Onefootball-rebuild-welcome.png" alt="Rebuild onefootball.com welcome screenshot"></kbd>

#### Top main page...
<kbd><img src="./src/assets/Onefootball-rebuild-sc01.png" alt="Rebuild onefootball.com screenshot, part 1"></kbd>

#### Bottom main page...
<kbd><img src="./src/assets/Onefootball-rebuild-sc02.png" alt="Rebuild onefootball.com screenshot, part 2"></kbd>

## Specifications

| Spec   | Status   |
|--------|:-------: |
| Generate functioning header <app-app-head></app-app-head> components. | Completed |
| Generate functional footer <app-footer></app-footer> components. | Completed |
| Match Onefootball background styling. | Completed |
| Generate functioning news <app-news></app-news> components. | Ongoing |
| Search API calls and save soccer videos information in a new Firebase database. | Ongoing |

## Tasks to Complete
- [ ] Deploy application to Firebase.
- [ ] In the Admin section, add article features in the articles database.
- [ ] In the Admin section, edit and delete articles in the articles database.
- [ ] Use search box and "Popular Pages" links to start a YouTube API call.
- [ ] Add an angular pipe to the application.
- [ ] Copy Onefootball text styling.
- [x] Add a database.
- [x] Use bootstrap 4 to dropdown features.
- [x] Use bootstrap Card to edit news and video sections.

## Known Bugs and Issues
* Header: Search for soccer videos using YouTube API call is not functional.
* News and videos: Retrieving data from Firebase is not possible.
* Admin section: Opening Admin results in a Chrome console error: 'ERROR TypeError: Cannot read property 'set' of undefined'.

## Technologies Used
```
Application: Angular CLI [Angular CLI] (https://github.com/angular/angular-cli) version 1.7.3, JavaScript, jQuery, Bootstrap, HTML
Testing: Angular, Jasmine, Karma
Environment: ng, npm, webpack, babel, esLint
```

## Angular Installation Setup

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Firebase Installation Setup
### In order to run the database, please follow the instructions below...
* In the top directory, install AngularFire and Firebase npm packages using the terminal command below:
`$ npm install angularfire2@4.0.0-rc.0 firebase@^3.6.6 --save`
* Signup and Log into Firebase (https://console.firebase.google.com/).
* Create a new project by providing a name for your project and selecting your Contry/region.
* In the "Overview" section, select 'Add Firebase to your web app'.
* Copy the initializing settings into a clipboard.
* Within the Firebase dashboard, select 'Realtime Database'.  Then select start in Test Mode.
* For Firebase credentials, create a new file called 'api-keys.ts' in the 'src/app/'' directory.
* Place your Firebase credentials and other information as shown below:
```
export let masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };
```

MIT License
-----------

Copyright (c) 2018 **_RC productions_**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
