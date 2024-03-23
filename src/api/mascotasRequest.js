import { axiosInstance } from "../utilities/axiosInstance";

const paths = {
    getAllMascotas: "/guests/publications"
}

export const getAllMascotas = async() => {

    try{
        const dataAllMascotas = await axiosInstance.get(paths.getAllMascotas);
        console.log(dataAllMascotas);
        return dataAllMascotas.data;
    }catch(error) {
        throw error;
    }

}