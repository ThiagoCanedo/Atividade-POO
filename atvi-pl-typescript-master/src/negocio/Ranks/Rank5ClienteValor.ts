import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";




export default class Rankear5ClientesConsumo extends Listagem{
    private listaClientes :Array<Cliente>

    constructor(listaClientes: Array<Cliente>){
        super()
        this.listaClientes = listaClientes
    } 

    
    
    private calcularTotal_valor(cliente: Cliente) {
        let totalValor = 0;
            // Somar os valores dos serviços
        for (const servico of cliente.getServicosConsumidos) {
        totalValor += servico.getValor;
        }
            // Somar os valores dos produtos
        for (const produto of cliente.getProdutosConsumidos) {
        totalValor += produto.valor;
        }
        return totalValor;
        }
        
    public listar():void{
            
            const listaDeClientesRankeados =  this.listaClientes.sort((a, b) => {
                const pontuacaoA = this.calcularTotal_valor(a);
                const pontuacaoB = this.calcularTotal_valor(b);
                return pontuacaoB - pontuacaoA; // Classifique em ordem decrescente
                })
            let contador = 0
            
           while (contador <5 && contador < listaDeClientesRankeados.length ){
                let clienteRankeado = listaDeClientesRankeados[contador]
                console.log(`#${contador+1}-> ${clienteRankeado.nome}`)
                contador = contador +1
            }
            console.log(`--------------------------------------`)
            console.log(`\n`);
        }
        

}
