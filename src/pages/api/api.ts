//COLOCAR AS CONFIGS DA API QUE ESTA NA MAQUINA
import axios from "axios";

//quando subir pra nuvem 
const apiLocal = "https://localhost:7057/api/";
const apiRemota = "";

//criar um endereco da api dentro do axios 
export const api = axios.create({
    baseURL: apiLocal
})