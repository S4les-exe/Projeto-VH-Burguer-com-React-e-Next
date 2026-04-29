import { api } from "./api";

type Produto = {
    nome: string,
    descricao: string, 
    preco: string, 
    imagem: File | null, 
    categoriasId: number[]
}

export async function cadastrarProduto(dados: Produto){
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

        console.log("eba deu bom demaiziiiiiiiiiiiiiiiiiiiiiiiiii")

    }catch(error:any){
        throw new Error(error.message);
    }
}