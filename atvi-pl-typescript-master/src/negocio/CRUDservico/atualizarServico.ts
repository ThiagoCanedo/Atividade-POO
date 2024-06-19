import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Servico from "../../modelo/servico";

export default class AtualizarServico{
    
    public servicos:Array<Servico>
    public entrada: Entrada

    constructor(servicos:Array<Servico>){
        this.servicos=servicos
        this.entrada=new Entrada()

    }

    public atualizar (){

        console.log(`\n ------Inicio atualizar serviço ------ \n`)
        let servAtt= this.entrada.receberTexto(`Qual o nome do produto a atualizar? `)
        for(let serv of this.servicos){

            if (serv.getNome === servAtt){

                let opcao = this.entrada.receberNumero(`O que deseja atualizar? \n 1 - nome \n 2 - valor \n`)

                switch (opcao){

                    case 1:
                        serv.setNome = this.entrada.receberTexto(`Qual o nome do produto? `)
                        
                    case 2:
                        serv.setValor = this.entrada.receberNumero(`Qual o novo valor? `)

                }
            }
        }

    }



}