import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";

export default class AtualizarProduto{
    public produtos:Array<Produto>
    public entrada: Entrada

    constructor(produtos:Array<Produto>){
        this.produtos=produtos
        this.entrada=new Entrada()
    }

    public atualizar (){
        console.log(`\n ------Inicio atualizar produto ------ \n`)
        let prodAtt= this.entrada.receberTexto(`Qual o nome do produto a atualizar? `)
        for(let prod of this.produtos){
            if (prod.getNome === prodAtt){
                let opcao = this.entrada.receberNumero(`O que deseja atualizar? \n 1 - nome \n 2 - valor \n`)

                switch (opcao){
                    case 1:
                        prod.nome = this.entrada.receberTexto(`Qual o nome do produto? `)
                        
                    case 2:
                        prod.valor = this.entrada.receberNumero(`Qual o novo valor? `)
                }
            }
        }

    }



}