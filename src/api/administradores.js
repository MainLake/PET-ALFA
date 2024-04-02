import { axiosInstance } from "../utilities/axiosInstance";

//Peticiones de tipo GET
export const obtenerUsuarios = async (token) => {
    
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    try{
        const response = await axiosInstance.get('/api/v2/admins/users/', config)
        console.log(response);
        return response.data
    }catch(error) {
        console.log(error)
    }
}

export const obtenerUsuariosColaboradores = async (token) => {
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    try{
        const responseCll = await axiosInstance.get('/api/v2/admins/collabs/', config)
        console.log(responseCll);
        return responseCll.data
    }catch(error) {

    }
}

export const peticionesColaborador = async (token) => {
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    try{
        const responseRq = await axiosInstance.get('/api/v2/admins/requests/', config)
        console.log(responseRq);
        return responseRq.data
    }catch(error) {

    }
}

//Peticiones de tipo DELETE
export const eliminarUsuario = async (token, deleteId) => {
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    try{
        const responseDlt = await axiosInstance.delete(`/api/v2/admins/users/${deleteId}`,config)
        console.log(responseDlt);
        return responseDlt.data
    }catch(error) {
        console.log(error)
    }
}

export const eliminarUsuarioColaborador = async (token, deleteId) => {
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    try{
        const responseDlt = await axiosInstance.delete(`/api/v2/admins/collabs/${deleteId}`, config)
        console.log(responseDlt);
        return responseDlt.data
    }catch(error) {
        console.log(error)
    }
}

//Peticiones de tipo POST
export const aceptarPeticion = async (token, postId) => {
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    try{
        const reponseAcp = await axiosInstance.post(`api/v2/admins/requests/${postId}?action=activate` , null, config)
        console.log(reponseAcp);
        return reponseAcp.data
    }catch(error) {
        console.log(error);

    }
}

export const rechazarPeticion = async (token, postId) => {
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    try{
        const reponseRjt = await axiosInstance.post(`api/v2/admins/requests/${postId}?action=reject` , null, config)
        console.log(reponseRjt);
        return reponseRjt.data
    }catch(error) {
        console.log(error);

    }
}


