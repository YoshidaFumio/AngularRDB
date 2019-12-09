# AngulaRDB
Access to RDB from Angular using @ngrx/data and ActiveRecord

## SetUP
1. Make clone  in your local disk
2. cd AngularRDB
3. docker-compose build
4. docker-compose up -d  
5. docker-compose down   

* (docker-compose up -d)2 docker containers (activerecord-service & database) UP
* (docker-compose down)close and delete images

## Running
1. If you want run compiled Angular then input http://localhost:4567/ in your browser.


2. If you want implement in your project do following .
- ng new newproject
- cd newproject
- ng add @ngrx/store
- ng add @ngrx/effects
- ng add @ngrx/entity
- ng add @ngrx/data
- ng add @angular/material
- npm i @angular/flex-layout --save

- remove src directory
- copy src directory from repository
- edit angular.json following

```Javascript:angular.json
          :
          :
    "serve": {
      "builder": "@angular-devkit/build-angular:dev-server",
      "options": {
        "browserTarget": "ngrxdata-activerecord:build",
        "proxyConfig": "src/proxy.conf.js" 
    },
```
- add 'proxyConfig' for Angular CLI proxy
- ng serve

## Version
- Angular  8.2.14 necessary > 8.0.0
- ngrx  8.5.2  necessary > 8.0.0
- MySQL 5.7
- Ruby 2.6.5
- sinatra 2.0.7
- puma 4.3.0
- ActiveRecord 6.0.2
