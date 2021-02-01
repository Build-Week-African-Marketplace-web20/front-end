import {axiosWithAuth} from './axiosWithAuth'
export const getInventory = () => {
    return axiosWithAuth().get(`/owner/${id}`)
        .then(res=>res)
        .catch(err=>err)
}