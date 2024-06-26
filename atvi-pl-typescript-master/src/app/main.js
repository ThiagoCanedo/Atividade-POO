"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var entrada_1 = require("../io/entrada");
var empresa_1 = require("../modelo/empresa");
var cadastroCliente_1 = require("../negocio/CRUDcliente/cadastroCliente");
var listagemClientes_1 = require("../negocio/CRUDcliente/listagemClientes");
var atualizarCliente_1 = require("../negocio/CRUDcliente/atualizarCliente");
console.log("Bem-vindo ao melhor sistema de gerenciamento de pet shops e cl\u00EDnicas veterinarias");
var empresa = new empresa_1.default();
var execucao = true;
while (execucao) {
    console.log("Op\u00E7\u00F5es:");
    console.log("1 - Cadastrar cliente");
    console.log("3 - Atualizar cliente");
    console.log("2 - Listar todos os clientes");
    console.log("4 - Cadastrar Pet");
    console.log("0 - Sair");
    var entrada = new entrada_1.default();
    var opcao = entrada.receberNumero("Por favor, escolha uma op\u00E7\u00E3o: ");
    switch (opcao) {
        case 1:
            var cadastro = new cadastroCliente_1.default(empresa.getClientes);
            cadastro.cadastrar();
            break;
        case 2:
            var listagem = new listagemClientes_1.default(empresa.getClientes);
            listagem.listar();
            break;
        case 3:
            var atualiza = new atualizarCliente_1.default(empresa.getClientes);
            atualiza.atualizarCliente();
            break;
        // case 4:
        //     let cadastro = new CadastroPet(dono.get)
        case 0:
            execucao = false;
            console.log("At\u00E9 mais");
            break;
        default:
            console.log("Opera\u00E7\u00E3o n\u00E3o entendida :(");
    }
}
