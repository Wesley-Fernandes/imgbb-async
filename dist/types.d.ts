export interface ImageDetailsProps {
    filename: string;
    name: string;
    mime: string;
    extension: string;
    url: string;
}
export interface ImageUploadProps {
    id: string;
    title: string;
    url_viewer: string;
    url: string;
    display_url: string;
    size: number;
    time: string;
    expiration: string;
    image: ImageDetailsProps;
    thumb: ImageDetailsProps;
    medium: ImageDetailsProps;
    delete_url: string;
}
export interface ImgbbResponse {
    data: ImageDetailsProps;
}
