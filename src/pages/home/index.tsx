import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import styles from "./home.module.css";
import ListaProduto from "@/components/lista-produto/lista-produto";
import CardProduto from "@/components/card-produto/card-produto";

const Home = () => {
    return (
        <>
            <Header/>
            <main>
            <section id={styles.banner}>
                <h1>BEM-VINDO AO VH BURGUER</h1>
                <img src="../imgs/foto_de_hamburgueres.png" alt="Imagem de tres hamburgueres posicionados lado a lado" />
                <div id={styles.area_botoes}>
                    <button className={styles.botao_atendente}>Chamar atendente</button>
                    <button className={styles.botao_cardapio}>Ver cardápio</button>
                </div>
            </section>
            <section className={styles.destaques} id="destaques">
                <div id={styles.destaques_conteudo}>
                    <div id={styles.mais_pedidos}>
                        <p>Os queridinhos da galera</p>
                        <h2>MAIS PEDIDOS</h2>
                    </div>
                    <div id={styles.dobradinha}>
                        <div id={styles.muito_bacon}>
                            <p>Lanches com</p>
                            <h2>MUITO BACON</h2>
                        </div>
                        <div id={styles.super_combos}>
                            <p>Se tiver com muita fome</p>
                            <h2>SUPER COMBOS</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.cardapio} id="cardapio">
                <h1 id={styles.titulo_cardapio}>CARDÁPIO</h1>
                <ListaProduto/>
            </section>
            <section className={styles.unidades} id="unidades">
                <div id={styles.conteudo_unidades}>
                    <div id={styles.enderecos_unidades}>
                        <h2>NOSSAS UNIDADES</h2>
                        <ul id={styles.lista_enderecos}>
                            <li>Centro - Av. Aurora, 742</li>
                            <li>Jardim - Av. das Palmeiras, 1280</li>
                            <li>Norte - Av.Horizonte, 305</li>
                            <li>Sul - Av. Nova Esperança, 910</li>
                        </ul>
                    </div>
                </div>
            </section>
            </main>
            <Footer/>
        </>
    )
}

export default Home;