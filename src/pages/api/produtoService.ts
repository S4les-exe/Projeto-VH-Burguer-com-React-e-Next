import { api } from "./api";

// produtoFormulario = base paara caadastro de produto
type ProdutoFormulario = {
    nome: string,
    descricao: string, 
    preco: string, 
    imagem: File | null, 
    categoriasId: number[]
}

//ProdutoListagem => base para receber o produto da api 
interface ProdutoListagem {
    nome: string,
    descricao: string, 
    preco: string, 
    imagem: File | null, 
    categoriasId: number[]
    imagemUrl: string,
    statusProduto: boolean
}

export async function cadastrarProduto(dados: ProdutoFormulario){
    try{
        const formData = new FormData();

        formData.append("nome", dados.nome); //anexar
        formData.append("descricao", dados.descricao);
        formData.append("preco", dados.preco);
        if(dados.imagem){
            formData.append("imagem", dados.imagem);
        }
    
        dados.categoriasId.forEach((id) => {
            formData.append("categoriaIds", id.toString());
        })

        await api.post("Produto", formData);

      //console.log("eba deu bom demaiziiiiiiiiiiiiiiiiiiiiiiiiii")

    }catch(error:any){
        throw new Error(error.response.data);
    }
} 

export async function listarProduto(){
    try{
        const response = await api.get("Produto");

        //filtra somente produtos ativos 
        const produtosAtivos = response.data.filter(
            (produto : ProdutoListagem) => produto.statusProduto === true
        );
        
        //adiciona a url completa da imagem
        const produtos = produtosAtivos.map((produto : ProdutoListagem) => ({
            ...produto,
            imagemUrl: `${api.defaults.baseURL}${produto.imagem}`
        }));
        
        return response.data;

    }catch(error: any){
        throw new Error(error.response.data);
    }
}

export async function listarPorId(id: number){
    try{
        const response = await api.get("Produto/" + id);

        const produtos = {
            ...response.data,
            imagemUrl: `${api.defaults.baseURL}${response.data.imagemUrl}`
        };

        return produtos;
    }catch(error: any){
        throw new Error(error.response.data)
    }
}

export async function excluirProduto(produtoId : number){
    try{
        const response = await api.delete("Produto/" + produtoId)
    
        console.log(response);
    }catch(error:any){
        throw new Error(error.response.data)
    }
}

export async function editarProduto(produtoId: number, dados: ProdutoFormulario){
    try{
        const formData = new FormData();

        formData.append("nome", dados.nome); //anexar
        formData.append("descricao", dados.descricao);
        formData.append("preco", dados.preco);
        if(dados.imagem){
            formData.append("imagem", dados.imagem);
        }
    
        dados.categoriasId.forEach((id) => {
            formData.append("categoriaIds", id.toString());
        })

        await api.put("Produto/" + produtoId, formData);

    }catch(error:any){
        throw new Error(error.response.data);
    }
}