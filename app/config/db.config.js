module.exports = {
    HOST: "localhost",
    USER: "deathrecord",
    PASSWORD: "123456",
    DB: "deathrec",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };