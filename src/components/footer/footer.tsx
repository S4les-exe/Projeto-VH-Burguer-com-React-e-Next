import styles from "./footer.module.css";

const Footer = () => {
    return(
        <footer id={styles.footer}>
            <div className={`${styles.container} layout_guide`}>
                <div className={styles.parte_superior}>
                    <img src="../imgs/Logo_footer.svg" alt="Nome VH Burguer" id={styles.logo_footer}/>
                    <nav id={styles.redes_sociais}>
                        <a href=""><img src="../imgs/tiktok.png" alt="Logo do tiktok em cor laranja" /></a>
                        <a href=""><img src="../imgs/face.png" alt="Logo do facebook em cor laranja" /></a>
                        <a href=""><img src="../imgs/insta.png" alt="Logo do instagram em cor laranja" /></a>
                        <a href=""><img src="../imgs/youtube.png" alt="Logo do youtube em cor laranja" /></a>
                    </nav>
                </div>
            <hr />
            <p>Copyright © 2025 VH Burguer | Todos os direitos reservados</p>
            </div>
        </footer>
    )
}

export default Footer;