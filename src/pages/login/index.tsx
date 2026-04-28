import { useState } from "react";
import { login } from "../api/authService"
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
//ESTRUTURA PADRÃO 
import styles from "./login.module.css";
//primeira letra sempre maiuscula 
const Login = () => {

    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");

    const router = useRouter();
    const notificacao = (msg: string) => toast(msg);
    const erro = (msg: string) => toast.error(msg);

    async function autenticar(e: React.FormEvent <HTMLFormElement>){
        e.preventDefault();
        try{
            await login(email, senha); //await vai dar uma segurada no sistema 
            notificacao("Login bem sucedido!")

            setTimeout(() => {
                router.push("/home");
            }, 2000); //2 segundos

        }catch(error: any){
            erro(error.message);
        }
    }

    return(
        <>
        <ToastContainer />
        <main id={styles.main}>
            <img src="../imgs/hamburguer_login.png" alt="Hamburguer com ingrendientes flutuando em camadas sobre um fundo escuro"/>
            <div id={styles.campo_login}>
                <h1>LOGIN</h1>
                <form id={styles.formulario} onSubmit={autenticar}>
                    <div className={styles.campo_form}>
                        <label htmlFor="email">E-mail</label>
                        <input type="text" name="email" placeholder="email@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className={styles.campo_form}>
                        <label htmlFor="senha">Senha</label>
                        <input type="password" placeholder="*******" value={senha} onChange={(e) => setSenha(e.target.value)} required/>
                    </div>
                    <a id={styles.esq_senha}>Esqueceu sua senha?</a>
                    <button>Entrar</button>
                </form>
            </div>
        </main>
        </>
    )
} 

export default Login;