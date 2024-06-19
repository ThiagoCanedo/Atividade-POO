import Pet from "../../modelo/pet";
import Listagem from "../listagem";


export default class ListagemPet extends Listagem{
    public pets : Array<Pet>;
    constructor(pets : Array<Pet>){
        super();
        this.pets = pets;
    
    }




    public listar(): void{
        console.log(`\nLista de todos os clientes:`);
        this.pets.forEach(pet =>  {
            
            console.log(`Nome: ` + pet.getNome);
            console.log(`Nome: `+ pet.getRaca);
            console.log(`Nome: ` + pet.getGenero);
            console.log(`Nome: `+ pet.getTipo);
            console.log(`--------------------------------------`);
        })
    }
}
