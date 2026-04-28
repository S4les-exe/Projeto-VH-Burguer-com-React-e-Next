import secureLocalStorage from "react-secure-storage";
import { api } from "./api";

export async function login(email:string, senha: string){
    try{
        //requisição
        const response = await api.post("Autenticacao/login", {email, senha});

        //console.log("eba deu certo");
        //console.log(response.data.token);
        const token = response.data.token;

        secureLocalStorage.setItem("Token", token); //vai criar o token, mas nao criptografa(temos q criptografar) entao instalamos o secure local storage
    }
    catch(error: any)
    {
        throw new Error("Email ou senha invalidos");
    }
}

                                                                                                                                                                                                                                                                                                                                                                                                                                        