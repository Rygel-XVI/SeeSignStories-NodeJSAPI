const video = (sequelize, DataTypes) => {

  const Video = sequelize.define('video', {
    hostSite: DataTypes.STRING,
    videoId: DataTypes.STRING,
    title: DataTypes.STRING,
    eTag: {
      type: DataTypes.STRING,
      unique: true,
    }
  });

  Video.associate = models => {
    Video.belongsTo(models.Channel);
  };

  return Video;
};

export default video;