const video = (sequelize, DataTypes) => {

  const Video = sequelize.define('video', {
    hostSite: DataTypes.STRING,
    videoId: DataTypes.STRING,
    eTag: {
      type: DataTypes.STRING,
      unique: true,
    },
    tags: DataTypes.JSON,
  });

  Video.associate = models => {
    Video.belongsTo(models.Channel);
  };

  return Video;
};

export default video;