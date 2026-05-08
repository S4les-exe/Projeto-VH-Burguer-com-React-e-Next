import { useState } from "react";
import styles from "./header.module.css";

const Header = () => {

    const[menuAberto, setMenuAberto] = useState(false);

    function mostrarMenu(){
        setMenuAberto(!menuAberto)
    }

    return(
        <header id={styles.header}>
            <div className={`${styles.container} layout_guide`}>
            <img src="../imgs/Logo_VH_Burguer.svg" alt="Logo do VH Burguer que contem como plano de fundo um hamburguer" id={styles.logo}/>
            <nav className={menuAberto? styles.nav_menu_aberto : styles.menu_nav}>
                <a href="#destaques">Destaques</a>
                <a href="#cardapio">Cardápios</a>
                <a href="#unidades">Unidades</a>
                <a href="login">Login</a>
            </nav>
            <button id={styles.btn_icon} onClick={mostrarMenu}>
                <img src="../imgs/icon_hamburguer.svg" alt="Icone que representa um hamburguer para acessar o menu lateral" />
            </button>
            </div>
        </header>
    )
}

export default Header;