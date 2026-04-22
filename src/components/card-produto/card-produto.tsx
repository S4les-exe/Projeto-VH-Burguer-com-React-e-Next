import styles from "./card-produto.module.css"

const CardProduto = () => {
    return(
        <article id={styles.card}>
            <img src="../imgs/HamburguerAlcatraComBacon.png" alt="Imagem de um hamburguer em cima de uma mesa " />
            <h3>Monster</h3>
                <p>Hamburguer brutal, suculento e exageradamente saborosa.</p>
            <div id={styles.rodape_card}>
                <p id={styles.preco}>R$ 35,00</p>
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