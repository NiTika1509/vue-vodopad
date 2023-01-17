import { sendGet, sendPut} from '@/api';

export async function authLogin (userId) {
    try {
       return await sendGet(`/users/${userId}`);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function authRegister (userId, data) {
    try {
        return await sendPut(`/users/${userId}`,data);
    } catch (error) {
        console.log(error);
        throw error;
    }
}
