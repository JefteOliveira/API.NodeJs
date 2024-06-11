module.exports = (sequelize, DataTypes) => {
  const Ator = sequelize.define('Ator', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nacionalidade: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Ator;
};
