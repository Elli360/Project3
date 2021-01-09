module.exports = function(sequelize, DataTypes) {
  const category = sequelize.define("category", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  //associations come next
/*
  menuItem.associate = function(models) {
    menuItem.belongsToMany(models.order, {
      through: models.orderMenuItem
    });
  };*/

  return category;
};
