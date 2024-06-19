import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Cadastro from "../cadastro";

export default class CadastroProduto extends Cadastro{
    
    public produtos : Array<Produto>
    public entrada : Entrada

    constructor(produtos:Array<Produto>){

        super()
        this.produtos = produtos
        this.entrada = new Entrada()

    }


    public cadastrar(): void {

        console.log(`\n ------inicio cadastro produto------ \n`)
        let nome = this.entrada.receberTexto(`Qual o nome do produto a cadastrar?\n`)
        let valor = this.entrada.receberNumero(`Qual o valor deste produto?\n`)
        let quantidade = this.entrada.receberNumero(`Qual a quantidade de itens?\n`)
        let especie = this.entrada.receberTexto(`Qual a especie relacionada ao produto?\n`)
        let produtos = new Produto(nome, valor,quantidade,especie)
        this.produtos.push(produtos)

    }
}