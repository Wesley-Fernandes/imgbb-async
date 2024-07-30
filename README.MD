# imgbb-async

An asynchronous TypeScript client for the IMGBB image upload service. It facilitates sending image files to the IMGBB platform and handling the URLs of uploaded images.

## Installation

To install `imgbb-async`, use npm or yarn:

```bash
npm install imgbb-async
```

or

```bash
yarn add imgbb-async
```

## Usage

### Basic Example

Here is a basic example of how to use the `IMGBB` class to upload an image:

```typescript
import IMGBB from 'imgbb-async';

// Replace with your actual API key
const API_KEY = 'YOUR_API_KEY_HERE';

const imgbb = new IMGBB(API_KEY);

const uploadImage = async (file: File) => {
  try {
    const data = await imgbb.upload(file, 600);
    switch(data.status){
      case 201:
        console.log('Upload successful:', data.responseSucess.display_url);
        break;
      case: 401:
        console.error(data.responseError);
        break;
      case 500:
        console.error(data.responseError);
        break;
    }
  } catch (error) {
    console.error('Error uploading the file:', error);
  }
};
```

### IMGBB Class Methods

#### `constructor(key: string)`

Creates a new instance of the IMGBB client with the provided API key.

- `key`: The API key for authentication with the IMGBB service.

#### `createUrl(expiration?: number): string`

Creates the URL for image upload.

- `expiration` (optional): Expiration time in seconds.

#### `upload(file: File, expiration?: number): Promise<ImageUploadProps | null>`

Uploads a file to the IMGBB service.

- `file`: The file to be uploaded.
- `expiration` (optional): Expiration time in seconds.

Returns a `Promise` with the properties of the uploaded image or `null` in case of an error.

## Types

### `ImageUploadProps`

Interface that defines the properties of the image returned after upload.

```typescript
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
    image: ImageDetailsProps;
    thumb: ImageDetailsProps;
    medium: ImageDetailsProps;
    delete_url: string;
}

export interface SucessResponse {
    status: 201;
    responseSucess: IMGBBResponseData;
}

export interface ErrorResponse {
  status: 500|401;
  responseError: string;
}
```

## Contribution

Contributions are welcome! If you have suggestions or encounter issues, feel free to open an [issue](https://github.com/your-username/imgbb-async/issues) or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).