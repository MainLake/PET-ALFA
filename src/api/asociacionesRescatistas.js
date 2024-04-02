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