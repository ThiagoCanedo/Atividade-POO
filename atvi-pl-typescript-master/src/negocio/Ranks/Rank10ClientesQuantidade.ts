
import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";
import Produto from "../../modelo/produto";


// já estou salvando na variavel o nome e a qnt total consumida, preciso ver como comparar os maiores dessa lista 
type qntProdConsumido = {
    nome:string;
    qnt:number
}

export default class Listagem10ClientesEmQuantidades extends Listagem{
    public clientes: Array<Cliente>
    public listaQntConsumido: Array<qntProdConsumido> = [];
    
    constructor(clientes: Array<Cliente>){
        super()
        this.clientes=clientes
    }

public listar():void{
    
    console.log(`\n ------Inicio Listagem 10 clientes que mais consumiram------ \n`)
    
    var qntProduto= 0
    

    for (let cliente of this.clientes){
        for(let prod of cliente.produtosConsumidos ){
            qntProduto += prod.quantidade
        }
        var inputCli : qntProdConsumido ={nome: cliente.nome , qnt: qntProduto }
        this.listaQntConsumido.push(inputCli)
        }
    
    this.listaQntConsumido.sort((a,b)=> a.qnt - b.qnt)
    
    let contador = 0
    while (contador <10){

        let clienteRankeado = this.listaQntConsumido[contador]    
        console.log(`# ${contador+1} --> ${clienteRankeado.nome}`)
        contador +=1
    } 
}
}



