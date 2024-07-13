import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const upload = await uploadPhoto();
    const user = await createUser();
    if (upload && user) {
      return {
        photo: upload,
        user,
      };
    }
  } catch (error) {
    return { photo: null, user: null };
  }
}
