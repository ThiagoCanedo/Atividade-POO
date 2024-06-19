"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pet = /** @class */ (function () {
    function Pet(nome, raca, genero, tipo, cpfDono) {
        this.nome = nome;
        this.raca = raca;
        this.genero = genero;
        this.tipo = tipo;
        this.cpfDono = cpfDono;
    }
    Object.defineProperty(Pet.prototype, "getNome", {
        get: function () { return this.nome; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pet.prototype, "getRaca", {
        get: function () { return this.raca; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pet.prototype, "getGenero", {
        get: function () { return this.genero; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pet.prototype, "getTipo", {
        get: function () { return this.tipo; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pet.prototype, "getCpfDono", {
        get: function () {
            return this.cpfDono;
        },
        enumerable: false,
        configurable: true
    });
    return Pet;
}());
exports.default = Pet;
