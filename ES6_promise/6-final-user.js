import { signUpUser } from '4-user-promise';
import { uploadPhoto } from '5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
    return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
        .then((values) => {
            status: values.status,
            values.forEach((value) => {
                if (value.status === 'rejected') {
                    console.log(value.reason.message);
                } else {
                    console.log(`${value.value.firstName} ${value.value.lastName}`);
                }
            });
        })
        .catch(() => console.log('Signup system offline'));
}
