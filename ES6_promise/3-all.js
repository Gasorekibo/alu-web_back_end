import { uploadPhoto, createUser } from './utils.js';
function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((values) => {
      console.log(values[0].body, values[1].body);
    })
    .catch(() => console.log('Signup system offline'));
}
