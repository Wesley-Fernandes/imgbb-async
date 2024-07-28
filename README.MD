Aqui está um exemplo de `README.md` para o seu pacote npm `imgbb-async`. Esse README fornece uma visão geral do pacote, instruções de instalação e uso, e detalhes sobre as principais funcionalidades:

```markdown
# imgbb-async

Um cliente TypeScript assíncrono para o serviço de upload de imagens IMGBB. Facilita o envio de arquivos de imagem para a plataforma IMGBB e a manipulação das URLs de imagens carregadas.

## Instalação

Para instalar o `imgbb-async`, use o npm ou yarn:

```bash
npm install imgbb-async
```

ou

```bash
yarn add imgbb-async
```

## Uso

### Exemplo Básico

Aqui está um exemplo básico de como usar a classe `IMGBB` para fazer o upload de uma imagem:

```typescript
import IMGBB from 'imgbb-async';
import { ImageUploadProps } from 'imgbb-async';

// Substitua pela sua chave de API real
const API_KEY = 'YOUR_API_KEY_HERE';

const imgbb = new IMGBB(API_KEY);

const uploadImage = async (file: File) => {
  try {
    const response: ImageUploadProps | null = await imgbb.upload(file, 600);
    if (response) {
      console.log('Upload successful:', response);
      // Faça algo com a resposta, por exemplo, exibir a URL da imagem
      console.log(`Imagem enviada com sucesso! URL: ${response.data.display_url}`);
    } else {
      console.error('Erro no upload');
    }
  } catch (error) {
    console.error('Erro ao enviar o arquivo:', error);
  }
};
```

### Métodos da Classe IMGBB

#### `constructor(key: string)`

Cria uma nova instância do cliente IMGBB com a chave de API fornecida.

- `key`: A chave de API para autenticação com o serviço IMGBB.

#### `createUrl(expiration?: number): string`

Cria a URL para upload de imagem.

- `expiration` (opcional): Tempo de expiração em segundos.

#### `upload(file: File, expiration?: number): Promise<ImageUploadProps | null>`

Faz o upload de um arquivo para o serviço IMGBB.

- `file`: O arquivo a ser enviado.
- `expiration` (opcional): Tempo de expiração em segundos.

Retorna uma `Promise` com as propriedades da imagem carregada ou `null` em caso de erro.

## Tipos

### `ImageUploadProps`

Interface que define as propriedades da imagem retornadas após o upload.

```typescript
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
```

## Contribuição

Contribuições são bem-vindas! Se você tiver sugestões ou encontrar problemas, sinta-se à vontade para abrir uma [issue](https://github.com/seu-usuario/imgbb-async/issues) ou enviar um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
```

### Estrutura do README

1. **Nome e Descrição**: O nome do pacote e uma breve descrição do que ele faz.
2. **Instalação**: Instruções sobre como instalar o pacote usando npm ou yarn.
3. **Uso**: Exemplos básicos de como usar a classe `IMGBB`, incluindo um exemplo de código.
4. **Métodos da Classe IMGBB**: Descrição dos métodos principais da classe.
5. **Tipos**: Descrição das interfaces usadas no pacote.
6. **Contribuição**: Informações sobre como contribuir para o projeto.
7. **Licença**: Informação sobre a licença do projeto.

Sinta-se à vontade para ajustar o README conforme necessário para refletir com precisão as funcionalidades e a estrutura do seu pacote.