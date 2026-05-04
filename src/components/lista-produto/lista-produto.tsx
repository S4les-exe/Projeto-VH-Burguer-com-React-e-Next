import CardProduto from "../card-produto/card-produto";
import styles from "./lista-produto.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";
import { useState } from "react";
import { listarProduto } from "@/pages/api/produtoService";

interface Produto{
    produtoID: number,
    nome: string, 
    preco: number, 
    descricao: string,
    imagemUrl: string,
}

const ListaProduto = () => {

    const[produtos, setProdutos] = useState<Produto[]>([]);

    async function listar(){
        try{
            const lista =  await listarProduto();
            setProdutos(lista);
            console.log(lista)
        }catch(error : any){
            console.log(error.message)
        }
    }

    return (
        <>
            <div id={styles.botoes_cardapio}>
                <button id={styles.botao_filtrar}>
                    Filtrar
                    <FontAwesomeIcon icon={faSliders}/>
                </button>
                <div id={styles.botoes_direita}>
                    <button id={styles.botao}>Todas as promoções</button>
                    <button id={styles.botao}>Adicionar Produto</button>
                </div>
            </div>
            <div id={styles.card_produtos}>
                {produtos.length > 0 ? produtos.map((item) => (
                    <CardProduto
                        key={item.produtoID}
                        produtoID={item.produtoID}
                        titulo={item.nome}
                        descricao={item.descricao}
                        preco={item.preco}
                        img={item.imagemUrl}
                    />
                )): (
                    <p>Carregando produto...</p>
                )}
            </div>
        </>
    )
}

export default ListaProduto;