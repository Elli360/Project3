module.exports = function(sequelize, DataTypes) {
    const rental = sequelize.define("rental", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      }
    });
    

    rental.associate = function(models) {
      rental.belongsTo(models.toolbox);
      rental.belongsTo(models.tool);
      //userRental.belongsTo(models.User);
    };


  
    return rental;
  };
  