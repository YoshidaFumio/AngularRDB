# AngularRDB
This is Japanese Version.

Angular から @ngrx/data と ActiveRecord を使ってRDBにアクセスします

## SetUP
ローカルディスクにクローンを作成後、以下を実行します
1. cd AngularRDB
2. docker-compose build
3. docker-compose up -d  

* (activerecord-service & database) 2つのコンテナが起動します

## Running
1. コンパイル済のバージョンを実行する場合ブラウザから次の入力をします http://localhost:4567/


2. 自分でソースを検証する場合、以下のように実行します。
　　newprojectは新規プロジェクト名で置き換えてください。
- ng new newproject
- cd newproject
- ng add @ngrx/store
- ng add @ngrx/effects
- ng add @ngrx/entity
- ng add @ngrx/data
- ng add @angular/material
- npm i @angular/flex-layout --save

- 上記Angular Project の src ディレクトリ以下を削除します
- クローンのFrontEnd-src/ngrxdata-activerecord 下の src 以下を持ってきます（コピー）
- angular.json を編集して、以下のようにproxyConfig を追加します

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

- ng serve

## Finish
終了する場合は、以下のコマンドで終了する。
1. docker-compose down
再開する場合は、以下のコマンドを実行します。
2. docker-compose up -d  
docker image内のrepository を消すには以下を実行します。
3. docker rmi angularrdb_activerecord-service
4. docker rmi angularrdb_database


## Version
- Angular  9.1.14  
- AngularMaterial 9.2.4
- ngrx  9.1.2
- MySQL 5.7
- Ruby 2.6.5
- sinatra 2.0.7
- puma 4.3.0
- ActiveRecord 6.0.2
