import CardProduto from "../card-produto/card-produto";
import styles from "./lista-produto.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";
import { useEffect, useState } from "react";
import { excluirProduto, listarProduto } from "@/pages/api/produtoService";
import { erro, notificacao, toastConfirmarExclusao } from "@/utils/toast";
import { verificarAutenticacao } from "@/utils/auth";

interface Produto{
    produtoID: number,
    nome: string, 
    preco: number, 
    descricao: string,
    imagemUrl: string,
    statusProduto: boolean 
}

const ListaProduto = () => {

    const[produtos, setProdutos] = useState<Produto[]>([]);
    //salvar as informacoes de filtro 
    const[ordem, setOrdem] = useState("todos");
    //salva oque for escrito pelo usuario 
    const[pesquisa, setPesquisa] = useState("");
    // SALVA A INFO DO USUARIO LOGADO
    const[estaAutenticado, setEstaAutenticado] = useState(false);


    async function listar(){
        try{
            const lista =  await listarProduto();
            setProdutos(lista);
            console.log(lista);
        }catch(error : any){
            console.log(error.message)
        }
    }

    useEffect(() => {
        listar();
    }, [])

    async function confirmarExclusao(produtoId: number){
        toastConfirmarExclusao(async () => {
            try{
                await excluirProduto(produtoId);
                setProdutos((listaAtual) => 
                    listaAtual.map((produto) => 
                        produto.produtoID === produtoId 
                            ? {...produto, statusProduto: false}
                            : produto
                    )
                )

                notificacao("Produto inativado!")
            } catch(error: any){
                erro(error.message)
            }
        })
    }

    useEffect(() => {
        setEstaAutenticado(verificarAutenticacao());
        listar();
    }, [])

    //sort -> organizar ou ordenar o array
    const produtosFiltrados = produtos.filter((produto) => produto.nome.toLowerCase().includes(pesquisa.toLowerCase()))
    
    .sort((a, b) => {
        if(ordem === "menor_valor"){
            return a.preco - b.preco
        }else if(ordem === "maior_valor"){
            return b.preco - a.preco
        }

        return a.produtoID - b.produtoID;
    });

    return (
        <main>
            <div id={styles.botoes_cardapio}>
                <select id={styles.botao_filtrar} value={ordem} onChange={(e) => setOrdem(e.target.value)}>
                    Filtrar
                    {/*<FontAwesomeIcon icon={faSliders}/>*/}
                    <option value="todos">Todos</option>
                    <option value="menor_valor">Menor valor</option>
                    <option value="maior_valor">Maior valor</option>
                </select>
                <div>
                    <label htmlFor="pesquisa">Pesquise</label>
                    <input type="text" 
                    name="pesquisa"
                    id=""
                    placeholder="Digite o nome do produto"
                    value={pesquisa}
                    onChange={(e) => setPesquisa(e.target.value)}/>
                </div>
                {estaAutenticado && ( <div id={styles.botoes_direita}>
                    <Link href="/promocoes" className={styles.botao}>Todas as promoções</Link>
                    <Link href="/produto" className={styles.botao}>Adicionar Produto</Link>
                </div>)}
            </div>
            <div id={styles.card_produtos}>
                {produtosFiltrados.length > 0 ? produtosFiltrados.map((item) => (
                    <CardProduto
                        key={item.produtoID}
                        produtoID={item.produtoID}
                        titulo={item.nome}
                        descricao={item.descricao}
                        preco={item.preco}
                        imagemUrl={item.imagemUrl}
                        onDelete={confirmarExclusao}
                        estaLogado={estaAutenticado}
                    />
                )) : (
                    <p>Carregando produto...</p>
                )}
            </div>
        </main>
    )
}

export default ListaProduto;