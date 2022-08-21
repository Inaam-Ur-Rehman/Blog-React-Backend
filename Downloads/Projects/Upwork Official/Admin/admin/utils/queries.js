import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
})

export const getServices = async () => {
    try {
        const allServices = await api.get("/services");
        return allServices.data;
    }
    catch (error) {
        return error;
    }
}
export const addService = async (data) => {
    try {
        const allServices = await api.post("/services/add",{
            title: data.title,
            url: data.url,
            submenu: data.submenu|| []
        });
        return allServices.data;
    }
    catch (error) {
        return error;
    }
}
export const addServiceSub = async (data) => {
    try {
        const allServices = await api.put(`/services/update/${data.id}`,{
            submenu: data.submenu
        });
        return allServices.data;
    }
    catch (error) {
        return error;
    }
}

export const getContacts = async () => {
    try {
        const allContacts = await api.get("/contacts");
        return allContacts.data;
    }
    catch (error) {
        return error;
    }
}

export const getRfqs = async () => {
    try {
        const rfqs = await api.get("/rfqs");
        return rfqs.data;
    }
    catch (error) {
        return error;
    }
}
export const getRfqById = async (id) => {
    try {
        const rfqs = await api.get(`/rfqs/${id}`,{
            params: {
                id: id
            }
        });
        return rfqs.data;
    }
    catch (error) {
        return error;
    }
}

