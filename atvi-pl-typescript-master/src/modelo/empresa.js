"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var entrada_1 = require("../io/entrada");
var Empresa = /** @class */ (function () {
    function Empresa() {
        this.clientes = [];
        this.produtos = [];
        this.servicos = [];
    }
    Object.defineProperty(Empresa.prototype, "getClientes", {
        get: function () {
            return this.clientes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Empresa.prototype, "getProdutos", {
        get: function () {
            return this.produtos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Empresa.prototype, "getServicos", {
        get: function () {
            return this.servicos;
        },
        enumerable: false,
        configurable: true
    });
    Empresa.prototype.deleteCliente = function () {
        var entrada = new entrada_1.default();
        var valor = entrada.receberTexto("Digite o CPF a deltar");
        var pessoaFiltrada = this.clientes.filter(function (cliente) { return cliente.getCpf.getValor != valor; });
        this.clientes = pessoaFiltrada;
    };
    return Empresa;
}());
exports.default = Empresa;
