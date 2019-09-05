
const channel = (sequelize, DataTypes) => {
  const Channel = sequelize.define('channel', {
    userName: DataTypes.STRING,
    eTag: DataTypes.STRING,
    channelId: DataTypes.STRING  
  });
  Channel.associate = models => {
    Channel.hasMany(models.Video);
  };

  return Channel;
};

export default channel;


// module.exports = (sequelize, DataTypes) => {
//   const Channel = sequelize.define('Channel', {
//     userName: DataTypes.STRING,
//     eTag: DataTypes.STRING,
//     channelId: DataTypes.STRING
//   }, {});
//   Channel.associate = (models) => {
//     Channel.hasMany(models.Video, {
//       foreignKey: 'videoId',
//       as: 'videos'
//     })
//     // associations can be defined here
//   };
//   return Channel;
// };