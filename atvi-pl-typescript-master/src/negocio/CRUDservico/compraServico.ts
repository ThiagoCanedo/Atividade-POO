import Entrada from "../../io/entrada";
import Compra from "../compra";
import Cliente from "../../modelo/cliente";
import Servico from "../../modelo/servico";

export default class CompraServico extends Compra {

    private servicos: Array<Servico>
    private entrada: Entrada
    private clientes: Array<Cliente>
    private registroServ:Array<Servico>

    constructor(servicos: Array<Servico>, clientes: Array<Cliente>,registroServ:Array<Servico>) {

        super()
        this.servicos = servicos
        this.registroServ = registroServ
        this.clientes = clientes
        this.entrada = new Entrada
    }

    public comprar(): void {

        console.log(`\n ------ inicio compra ------ \n`)
        let inputComprador = this.entrada.receberTexto(`Insira o Cpf do comprador: `)
        let clienteEncontrado = this.clientes.find(cliente => cliente.getCpf.getValor === inputComprador)
        

        if (clienteEncontrado) {
            let inputServico = this.entrada.receberTexto(`Qual o serviço a comprar? `);
            let servicoEncontrado = this.servicos.find(servico => servico.getNome === inputServico);

            if (servicoEncontrado) {
                if (servicoEncontrado.getQnt > 0) {
                    let nome = servicoEncontrado.getNome;
                    let valor = servicoEncontrado.getValor;
                    let servicoCesta = new Servico(nome, valor, 1);
                    clienteEncontrado.servicosConsumidos.push(servicoCesta);
                    this.registroServ.push(servicoCesta);
                    

                    console.log(`\n Serviço comprado com sucesso!`);
                } else {
                    console.log(`\n Serviço indisponível!`);
                }
            } else {
                console.log(`\n O serviço digitado não existe ou foi digitado incorretamente.`);
            }
        } else {
            console.log(`\n CPF do comprador não encontrado.`);
        }
    }
}
