import CardProduto from "../card-produto/card-produto";
import styles from "./lista-produto.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders } from '@fortawesome/free-solid-svg-icons'

const ListaProduto = () => {
    return (
        <>
            <div>
                <button>
                    Filtrar
                    <FontAwesomeIcon icon={faSliders}/>
                </button>
                <div>
                    <button>Todas as promoções</button>
                    <button>Adicionar Produto</button>
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