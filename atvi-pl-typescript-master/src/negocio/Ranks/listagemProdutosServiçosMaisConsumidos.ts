import Produto from "../../modelo/produto";
import Servico from "../../modelo/servico";
import Listagem from "../listagem";


type pontuacao={
    nome:string
    qnt:number
    
}



export default class ListaGeralMaisConsumidos extends Listagem{
    private registroServico : Array<Servico>
    private registroProduto : Array<Produto>
    private TotalServico : Array<pontuacao>
    private TotalProduto : Array<pontuacao>
    

    
    constructor(registroServico : Array<Servico>,registroProduto:Array<Produto>){
        super()
        this.registroServico = registroServico
        this.registroProduto = registroProduto
        this.TotalServico = []
        this.TotalProduto = []

    }


    private verificarNomeExistente(nome: string, lista: pontuacao[]){
        return lista.some(item => item.nome === nome);
    }

    private rankear(prodServ:Array<pontuacao>){
        return prodServ.sort((a,b)=>b.qnt - a.qnt)
    }
    


    private pontuaçãoProd(registroProduto:Array<Produto>):void{
        for (let prod of registroProduto){
            let nome:string = prod.getNome
            let qnt:number = prod.getQuantidade
            let produtoNovo:pontuacao ={nome,qnt}

            if (this.verificarNomeExistente(nome,this.TotalProduto)){
                let index = this.TotalProduto.findIndex((produtoIgual)=> produtoIgual.nome === nome )
                if(index !== -1 ){
                    this.TotalProduto[index].qnt+=qnt
                }
            }
            else{
                this.TotalProduto.push(produtoNovo)
            }
            
        }
    }
    private pontuacaoServ(registroServico:Array<Servico>):void{
        for (let serv of registroServico){
            let nome= serv.getNome
            let qnt= 1
            let servicoNovo:pontuacao={nome,qnt}

            if (this.verificarNomeExistente(nome,this.TotalServico)){
                let index = this.TotalServico.findIndex((servicoIgual)=>servicoIgual.nome ===nome)
                if(index!==-1){
                    this.TotalServico[index].qnt+=qnt
                }
            }
            else{
                this.TotalServico.push(servicoNovo)
            }
        }
    }
   



    public listar(): void {
        this.TotalServico = []
        this.TotalProduto = []
        
        this.pontuaçãoProd(this.registroProduto)
        this.pontuacaoServ(this.registroServico)

        const ProdRankeado:Array<pontuacao> = this.rankear(this.TotalProduto)
        const ServRankeado:Array<pontuacao> = this.rankear(this.TotalServico)
        console.log(this.TotalProduto)
        console.log(this.TotalServico)
        
        
        console.log(`Inicio listagem dos mais consumidos \n`)
        console.log(`Produtos:`)
        
        for (let i = 0; i < Math.min(10, ProdRankeado.length); i++) {
            let Prod = ProdRankeado[i];
            console.log(`# ${i + 1} --> ${Prod.nome}`);
        }

        console.log(`Serviços:`);
        for (let i = 0; i < Math.min(10, ServRankeado.length); i++) {
            let Serv = ServRankeado[i];
            console.log(`# ${i + 1} --> ${Serv.nome}`);
        }
   
}
}