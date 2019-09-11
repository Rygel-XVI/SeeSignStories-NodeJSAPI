
import models, { sequelize } from './models';

const seed = () => {

    return models.Channel.create(
        {
            owner: "Miss Blake",
            eTag: "8jEFfXBrqiSrcF6Ee7MQuz8XuAM/vFrheM5OYuSNU4gQ7y6VWEOYVGk",
            channelId: "UCzm23K3jWedsp9SQejnOrpA",
            videos: [
                {
                    eTag: "8jEFfXBrqiSrcF6Ee7MQuz8XuAM/ha6sjYXaJ5b_vO9SzMzMXLntv2I",
                    videoId: 'TSZMfrewi50',
                    hostSite: "youtube",
                    tags: {
                        ar: [3,4],
                        genre: ["Fiction", "Dinosaurs", "Medical Non-Fiction"],
                        grade: [3],                        
                    },
                },
                {
                    eTag: "8jEFfXBrqiSrcF6Ee7MQuz8XuAM/TlVYdBKTnTsZxFf-8XLD3PR79xo",
                    videoId: 'FvhvA9RcM5Y',
                    hostSite: "youtube",
                    tags: {
                        ar: [3.5,5],
                        genre: ["Fiction", "Animals", "Coming Of Age"],
                        grade: [4,5],                        
                    },
                },
                {
                    eTag: "8jEFfXBrqiSrcF6Ee7MQuz8XuAM/EtCP-X0RtYhKiA5nKKxSS30yMrw",
                    videoId: 'P97UBseVv7w',
                    hostSite: "youtube",
                    tags: {
                        ar: [0.5,1],
                        genre: ["Fiction", "Animals", "Toilet Training"],
                        grade: [1],                        
                    },
                },
            ],
        },
        {
            include: [models.Video],
        }
    )
}

export { seed };
