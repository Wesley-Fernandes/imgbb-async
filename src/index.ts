
import axios from "axios";
import { ImageUploadProps } from "./types";

/**
 * Classe para lidar com o upload de imagens para o IMGBB.
 */
export default class IMGBB{
    public key: string;
    private base = "https://api.imgbb.com/1/upload";

    /**
     * Construtor para a classe IMGBB.
     * @param {string} key - A chave de API para autenticação com o serviço IMGBB.
    */
    constructor(key: string){
        this.key = key;
    }

    /**
     * Cria a URL para upload de imagem.
     * @param {number} [expiration] - Tempo de expiração opcional em segundos.
     * @returns {string} - A URL construída.
    */
    createUrl(expiration?:number){
       return expiration ? `${this.base}?expiration=${expiration}&?key=${this.key}`:`${this.base}?key=${this.key}`;
    }

    /**
     * Faz o upload de um arquivo para o serviço IMGBB.
     * @param {File} file - O arquivo a ser enviado.
     * @param {number} [expiration] - Tempo de expiração opcional em segundos.
     * @returns {Promise<ImageUploadProps | null>} - A resposta do upload ou null em caso de erro.
     */
    async upload(file: File, expiration?: number){
        const url = this.createUrl(expiration);
        const archive = new FormData().append('image', file);
        try {
            const { data }: { data: ImageUploadProps } = await axios.post(url, archive, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            return data;
        } catch (error) {
            console.error(error);
            return error;
        }
    }
}