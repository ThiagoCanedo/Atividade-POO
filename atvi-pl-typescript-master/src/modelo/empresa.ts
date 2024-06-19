import Entrada from "../io/entrada"
import Cliente from "./cliente"
import Pet from "./pet"
import Produto from "./produto"
import Servico from "./servico"



export default class Empresa{

    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    private pets: Array<Pet>
    private registro: Array<Produto>
    private registroServ: Array<Servico>
   
    
    

    constructor(){

        this.clientes = []
        this.produtos = []
        this.servicos = []
        this.pets= []
        this.registro= []
        this.registroServ=[]
        
    }

    public get getRegistro() {
        return this.registro
    }
    public set setRegistro(value: Array<Produto>) {
        this.registro = value
    }

    public get getClientes(){
        return this.clientes
    }
    public get getProdutos(){
        return this.produtos
    }
    public get getServicos(){
        return this.servicos
    }
    public get getPet(){
        return this.pets
    }
    
    public get getRegistroServ(): Array<Servico> {
        return this.registroServ
    }
    public set setRegistroServ(value: Array<Servico>) {
        this.registroServ = value
    }

    public set setProduto(prod: Array<Produto>) {
        this.setProduto = prod
    }


    public deleteCliente():void{
        let entrada = new Entrada()
        let valor = entrada.receberTexto("Digite o CPF a deltar")
        const pessoaFiltrada = this.clientes.filter((cliente) => cliente.getCpf.getValor !=valor)
        this.clientes = pessoaFiltrada
    }
}