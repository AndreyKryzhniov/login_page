import * as axios from "axios";


const instance = axios.create({
    withCredentials: false,
    baseURL: 'https://dry-forest-56016.herokuapp.com/auth',
})



export const dal = {
    getItems(email) {
        return instance.post(`/auth/forgot`, {email})
    }
}