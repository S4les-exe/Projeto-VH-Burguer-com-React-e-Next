import CardProduto from "../card-produto/card-produto";
import styles from "./lista-produto.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders } from '@fortawesome/free-solid-svg-icons'

const ListaProduto = () => {
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
            <CardProduto/>
            <CardProduto/>
            <CardProduto/>
            <CardProduto/>
            <CardProduto/>
            <CardProduto/>
            <CardProduto/>
        </>
    )
}

export default ListaProduto;