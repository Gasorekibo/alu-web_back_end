import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {

    const upload = await uploadPhoto();
    const user = await createUser();
    if (upload && user) {
      return {
        photo: upload,
        user,
      };
    } else {
        return {
            photo: null,
            user: null,
        };
    }
  
}
