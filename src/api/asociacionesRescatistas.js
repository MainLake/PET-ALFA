import { axiosInstance } from "../utilities/axiosInstance"

export const createAssociationRescuers = async (data) => {
    try {
        const response = await axiosInstance.post('/api/v2/collabs/', data);
        return response;
    } catch (error) {
        console.log("error");
        if (error.response.status === 500 || error.response.status === 409) {
            return { error: "El correo electronico que se desea registrar ya se encuentra vinculado a una cuenta" }
        }
    }
}

export const createBulletin = async (data, token) => {
    try {

        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        const response = await axiosInstance.post('/api/v2/bulletins/', data, config);

        return response.data;

    }catch(error) {
        console.log(error)
        if(error.response.status === 500) {
            return { error: "Error al crear el boletin" }
        }
    }
} 