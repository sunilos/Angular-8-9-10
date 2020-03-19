# SOSAngular

This project contains example code of Angular 6/8/10. It depicts how you can generate Angular 6 project and create components and run them.
In this example we have created two components for Welcome and Login page.

1.	Welcome page displays welcome message
1.	Login page accepts login id and password and authenticate them. After successful authentication login forwards request to Welcome page.

Angular server is started at 4200 default port and accessed from browser using http://localhost:4200 url.

Login and Welcome page are mapped and accessed by following urls:

1.	http://localhost:4200/login
1.	http://localhost:4200/welcome

See https://github.com/sunilos/SOSAngular/wiki to understand and develop the code.

# Angular key commands 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

Use following command to deploy your build in /ORS context path (folder)

`ng build --base-href /ORS/  --prod`

Make sure your links are made by routerlink directive.

`<a [routerLink] = "['/welcome']" > Welcome </a>` 


## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
