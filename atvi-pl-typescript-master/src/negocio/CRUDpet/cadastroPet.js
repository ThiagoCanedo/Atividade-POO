"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var cadastro_1 = require("../cadastro");
var pet_1 = require("../../modelo/pet");
var entrada_1 = require("../../io/entrada");
var CadastroPet = /** @class */ (function (_super) {
    __extends(CadastroPet, _super);
    function CadastroPet(pets, dono) {
        var _this = _super.call(this) || this;
        _this.pets = pets;
        _this.dono = dono;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    CadastroPet.prototype.cadastrar = function () {
        console.log("\n Inicio de cadastro de Pet");
        var nome = this.entrada.receberTexto("Insira o nome de seu pet: ");
        var raca = this.entrada.receberTexto(" Insira a ra\u00E7a do seu pet: ");
        var genero = this.entrada.receberTexto("Insira o genero:  ");
        var tipo = this.entrada.receberTexto(" ");
        var cpf_Dono = this.entrada.receberTexto(" ");
        var pets = new pet_1.default(nome, raca, genero, tipo, cpf_Dono);
        this.pets.push(pets);
    };
    return CadastroPet;
}(cadastro_1.default));
exports.default = CadastroPet;
