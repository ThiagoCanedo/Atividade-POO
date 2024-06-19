export default class Pet {
    public nome: string
    public tipo: string
    public raca: string
    public genero: string
    private cpfDono: String

    constructor(nome: string, raca: string, genero: string, tipo: string, cpfDono: String) {
        this.nome = nome
        this.raca = raca
        this.genero = genero
        this.tipo = tipo
        this.cpfDono = cpfDono
    }

    public get getNome(){return this.nome}
    public get getRaca(){return this.raca}
    public get getGenero(){return this.genero}
    public get getTipo(){return this.tipo}

    public get getCpfDono(){
        return this.cpfDono

    }
}