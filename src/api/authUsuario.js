import { axiosInstance } from "../utilities/axiosInstance"

export const login = async (email, password) => {
    try {
        const dataResponse = await axiosInstance.post('/auth/login', {email, password});
        console.log(dataResponse);
        return dataResponse.data;
    }catch(error) {
        throw error;
    }
}