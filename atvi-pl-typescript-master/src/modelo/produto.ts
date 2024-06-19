export default class Produto {

    public nome: string
    public valor: number
    public quantidade:number
    private especie: string
    
    

    constructor(nome: string,valor:number,quantidade:number,especie:string){

        this.nome=nome
        this.valor=valor
        this.quantidade=quantidade;
        this.especie=especie

    }

        public get getNome(): string {
            return this.nome
        }
        public set setNome(value: string) {
            this.nome = value

        }

        public get getValor(): number {
            return this.valor
            
        }
        public set setValor(value: number) {
            this.valor = value

        }

        public get getQuantidade(){
            return this.quantidade

        }
        public set setQuantidade(value:number){
            this.quantidade = value
            
        }
        
        public get getEspecie(): string {
            return this.especie
        }
        public set setEspecie(value: string) {
            this.especie = value
        }
}