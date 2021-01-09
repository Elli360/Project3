module.exports = {
    HOST: "localhost",
    USER: "test_user",
    PASSWORD: "testPW",
    DB: "toolshed",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };