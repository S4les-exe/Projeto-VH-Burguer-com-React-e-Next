import Footer from "@/components/footer/footer";
import styles from "./categoria.module.css";
import SubHeader from "@/components/sub-header/sub-header";
import React, { useState } from "react"
import Link from "next/link";
import { cadastrarCategoria } from "../api/categoriaService";

const Categoria = () => {

    const[categoria, setCategoria] = useState<string>("")

    function cadastrar(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        cadastrarCategoria(categoria);
    }

    return (
        <>
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