
import axios from "axios";
import * as T from "./types";

/**
 * Class for handling image uploads to IMGBB.
*/
export default class IMGBB{
    private key: string;
    private base = "https://api.imgbb.com/1/upload";

    /**
     * Constructor for the IMGBB class.
     * @param {string} key - The API key for authentication with the IMGBB service.
     */
    constructor(key: string){
        this.key = key;
    }

    /**
     * Creates the URL for image upload.
     * @param {number} [expiration] - Optional expiration time in seconds.
     * @returns {string} - The constructed URL.
     */
    private createUrl(expiration?:number): string{
       return expiration ? `${this.base}?expiration=${expiration}&?key=${this.key}`:`${this.base}?key=${this.key}`;
    }

    /**
     * Uploads a file to the IMGBB service.
     * @param {File} file - The file to be uploaded.
     * @param {number} [expiration] - Optional expiration time in seconds.
     * @returns {Promise<T.SuccessResponse | T.ErrorResponse>} - The upload response or null in case of an error.
     */
    async upload(file: File, expiration?: number): Promise<T.SucessResponse | T.ErrorResponse>{
        if(!(file instanceof File)){
            return {status: 401, responseError: 'Invalid file. Please, use file from input type file.' };
        }
        try {
            const url = this.createUrl(expiration);
            const archive = new FormData();
            archive.append('image', file)

            const response = await axios.post(url, archive, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            return { status: 201, responseSucess: response.data.data };
        } catch (error) {
            console.error(error);
            return { status: 500, responseError: "Failed to upload. Internal error." };
        }
    }
}