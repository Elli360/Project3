module.exports = function(sequelize, DataTypes) {
    const userRental = sequelize.define("userRental", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      }
    });
    

    userRental.associate = function(models) {
      userRental.belongsTo(models.toolbox);
      userRental.belongsTo(models.tool);
      //userRental.belongsTo(models.User);
    };


  
    return userRental;
  };
  