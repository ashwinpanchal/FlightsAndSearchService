# Welcome to Fights Service

### Project Setup

- Clone the github repository on your local machine
- Execute `npm install` command on the same path as your local project
- Create a new `.env` file in your root directory of project and add the following environment variable
    - `PORT=3000`
- Inside the `source/config` file make a new file `config.json` and add the following code:
```
{
  "development": {
    "username": <YOUR_DB_LOGIN_USERNAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
- Once you have added the `config.json` file, go to your `src` folder from your terminal and execute the following:
```
npx sequelize db:create
```
- After this execute the following command:
```
npx sequelize db:migrate
```

## DB Design
- Airplane Table
- Flight Table
- Airport Table
- City

- A flight belong to one airplane but one airplane can belong to many flights
- A city can have many airport but every airport belong to one city
- A flight can belong to only one airport but an airport can have many flights

## Table

### City
- id
- name
- created_at 
- updated_at

### Airport 
- id 
- name
- city_id
- address
 ```
 npx sequelize model:generate --name Airport --attributes name:string,address:string,city_id:integer
 ```
 The following command will add a seeder file:
 ```
 npx sequelize seed:generate --name add_airplanes
 ```

