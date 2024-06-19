import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/CRUDcliente/cadastroCliente";
import ListagemClientes from "../negocio/CRUDcliente/listagemClientes";
import AtualizarCliente from "../negocio/CRUDcliente/atualizarCliente";
import CadastroPet from "../negocio/CRUDpet/cadastroPet";
import atulizarPet from "../negocio/CRUDpet/atualizarPet";
import ListagemPet from "../negocio/CRUDpet/listagemPet";
import CadastroProduto from "../negocio/CRUDporduto/cadastroProduto";
import ListagemProduto from "../negocio/CRUDporduto/listagemProduto";
import AtualizarProduto from "../negocio/CRUDporduto/atualizarProduto";
import CompraProduto from "../negocio/CRUDporduto/compraProduto";
import ListagemProdServCliente from "../negocio/CRUDcliente/listagemProdServPorCliente";
import Listagem10ClientesEmQuantidades from "../negocio/Ranks/Rank10ClientesQuantidade";
import CadastroServico from "../negocio/CRUDservico/cadastroServico";
import ListagemServico from "../negocio/CRUDservico/listagemServico";
import AtualizarServico from "../negocio/CRUDservico/atualizarServico";
import ListaGeralMaisConsumidos from "../negocio/Ranks/listagemProdutosServiçosMaisConsumidos";
import Rankear5ClientesConsumo from "../negocio/Ranks/Rank5ClienteValor";
import ProdutosMaisConsumidosEspecie from "../negocio/Ranks/RankProdServPorEspecie";
import Servico from "../modelo/servico";
import Produto from "../modelo/produto";
import RG from "../modelo/rg";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import CompraServico from "../negocio/CRUDservico/compraServico";

function gerarDadosTeste(empresa: Empresa) {
    // Criando os clientes
    let clientes = [
        new Cliente('Victor', 'Vituu', new CPF('45454545454', new Date(1221, 11, 12)),new RG('58951348', new Date(2000, 11, 20))),
        new Cliente('Ana', 'Gata', new CPF('89421565454', new Date(1221, 11, 12)),new RG('89522146', new Date(2000, 11, 20))),
        new Cliente('Luiz', 'LULU <3', new CPF('49478542453', new Date(1221, 11, 12)), new RG('77572727', new Date(2000, 11, 20))),
        new Cliente('Belinha', 'Bela', new CPF('73454542354', new Date(1221, 11, 12)), new RG('53475527', new Date(2000, 11, 20))),
        new Cliente('Vasco', 'Gigante', new CPF('28426645454', new Date(1221, 11, 12)), new RG('71466984', new Date(2000, 11, 20))),
        new Cliente('Pedro', 'Pussy', new CPF('39454475554', new Date(1221, 11, 12)), new RG('39845464', new Date(2000, 11, 20))),
        new Cliente('Hugo', 'Hugas', new CPF('14454877456', new Date(1221, 11, 12)), new RG('87214654', new Date(2000, 11, 20))),
        new Cliente('Ulquiora', 'Ciffer', new CPF('52452245451', new Date(1221, 11, 12)), new RG('44874668', new Date(2000, 11, 20))),
        new Cliente('Ichigo', 'Ichigo', new CPF('11454445458', new Date(1221, 11, 12)), new RG('52115576', new Date(2000, 11, 20))),
        new Cliente('Naruto', 'Naruto', new CPF('31454745895', new Date(1221, 11, 12)), new RG('47115597', new Date(2000, 11, 20))),
        new Cliente('Dalva', 'Mae', new CPF('56554745895', new Date(1221, 11, 12)), new RG('88715597', new Date(2000, 11, 20))),
    ];
    // Criando serviços
    let servicos = [
        new Servico("corte", 24 , 1),
        new Servico("Banho", 12, 1),
        new Servico("tosa", 34, 1),
        new Servico("massagem", 45, 1),
        new Servico("atendimento com doutor", 30, 1),
        new Servico("remocao tartaros", 40, 1),
    ];
    // Criando produtos
    let produtos = [
        new Produto("Pomada", 12.00, 20, 'cachorro'),
        new Produto("Condicionador", 21.00, 30, 'cachorro'),
        new Produto("Creme tartaro gato", 21.00, 30, 'gato'),
        new Produto("Caixa de alpiste", 10.00, 30, 'pássaro'),
        new Produto("Forro Hamster", 14.00, 20, 'hamster'),
        new Produto("Areia para gato", 21.00, 30, 'gato'),
    ];
    // Associando produtos aos clientes
    clientes[0].produtosConsumidos.push(produtos[0]);
    clientes[1].produtosConsumidos.push(produtos[1]);
    clientes[2].produtosConsumidos.push(produtos[2]);
    clientes[3].produtosConsumidos.push(produtos[3]);
    clientes[4].produtosConsumidos.push(produtos[4]);
    clientes[5].produtosConsumidos.push(produtos[5]);
    clientes[6].produtosConsumidos.push(produtos[2]);
    clientes[7].produtosConsumidos.push(produtos[5]);
    clientes[8].produtosConsumidos.push(produtos[0]);
    clientes[8].produtosConsumidos.push(produtos[2]);
    clientes[10].produtosConsumidos.push(produtos[1]);
    // Associando serviços aos clientes
    clientes[0].servicosConsumidos.push(servicos[0]);
    clientes[1].servicosConsumidos.push(servicos[1]);
    clientes[2].servicosConsumidos.push(servicos[5]);
    clientes[3].servicosConsumidos.push(servicos[1]);
    clientes[4].servicosConsumidos.push(servicos[4]);
    clientes[5].servicosConsumidos.push(servicos[2]);
    clientes[6].servicosConsumidos.push(servicos[3]);
    clientes[7].servicosConsumidos.push(servicos[4]);
    clientes[8].servicosConsumidos.push(servicos[0]);
    clientes[10].servicosConsumidos.push(servicos[0]);
    // Adicionando clientes, serviços e produtos à empresa
    clientes.forEach(cliente => empresa.getClientes.push(cliente));
    servicos.forEach(servico => empresa.getServicos.push(servico));
    produtos.forEach(produto => empresa.getProdutos.push(produto));
}



console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias! `)
let empresa = new Empresa()
gerarDadosTeste(empresa)

let execucao = true
while (execucao) {
    console.log(`Opções:`);


    console.log(`19 - Compra de serviço`)
    console.log(`20 - Compra de produto`)
    console.log(`21 - listagem de Produtos consumidos por cliente`)

    console.log(`-------------------------------------------------------------`);

    console.log(`|  1 - Cadastrar cliente`);
    console.log(`|  2 - Listar todos os clientes`);
    console.log(`|  3 - Atualizar cliente`)

    console.log(`|  4 - Cadastrar Pet`);
    console.log(`|  5 - Listar todos os Pets`);
    console.log(`|  6 - Atualizar Pet`);

    console.log(`|  7 - Cadastrar Produto`);
    console.log(`|  8 - Listar Produtos`);
    console.log(`|  9 - Atualizar Produto`);

    console.log(`|  10 - Cadastrar serviço`);
    console.log(`|  11 - Listar serviços`);
    console.log(`|  12 - Atualizar serviço`);

    console.log(`|  13 - Rank dos Produtos e Serviços mais consumidos`);
    console.log(`|  14 - Rank 5 clientes que mais consumiram em valor`);
    console.log(`|  15 - Rank 10 clientes que mais consumiram em quantidade `);
    console.log(`|  16 - Rank consulta produtos mais consumidos por espécie`)

    console.log(`-------------------------------------------------------------`);





    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {

        case 19:
            let compraServico= new CompraServico(empresa.getServicos, empresa.getClientes, empresa.getRegistroServ)
            compraServico.comprar()
            break;

        case 20:
            let compraProduto = new CompraProduto(empresa.getProdutos,empresa.getClientes, empresa.getRegistro)
            compraProduto.comprar()
            break;


        case 21:
            let listaProdServ = new ListagemProdServCliente(empresa.getClientes)
            listaProdServ.listar()
            break;

        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;
            
        case 2:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;
        
        case 3:
            let atualiza = new AtualizarCliente(empresa.getClientes)
            atualiza.atualizarCliente()
            break;

        case 4:
            let cadastrar = new CadastroPet(empresa.getPet,empresa.getClientes )
            cadastrar.cadastrar()
            break;
            
        case 5:
            let listapets = new ListagemPet(empresa.getPet)
            listapets.listar()
            break;

        case 6:
            let atualizapet = new atulizarPet(empresa.getPet)
            atualizapet.atualizarPet()
            break;

        case 7:
            let cadastrarproduto = new CadastroProduto(empresa.getProdutos)
            cadastrarproduto.cadastrar()
            break;

            
        case 8:
            let listarproduto = new ListagemProduto(empresa.getProdutos)
            listarproduto.listar()
            break;

        case 9:
            let atualizarproduto = new AtualizarProduto(empresa.getProdutos)
            atualizarproduto.atualizar()
            break;

       case 10:
            let cadastrarServico = new CadastroServico(empresa.getServicos)
            cadastrarServico.cadastrar() 
            break;

        case 11:
            let listarServico = new ListagemServico(empresa.getServicos)
            listarServico.listar()
            break;

        case 12:
            let atualizarServico = new AtualizarServico(empresa.getServicos)
            atualizarServico.atualizar()
            break;
        
        case 13:
            let rankProdServMaisConsumidos = new ListaGeralMaisConsumidos( empresa.getRegistroServ,empresa.getRegistro,)
            rankProdServMaisConsumidos.listar()
            break;

        case 14:
            let rank5maisConsumiram = new Rankear5ClientesConsumo(empresa.getClientes)
            rank5maisConsumiram.listar()
            break;

        
        case 15: 
            let lista10mais = new Listagem10ClientesEmQuantidades(empresa.getClientes)
            lista10mais.listar()
            break;

        case 16:
            let listagemPorEspecie = new ProdutosMaisConsumidosEspecie(empresa.getProdutos)
            listagemPorEspecie.listar()
            break;

        case 0:
            execucao = false
            console.log(`Até mais`)
            break;

        default:
            console.log(`Operação não foi entendida  :( `)
    }
}