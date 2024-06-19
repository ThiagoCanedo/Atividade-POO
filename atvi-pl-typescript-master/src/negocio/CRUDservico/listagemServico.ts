import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Listagem from "../listagem";

export default class ListagemServico extends Listagem{

    public servicos: Array<Servico>
    public entrada: Entrada
    
    constructor(servicos: Array<Servico>){

        super()
        this.servicos=servicos
        this.entrada=new Entrada()

    }

public listar(): void {

    console.log(`\n ------ Inicio listagem ------ \n`)

    for(let prod of this.servicos){
        
        let nome = prod.getNome
        let valor = prod.getValor
        console.log(`${nome} = R$ ${valor.toFixed(2)}`)
        console.log(`\n ------------------------- \n`)

    }
}
}

