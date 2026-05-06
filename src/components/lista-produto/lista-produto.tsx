import CardProduto from "../card-produto/card-produto";
import styles from "./lista-produto.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";
import { useEffect, useState } from "react";
import { excluirProduto, listarProduto } from "@/pages/api/produtoService";
import { erro, notificacao, toastConfirmarExclusao } from "@/utils/toast";

interface Produto{
    produtoID: number,
    nome: string, 
    preco: number, 
    descricao: string,
    imagemUrl: string,
    statusProduto: boolean 
}

const ListaProduto = () => {

    const[produtos, setProdutos] = useState<Produto[]>([]);

    async function listar(){
        try{
            const lista =  await listarProduto();
            setProdutos(lista);
            console.log(lista);
        }catch(error : any){
            console.log(error.message)
        }
    }

    useEffect(() => {
        listar();
    }, [])

    async function confirmarExclusao(produtoId: number){
        toastConfirmarExclusao(async () => {
            try{
                await excluirProduto(produtoId);
                setProdutos((listaAtual) => 
                    listaAtual.map((produto) => 
                        produto.produtoID === produtoId 
                            ? {...produto, statusProduto: false}
                            : produto
                    )
                )

                notificacao("Produto inativado!")
            } catch(error: any){
                erro(error.message)
            }
        })
    }

    useEffect(() => {
        listar()
    }, [produtos])

    return (
        <>
            <div id={styles.botoes_cardapio}>
                <button id={styles.botao_filtrar}>
                    Filtrar
                    <FontAwesomeIcon icon={faSliders}/>
                </button>
                <div id={styles.botoes_direita}>
                    <Link href="/promocoes" className={styles.botao}>Todas as promoções</Link>
                    <Link href="/produto" className={styles.botao}>Adicionar Produto</Link>
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
                        imagemUrl={item.imagemUrl}
                        onDelete={confirmarExclusao}
                    />
                )) : (
                    <p>Carregando produto...</p>
                )}
            </div>
        </>
    )
}

export default ListaProduto;