export interface IMGBBDetails {
    filename: string;
    name: string;
    mime: string;
    extension: string;
    url: string;
  }
  
export interface IMGBBResponseData {
    id: string;
    title: string;
    url_viewer: string;
    url: string;
    display_url: string;
    size: number;
    time: string;
    expiration: string;
    image: IMGBBDetails;
    thumb: IMGBBDetails;
    medium: IMGBBDetails;
    delete_url: string;
}


export interface SucessResponse {
    sucess: true;
    responseSucess: IMGBBResponseData;
}

export interface ErrorResponse {
  sucess: false;
  responseError: string;
}