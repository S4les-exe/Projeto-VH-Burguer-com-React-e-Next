import secureLocalStorage from "react-secure-storage";

export function verificarAutenticacao(){
    const token = secureLocalStorage.getItem("Token");

    return !!token;

    //token passa a ser booleano 
    //se SIM existir informacao dentro do token, ele retorna TRUE 
    //se NÃO existir info, retorna FALSE 
}