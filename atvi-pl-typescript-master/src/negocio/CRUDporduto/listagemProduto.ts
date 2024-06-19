import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Listagem from "../listagem";

export default class ListagemProduto extends Listagem{
    
    public produtos: Array<Produto>
    public entrada: Entrada
    

    constructor(produtos: Array<Produto>){

        super()
        this.produtos=produtos
        this.entrada=new Entrada()
    }

public listar(): void {
    console.log(`\n ------ Inicio listagem ------ \n`)
    for(let prod of this.produtos){
        let nome = prod.getNome
        let valor = prod.getValor
        let qnt = prod.getQuantidade
        console.log(`${nome} = R$ ${valor.toFixed(2)} | Un: ${qnt}`)
        console.log(`\n ------------------------- \n`)
    }
}
}