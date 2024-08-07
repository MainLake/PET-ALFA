import { axiosInstance } from "../utilities/axiosInstance";

export const createAccount = async (data) => {

    try {
        const response = await axiosInstance.post('/api/v3/users/', data);
        return response;
    } catch (error) {
        console.log("error", error.response);
        if (error.response.status === 500 || error.response.status === 400) {
            return { error: "El correo electronico que se desea registrar ya se encuentra vinculado a una cuenta" }
        }
    }
}

export const loginUser = async (data) => {
    try {
        const response = await axiosInstance.post('/api/v3/auth/login/', data);
        return response;
    }catch(error) {
        console.log(error);
        if(error.response.status === 400 || error.response.status === 401 || error.response.status === 404) {
            return { error: "El correo electronico o la contrasena no son validos" }
        }
    }
}

export const getPetsUser = async (token) => {
    
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    try{
        const response = await axiosInstance.get('/api/v3/users/posts/', config);
        return response;

    }catch(error) {
        console.log(error);
        return {error: error}
    }
}