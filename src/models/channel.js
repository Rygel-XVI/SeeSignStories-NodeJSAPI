
const channel = (sequelize, DataTypes) => {

  const Channel = sequelize.define('channel', {
    userName: DataTypes.STRING,
    eTag: DataTypes.STRING,
    channelId: {
      type: DataTypes.STRING,
      unique: true,
    }
  });

  Channel.associate = models => {
    Channel.hasMany(models.Video, { onDelete: 'CASCADE' });
  };

  return Channel;
};

export default channel;