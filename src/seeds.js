
import models, { sequelize } from './models';

const seed = () => {

    return models.Channel.create(
        {
            owner: "Miss Blake",
            eTag: "8jEFfXBrqiSrcF6Ee7MQuz8XuAM/ha6sjYXaJ5b_vO9SzMzMXLntv2I",
            channelId: "UCzm23K3jWedsp9SQejnOrpA",
            videos: [
                {
                    eTag: "8jEFfXBrqiSrcF6Ee7MQuz8XuAM/ha6sjYXaJ5b_vO9SzMzMXLntv2I",
                    videoId: 'TSZMfrewi50',
                    hostSite: "youtube",
                },
                {
                    eTag: "8jEFfXBrqiSrcF6Ee7MQuz8XuAM/TlVYdBKTnTsZxFf-8XLD3PR79xo",
                    videoId: 'FvhvA9RcM5Y',
                    hostSite: "youtube",

                },
                {
                    eTag: "8jEFfXBrqiSrcF6Ee7MQuz8XuAM/EtCP-X0RtYhKiA5nKKxSS30yMrw",
                    videoId: 'P97UBseVv7w',
                    hostSite: "youtube",

                },
            ],
        },
        {
            include: [models.Video],
        }
    )
}

export { seed };
