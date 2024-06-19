import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListagemProdServCliente extends Listagem{
      private clientes: Array<Cliente>
      private entrada: Entrada

      constructor(clientes: Array<Cliente>){
        super()
        this.clientes= clientes
        this.entrada= new Entrada();
      }

  public listar(): void {

    let cpfInput = this.entrada.receberTexto(' Insira o Cpf : ');
    for (let cliente of this.clientes){
        if (cliente.getCpf.getValor == cpfInput){
            console.log(`\n ------ Inicio listagem produtos e serviços ------- \n`)
            console.log(cliente.getProdutosConsumidos)
            console.log(cliente.getServicosConsumidos)
            console.log(`\n`);
    }
}
}
}