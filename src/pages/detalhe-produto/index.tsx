import Footer from "@/components/footer/footer";
import styles from "./detalhe-produto.module.css";
import SubHeader from "@/components/sub-header/sub-header";
import { useState } from "react";
import { listarPorId } from "../api/produtoService";
import { useParams } from "next/navigation";

interface Produto{
    nome: string;
    descricao: string;
    preco: number;
    imagemUrl: string;
}

const DetalheProduto = () => {

    const[produtos, setProdutos] = useState<Produto>();

    const {id} = useParams();

    async function listarProduto(){
        try{
            const response = await listarPorId(3);
            console.log(response)
            setProdutos(response)
        }catch(error : any){
            console.log(error.message)
        }
    }

    return (
        <>
            <SubHeader/>
            <section id={styles.detalhes_produto}>
                <div id={styles.conteudo_pagina}>
                    <h1>DETALHES DO X-BACON</h1>
                    <img src="../imgs/HamburguerAlcatraComBacon.png" alt="Hamburguer em cima da mesa" />
                    <div id={styles.informacoes_produto}>
                        <div id={styles.parte_esquerda}>
                            <h3>Descrição</h3>
                            <p>Um pão brioche macio segura a fera: duas (ou três) carnes altas e suculentas, queijo cheddar derretido escorrendo pelas laterais, bacon crocante, cebola caramelizada no ponto adocicado, alface fresca, tomate e um molho especial intenso que amarra tudo. Para completar o ataque, uma camada extra de onion rings ou molho defumado que transforma cada mordida numa explosão.</p>
                        </div>
                        <div id={styles.parte_direita}>
                            <h3>Preço(R$)</h3>
                            <p><s>R$45,00</s> R$35,00</p>
                            <ul><h3>Categoria</h3></ul>
                            <li>Premium</li>
                            <li>Artesanal</li>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default DetalheProduto;