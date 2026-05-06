import Link from "next/link";
import styles from "./card-produto.module.css"
import { formatarPreco } from "@/utils/formatacao";
import { useEffect } from "react";

interface Produto{
    titulo: string, 
    descricao: string, 
    imagemUrl: string, 
    preco: number,
    produtoID: number,
    //Criando uma props que recebe uma função 
    onDelete: (produtoId: number) => void 
}

const CardProduto = ({titulo, descricao, imagemUrl, preco, produtoID, onDelete}: Produto) => {
    return(
        <article id={styles.card}>
            <Link href = {"/detalhe-produto/" + produtoID}>
            <img src={imagemUrl} alt="Imagem do produto vendido pela loja" />
            </Link>
            <h3>{titulo}</h3>
                <p id={styles.descricao_produto}>{descricao}</p>
            <div id={styles.rodape_card}>
                <p id={styles.preco}>{formatarPreco(preco)}</p>
                <div id={styles.botoes_admin}>
                    
                    <Link href={"/produto?id=" + produtoID}>
                        <img src="../imgs/editar.svg" alt="icone de editar" />
                    </Link>

                    <Link href={"/historico/" + produtoID}>
                            <img src="../imgs/vector.svg" alt="icone de informações" />
                    </Link>
                    
                    <button onClick={() => onDelete(produtoID)}>
                        <img src="../imgs/trash.svg" alt="icone de lixeira" />
                    </button>
                </div>
            </div>
        </article>
    )
}

export default CardProduto;