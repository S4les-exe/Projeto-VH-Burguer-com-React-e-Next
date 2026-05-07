import Footer from "@/components/footer/footer";
import styles from "./categoria.module.css";
import SubHeader from "@/components/sub-header/sub-header";
import React, { useEffect, useState } from "react"
import Link from "next/link";
import { cadastrarCategoria } from "../api/categoriaService";
import { ToastContainer, toast } from "react-toastify";
import { verificarAutenticacao } from "@/utils/auth";
import { useRouter } from "next/navigation"; 

const Categoria = () => {

    const[categoria, setCategoria] = useState<string>("")
    const[estaAutenticado, setEstaAutenticado] = useState(false);
    const router = useRouter()

    const notificacao = (msg: string) => toast.success(msg);
    const erro = (msg: string) => toast.error(msg);

    async function cadastrar(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        try{
            await cadastrarCategoria(categoria);
            notificacao("Cadastro realizado com sucesso!");
        }catch(error: any){
            erro(error.message);
        }
    }

    useEffect(() =>{
          if(!verificarAutenticacao()){
            router.push("/home")
          }

        }, [])

    return (
        <>
        <ToastContainer/>
            <SubHeader/>
            <section id={styles.cadastro_categoria}>
                <h1>CRIAR CATEGORIA</h1>
                <form action="" id={styles.formulario} onSubmit={cadastrar}>
                    <div id={styles.campo_form}>
                        <label htmlFor="">Nome Categoria</label>
                        <input type="text" placeholder="Digite a categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)}/>
                    </div>
                    <div id={styles.botoes}>
                        <button id={styles.botao_salvar} type="submit">Salvar</button>
                        <Link href='/produto' id={styles.botao_cancelar}>Cancelar</Link>
                    </div>
                </form>
            </section>
            <Footer/>
        </>
    )
}

export default Categoria;