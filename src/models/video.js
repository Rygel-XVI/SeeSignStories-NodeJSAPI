// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   const Video = sequelize.define('Video', {
//     hostSite: DataTypes.STRING,
//     videoId: DataTypes.STRING,
//     eTag: DataTypes.STRING
//   }, {});
//   Video.associate = (models) => {
//     Video.belongsTo(models.Channel, {
//       foreignKey: 'channelId',
//       onDelete: 'CASCADE'
//     })
//     // associations can be defined here
//   };
//   return Video;
// };


const video = (sequelize, DataTypes) => {
  const Video = sequelize.define('video', {
    hostSite: DataTypes.STRING,
    videoId: DataTypes.STRING,
    eTag: DataTypes.STRING
  });
  Video.associate = models => {
    Video.belongsTo(models.Channel);
  };

  return Video;
};

export default video;