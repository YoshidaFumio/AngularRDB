# Angular-RDB
Access to RDB from Angular using @ngrx/data and ActiveRecord

## Preparation
1. git clone this repository in your local disk
2. cd Angular-RDB
3. docker-compose build
4. docker-compose up     //docker containers (activerecord-service & database) UP
5. docker-compose down   //close and delete images


## Running
1. If you want run compiled Angular then input http://localhost:4567/ in your browser.
   

2. If you want see source and implement do following .
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

   edit angular.json following
   ```javascript:angular.json
          :
          :
    "serve": {
    "builder": "@angular-devkit/build-angular:dev-server",
    "options": {
    "browserTarget": "ngrxdata-activerecord:build",
    "proxyConfig": "src/proxy.conf.js"  <- add this line for api cross
    },
    ```

## Version
- Angular  8.2.14 need > 8.x.x
- ngrx  8.5.2  need > 8.x.x
- MySQL 5.7
- Ruby 2.6.5
- sinatra
