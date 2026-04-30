//COLOCAR AS CONFIGS DA API QUE ESTA NA MAQUINA
import axios from "axios";
import secureLocalStorage from "react-secure-storage";

//quando subir pra nuvem 
const apiLocal = "https://localhost:7057/api/";
const apiRemota = "";

//criar um endereco da api dentro do axios 
export const api = axios.create({
    baseURL: apiLocal
})

//Interceptors:
// e um interceptor do axios 
// ele intercepta (pega) toda requisição antes de ser enviada 
api.interceptors.request.use((config) => {
    const token = secureLocalStorage.getItem("Token");

    if(token){
        config.headers.Authorization = "Bearer" + token;
        //config.headers,Authorization = "Bearer ${token}";
    }
    
    return config 
});