export class HotMovieData {
    count: number;
    start: number;
    subject_collection: {
        cover_url: string;
        description: string;
        display: {
            layout: string
        };
        id: string;
        name: string;
        sharing_url: string;
        subject_count: number;
        uri: string;
        url: string;
    };
    subject_collection_items: {
        actions: string[];
        id: string;
        info: string;
        label: string;
        original_price: string;
        price: number;
        release_date: string;
        reviewer_name: string;
        subtype: string;
        title: string;
        type: string;
        uri: string;
        url: string;
        date: Date;
        description: string;
        directors: string[];
        actors: string[];
        rating: {
            count: number;
            max: number;
            value: number;
        };
        cover: {
            height: number;
            shape: number;
            url: string;
            width: number;
        };
        forum_info: {
            id: string;
            participant_count: number;
            uri: string;
        }
    }[];
    total: number;
}
