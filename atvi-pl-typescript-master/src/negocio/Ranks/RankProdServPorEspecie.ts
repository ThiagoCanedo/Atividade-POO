import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Listagem from "../listagem";



let produtosDaEspecie:Array<Produto> = []

export default class ProdutosMaisConsumidosEspecie extends Listagem {
    private listaProdutos : Array<Produto>
    private entrada :Entrada

    constructor(listaProdutos : Array<Produto>){
        super()
        this.listaProdutos= listaProdutos
        this.entrada= new Entrada()
    }

    private listaPorEspecie (especie:string){
        for (let prod of this.listaProdutos){
            if (prod.getEspecie == especie)
                produtosDaEspecie.push (prod)
        }
    }

    private rankear(produto:Array<Produto>){
        return produto.sort((a,b)=>b.getQuantidade-a.getQuantidade)
    }



        public listar(): void {
            console.log(`-----Inicio listagem-----`)
            let EspecieInput = this.entrada.receberTexto(' Insira a Especie para conferir : ');
            this.listaPorEspecie(EspecieInput)
            let produtosRank = this.rankear(produtosDaEspecie) 

            produtosRank.forEach((prod, index)=>{
                console.log(`# ${index} -> ${prod.getNome} $ ${prod.getValor}`)
            })
        }
    }




