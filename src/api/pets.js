import { axiosInstance } from "../utilities/axiosInstance";


export const obtenerMascotas = async () => {
    const data = await axiosInstance.get('/api/v2/guests/publications')

    console.log(data.data);
    return data.data;

}


export const createPost = async (formData, token) => {

    const config = {
        headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${token}`,
        },
    };

    try { 
        const data = await axiosInstance.postForm('/api/v2/posts/', formData, config);
        console.log(data);
        return data.data;
    }catch (error) {
        console.log(error)
        if(error.response.status === 500) {
            return { error: "Error al crear la publicacion" }
        }
        if(error.response.status === 401) {
            return { error: error }
        }
    }

}