<h1>imgbb-async</h1>

<p>Um cliente TypeScript assíncrono para o serviço de upload de imagens IMGBB. Facilita o envio de arquivos de imagem para a plataforma IMGBB e a manipulação das URLs de imagens carregadas.</p>

<h2>Exemplo Básico</h2>
<p>Aqui está um exemplo básico de como usar a classe `IMGBB` para fazer o upload de uma imagem:</p>

<code>
import IMGBB from 'imgbb-async';

const API_KEY = 'YOUR_API_KEY_HERE';

const imgbb = new IMGBB(API_KEY);

const uploadImage = async (file: File) => {
  try {
    const response = await imgbb.upload(file, 600);
    if (response) {
      console.log('Upload successful:', response);
    } else {
      console.error('Erro no upload');
    }
  } catch (error) {
    console.error('Erro ao enviar o arquivo:', error);
  }
};
</code>


<h2>Image upload props</h2>
<p>Interface que define as propriedades da imagem retornadas após o upload.</p>
<code>
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
</code>