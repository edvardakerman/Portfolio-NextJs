export interface GalleryItem {
    title: string;
    desc: string;
    image: string;
    type: string;
    extraBtn?: {
        text: string;
        link: string;
        class: string;
    };
    rating?: {
        score: number;
    };
    tags?: ItemTags[]
}

export interface ItemTags {
        text: string;
        color: string;
}