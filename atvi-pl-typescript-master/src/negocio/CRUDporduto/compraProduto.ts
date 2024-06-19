import Entrada from "../../io/entrada";
import Compra from "../compra";
import Produto from "../../modelo/produto";
import Cliente from "../../modelo/cliente";


type pontuacao={
    nome:string
    qnt:number
}

export default class CompraProduto extends Compra {

    private produtos: Array<Produto>
    private entrada: Entrada
    private clientes: Array<Cliente>
    private registro: Array<Produto>

    constructor(produtos: Array<Produto>, clientes: Array<Cliente>, registro: Array<Produto>) {

        super()
        this.registro = registro
        this.produtos = produtos
        this.clientes = clientes
        this.entrada = new Entrada
    }

    public comprar(): void {
        console.log(`\n ------ Início da Compra ------ \n`);
        let inputComprador = this.entrada.receberTexto(`Insira o CPF do comprador: `);

        let clienteEncontrado = this.clientes.find(cliente => cliente.getCpf.getValor === inputComprador);

        if (clienteEncontrado) {
            let inputProduto = this.entrada.receberTexto(`Qual o produto a comprar? `);
            let produtoEncontrado = this.produtos.find(produto => produto.getNome === inputProduto);

            if (produtoEncontrado) {
                console.log(`Temos apenas ${produtoEncontrado.getQuantidade} unidades`);
                let opcao = this.entrada.receberNumero(`Gostaria de continuar comprando? \n1 - Sim \n2 - Não`);

                switch (opcao) {
                    case 1:
                        let inputQnt = this.entrada.receberNumero(`Qual seria a quantidade a comprar?`);
                        if (produtoEncontrado.getQuantidade < inputQnt) {
                            console.log(`Não temos esta quantidade em estoque`);
                            return;
                        } else {
                            let nome = produtoEncontrado.getNome;
                            let quantidade = inputQnt;
                            let valor = inputQnt * produtoEncontrado.getValor;
                            let especie = produtoEncontrado.getEspecie;
                            let produtoSelecionado = new Produto(nome, valor, quantidade, especie);
                            clienteEncontrado.produtosConsumidos.push(produtoSelecionado);
                            this.registro.push(produtoSelecionado);
                            produtoEncontrado.setQuantidade = produtoEncontrado.getQuantidade - inputQnt;
                            console.log(`\n Produto comprado com sucesso!`);
                        }
                        break;
                    case 2:
                        console.log(`Compra cancelada.`);
                        break;
                    default:
                        console.log(`Opção inválida.`);
                }
            } else {
                console.log(`Produto não encontrado.`);
            }
        } else {
            console.log(`CPF do comprador não encontrado.`);
        }
    }
}