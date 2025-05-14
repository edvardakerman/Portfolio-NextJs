export interface GalleryItem {
    title: string;
    desc: string;
    image: string;
    link: string;
    type: string;
    btnStyle: string;
    btnText: string;
    btnIcon?: string;
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