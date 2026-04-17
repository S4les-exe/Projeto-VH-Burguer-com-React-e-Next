//ESTRUTURA PADRÃO 
import styles from "./login.module.css";
//primeira letra sempre maiuscula 
const Login = () => {
    return(
        <>
        <main id={styles.main}>
            <img src="../imgs/hamburguer_login.png" alt="Hamburguer com ingrendientes flutuando em camadas sobre um fundo escuro"/>
            <div id={styles.campo_login}>
                <h1>LOGIN</h1>
                <form id={styles.formulario}>
                    <div className={styles.campo_form}>
                        <label htmlFor="email">E-mail</label>
                        <input type="text" name="email" placeholder="email@example.com" required />
                    </div>
                    <div className={styles.campo_form}>
                        <label htmlFor="senha">Senha</label>
                        <input type="password" placeholder="*******" required/>
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