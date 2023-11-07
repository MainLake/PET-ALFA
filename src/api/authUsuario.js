import { axiosInstance } from "../utilities/axiosInstance"

const login = async (email, password) => {
    try {
        const dataResponse = await axiosInstance.post('/auth/login', {email, password})
    }catch(error) {

    }
}