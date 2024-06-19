export default class Servico {
   
        private nome: string
        private valor: number
        private qnt: number
    
    
    
        constructor(nome: string,valor:number,qnt:number){
            this.nome=nome
            this.valor=valor
            this.qnt=qnt
            
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

        public get getQnt(): number {
            return this.qnt
        }
        
        public set setQnt(value: number) {
            this.qnt = value
        }
}

