module.exports = function(sequelize, DataTypes) {
  const toolbox = sequelize.define("toolbox", {
    rentalDate:{
      type:DataTypes.DATE
    }
  });

  toolbox.associate = function(models) {
    toolbox.belongsTo(models.User);
    toolbox.hasMany(models.tool)
    toolbox.hasMany(models.rental);
    //tool.belongsTo(models.User)
    //tool.belongsToMany(models.user, {through:models.userRental})
  };

  return toolbox;
};
