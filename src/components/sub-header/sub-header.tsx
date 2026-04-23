import styles from "./sub-header.module.css";

const SubHeader = () => {
    return (
        <header id={styles.header}>
            <div className={`${styles.container} layout_guide`}>
                <img src="../imgs/Logo_footer.svg" alt="Logo do VH Burguer que contem como plano de fundo um hamburguer" id={styles.logo}/>
                <button id={styles.botao_voltar}>
                    <a href="home/#cardapio">Voltar</a>
                </button>
            </div>
        </header>
    )
}

export default SubHeader;