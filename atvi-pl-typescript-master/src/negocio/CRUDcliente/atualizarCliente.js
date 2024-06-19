"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var entrada_1 = require("../../io/entrada");
var AtualizarCliente = /** @class */ (function () {
    function AtualizarCliente(clientes) {
        this.clientes = clientes;
        this.entrada = new entrada_1.default();
    }
    AtualizarCliente.prototype.atualizarCliente = function () {
        var cpfInput = this.entrada.receberTexto(' Insira o Cpf : ');
        // variavel cliente recebe de clientes declarado em cima que recebe lista da classe 
        // clientes entao cada vez que o for rodar o loop entra um cliente da lista para cliente
        for (var _i = 0, _a = this.clientes; _i < _a.length; _i++) {
            var cliente = _a[_i];
            //ele vai salvar na variavel  a variavel cliente usando o metodo getCpf de Clientes e disso usa getValor 
            // da classe CPF for igual a variavel cpfInput ele 
            if (cliente.getCpf.getValor == cpfInput) {
                var opcao = this.entrada.receberNumero("o que deseja atualizar?\n 1- Nome\n 2- NomeSocial");
                // depois de receber a variavel opção 
                switch (opcao) {
                    case 1:
                        //o cliente selecionado na variavel cliente entra no atributo nome que recebe a entrada de
                        // texto com o metodo de entrada com o nome do cliente
                        cliente.nome = this.entrada.receberTexto('Insira o nome do cliente: ');
                        break;
                    case 2:
                        //o cliente selecionado na variavel cliente entra no atributo nomeSocial que recebe a entrada de
                        // texto com o metodo da classe entrada com o nome social do cliente
                        cliente.nomeSocial = this.entrada.receberTexto('Insira o nome Social');
                        break;
                }
            }
        }
    };
    return AtualizarCliente;
}());
exports.default = AtualizarCliente;
