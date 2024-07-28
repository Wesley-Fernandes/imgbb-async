´´´ts
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
´´´