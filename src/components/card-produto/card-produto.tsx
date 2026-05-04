import Link from "next/link";
import styles from "./card-produto.module.css"

interface Produto{
    titulo: string, 
    descricao: string, 
    img: string, 
    preco: number,
    produtoID: number
}

const CardProduto = ({titulo, descricao, img, preco, produtoID}: Produto) => {
    return(
        <article id={styles.card}>
            <Link href = {"/detalhe-produto/" + produtoID}>
            <img src={img} alt="Imagem do produto vendido pela loja" />
            </Link>
            <h3>{titulo}</h3>
                <p id={styles.descricao_produto}>{descricao}</p>
            <div id={styles.rodape_card}>
                <p id={styles.preco}>{formatarPreco(preco)}</p>
                <div id={styles.botoes_admin}>
                    <button>
                    <img src="../imgs/editar.svg" alt="icone de editar" />
                    </button>
                    <button>
                    <img src="../imgs/trash.svg" alt="icone de lixeira" />
                    </button>
                </div>
            </div>
        </article>
    )
}

export default CardProduto;