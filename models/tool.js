module.exports = function(sequelize, DataTypes) {
  const tool = sequelize.define("tool", {
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
    },
    price: {
      type: DataTypes.DECIMAL(10, 2)
    },
    // categoryId: {
    //   type: DataTypes.DECIMAL(10, 2)
    // },

    available:{
      type: DataTypes.BOOLEAN,
      defaultValue: true      
    },
    dateOut:{
      type:DataTypes.DATE
    }
  });

  tool.associate = function(models) {
    tool.belongsTo(models.category);
    //tool.belongsTo(models.User)
    tool.belongsToMany(models.toolbox, {through:models.rental})
  };

  return tool;
};