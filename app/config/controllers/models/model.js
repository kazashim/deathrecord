module.exports = (sequelize, Sequelize) => {
    const Deathrec = sequelize.define("deathrec", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Deathrec;
  };