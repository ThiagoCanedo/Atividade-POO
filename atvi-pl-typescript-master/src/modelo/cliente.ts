import CPF from "./cpf"
import Pet from "./pet"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    private cpf: CPF
    private rg: RG
    private dataCadastro: Date
    private telefones: Array<Telefone>
    public produtosConsumidos: Array<Produto>
    public servicosConsumidos: Array<Servico>
    private pets: Array<Pet>
    
    constructor(nome: string, nomeSocial: string, cpf: CPF, rg:RG) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.rg = rg
        this.dataCadastro = new Date()
        this.telefones = []
        this.produtosConsumidos = []
        this.servicosConsumidos = []
        this.pets = []
    }
    public get getCpf(): CPF {
        return this.cpf
    }
    public get getRg():RG {
        return this.rg
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }
    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
    public set setProdutosConsumidos(value: Array<Produto>) {
        this.produtosConsumidos = value
    }


    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }
    public get getPets(): Array<Pet>{
        return this.pets
    }

    public set setRgs(RG: RG) {
        this.rg = RG
    }
}