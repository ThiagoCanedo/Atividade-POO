import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente"


export default class AtualizarCliente{
    private clientes :Array<Cliente>
    private entrada :Entrada

    constructor(clientes :Array<Cliente>){
        this.clientes=clientes
        this.entrada= new Entrada()
   }

public atualizarCliente(){
    let cpfInput = this.entrada.receberTexto(' Insira o Cpf : ');
    for (let cliente of this.clientes){
        if (cliente.getCpf.getValor == cpfInput){

            let opcao = this.entrada.receberNumero("o que deseja atualizar?\n 1- Nome\n 2- NomeSocial \n")
          
            switch (opcao){
                case 1:
                    cliente.nome=this.entrada.receberTexto('Insira o nome do cliente: ')
                    break
            
                case 2:
                    cliente.nomeSocial=this.entrada.receberTexto('Insira o nome Social')
                    break
            }
            
        }

    }
}

}