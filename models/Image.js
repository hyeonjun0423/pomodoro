/**
 * image 모델을 정의하는 함수
 * @param {import("sequelize").Sequelize} Sequelize
 * @param {import("sequelize").DataTypes} DataTypes
 */

const image = (Sequelize, DataTypes) => {
  return Sequelize.define("image", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    feedid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    url: {
      type: DataTypes.VARCHAR(255),
    },
    uploded_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
};
