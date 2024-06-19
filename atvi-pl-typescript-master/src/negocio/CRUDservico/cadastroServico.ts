import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Cadastro from "../cadastro";

export default class CadastroServico extends Cadastro{

    public servicos : Array<Servico>
    public entrada : Entrada

    
    constructor(servicos:Array<Servico>){

        super()
        this.servicos = servicos
        this.entrada = new Entrada()

    }

    public cadastrar(): void {

        console.log(`\n ------inicio cadastro produto------ \n`)
        let nome = this.entrada.receberTexto(`Qual o nome do produto a cadastrar? `)
        let valor = this.entrada.receberNumero(`Qual o valor deste produto? `)
        let qnt = 1
        let servicos = new Servico(nome, valor, qnt)
        this.servicos.push(servicos)

    }
}