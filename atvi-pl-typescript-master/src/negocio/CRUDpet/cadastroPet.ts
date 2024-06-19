import Cliente from "../../modelo/cliente";
import Cadastro from "../cadastro";
import Pet from "../../modelo/pet";
import Entrada from "../../io/entrada";




export default class CadastroPet extends Cadastro{
    private clientes : Array<Cliente>
    private entrada : Entrada
    private pets : Array<Pet>

    constructor (pets: Array<Pet>, clientes:Array<Cliente>,){
        super()
        this.clientes = clientes
        this.pets = pets
        this.entrada = new Entrada()
    }

     public cadastrar(): void{
        console.log(`\n Inicio de cadastro de Pet \n`)
        let nome = this.entrada.receberTexto(`Insira o nome de seu pet:  `)
        let raca = this.entrada.receberTexto(` Insira a raça do seu pet:  `)
        let genero = this.entrada.receberTexto(`Insira o genero:   `)
        let tipo = this.entrada.receberTexto(`Qual a especie de seu animal?  `) 
        let cpfDono = this.entrada.receberTexto(`Digite o CPF do tutor:  `)
        let pets = new Pet(nome, raca, genero, tipo, cpfDono )
        this.pets.push(pets)
        
        // for (let dono of this.clientes)
        //     if (dono.getCpf.getValor === cpfDono )
        //         this.clientes.push()
            
    }


}