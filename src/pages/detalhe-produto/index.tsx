import Footer from "@/components/footer/footer";
import styles from "./detalhe-produto.module.css";
import SubHeader from "@/components/sub-header/sub-header";
import { useEffect, useState } from "react";
import { listarPorId } from "../api/produtoService";
import { useParams } from "next/navigation";
import { formatarPreco } from "@/utils/formatacao";

interface Produto{
    nome: string;
    descricao: string;
    preco: number;
    imagemUrl: string;
    categorias: string[]
}

const DetalheProduto = () => {

    const[produto, setProduto] = useState<Produto>();

    const params = useParams();

    const id = params?.id;

    async function listarProduto(){
        try{
            const response = await listarPorId(Number(id));
            //console.log(response)
            setProduto(response)
        }catch(error : any){
            console.log(error.message)
        }
    }
    useEffect(() => {
        if(!id) return;

        setTimeout(() => {
            listarProduto();
        }, 1000); //1 segundo
    }, [id]);

    return (
        <>
            <SubHeader/>
            <section id={styles.detalhes_produto}>
                <div id={styles.conteudo_pagina}>
                    {produto ? (
                        <>
                        <h1>DETALHES {produto?.nome}</h1>
                        <img src={produto.imagemUrl} alt="Imagem do produto a venda" />
                        <div id={styles.informacoes_produto}>
                            <div id={styles.parte_esquerda}>
                                <h3>Descrição</h3>
                                <p>{produto.descricao}</p>
                            </div>
                        <div id={styles.parte_direita}>
                            <h3>Preço(R$)</h3>
                            <p>{formatarPreco(produto.preco)}</p>
                            <ul><h3>Categorias</h3>
                                {produto.categorias.map((cat) => (
                                    <li key={cat}>{cat}</li>
                                ))}
                            </ul>
                        </div>
                </div>
                    </>
                    ) : (<p>Carregando produto...</p>)}
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default DetalheProduto;