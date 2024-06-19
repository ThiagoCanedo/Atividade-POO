import Pet from "../../modelo/pet";
import Entrada from "../../io/entrada";


export default class atulizarPet{
    private pets : Array<Pet>
    private entrada: Entrada

    constructor(pets: Array<Pet> ){
        this.pets=pets
        this.entrada=new Entrada()
    }


public atualizarPet(){
    let nomePet = this.entrada.receberTexto(` Insira o nome do Pet`)
    for (let pet of this.pets ){
        if (pet.getNome == nomePet){
            let opcao = this.entrada.receberNumero(` o que deseja alterar \n 1 - nome \n 2 tipo \n 3 raca \n 4 genero `)
            switch (opcao){
                case 1:
                    pet.nome =this.entrada.receberTexto(`qual o novo nome? `)
                    break
                case 2 :
                    pet.tipo = this.entrada.receberTexto(`Qual a especie?  `)
                    break
                case 3 : 
                    pet.raca = this.entrada.receberTexto(`Qual a raça do seu Pet? `)
                case 4 : 
                    pet.genero = this.entrada.receberTexto (`Qual o genero do Pet? `)
            }
        }
    }
}

}