# Welcome to Fights Service

### Project Setup

- Clone the github repository on your local machine
- Execute `npm install` command on the same path as your local project
- Create a new `.env` file in your root directory of project and add the following environment variable
    - `PORT=3000`
- Inside the `source/config` file make a new file `config.json`and add the following code:
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