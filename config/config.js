/* eslint-disable prettier/prettier */
module.exports = {
  "development": {
    "username": "root"/*process.env.MYSQL_USER*/,
    "password": "password"/*process.env.MYSQL_KEY*/,
    "database": "toolshed"/*process.env.MYSQL_DBNAME*/,
    "host": "127.0.0.1"/*process.env.MYSQL_HOST*/,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  }
};
