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
    }

  });

  tool.associate = function(models) {
    tool.belongsTo(models.category);
  };

  return tool;
};
