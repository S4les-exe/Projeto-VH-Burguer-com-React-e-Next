import styles from "./header.module.css";

const Header = () => {
    return(
        <header id={styles.header}>
            <div className={`${styles.container} layout_guide`}>
            <img src="../imgs/Logo_VH_Burguer.svg" alt="Logo do VH Burguer que contem como plano de fundo um hamburguer" id={styles.logo}/>
            <nav id={styles.menu_nav}>
                <a href="">Destaques</a>
                <a href="">Cardápios</a>
                <a href="">Unidades</a>
                <a href="">Login</a>
            </nav>
            <button id={styles.btn_icon}>
                <img src="../imgs/icon_hamburguer.svg" alt="Icone que representa um hamburguer para acessar o menu lateral" />
            </button>
            </div>
        </header>
    )
}

export default Header;