import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./listaClientes";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import FormularioCadastroPet from "./formularioCadastroPet";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import ListaPets from "./listaPets";
import ListaProdutos from "./listaProdutos";
import ListaServicos from "./listaServicos";
import FormularioCadastroServico from "./formularioCadastroServico";

type state = {
    tela: string
}
export default class Roteador extends Component<{}, state>{
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {tela:'Clientes'} 

        
        this.selecionarView = this.selecionarView.bind(this)
    }
    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        //
        
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Produtos', 'Pet','Serviços']} />
        switch(this.state.tela){
            case 'Clientes':
                return (
                    <>
                        {barraNavegacao}
                        <FormularioCadastroCliente tema="#e3f2fd" />
                        <ListaCliente tema="#e3f2fd" />
                    </>
                )
            case 'Produtos':
                return (
                    <>  
                        {barraNavegacao}
                        <FormularioCadastroProduto tema="#e3f2fd"/>
                        <ListaProdutos  tema="#e3f2fd"/>
                    </>
                )

            case 'Pet':
                return(
                    <>
                        {barraNavegacao}
                        <FormularioCadastroPet tema="#e3f2fd" />
                        <ListaPets tema="#e3f2fd"/>                       
                    </>)

            case 'Serviços':
                return(
                    <>
                        {barraNavegacao}
                        <FormularioCadastroServico tema="#e3f2fd"/>
                        <ListaServicos tema="#e3f2fd"/>
                        
                    </>
                )        


        }

        // if (this.state.tela === 'Clientes') {
        //     return (
        //         <>
        //             {barraNavegacao}
                    
        //             <FormularioCadastroCliente tema="#e3f2fd" />
        //             <ListaCliente tema="#e3f2fd" />
                    
        //         </>
        //     )
        // } 
        // else if (this.state.tela === 'Pet') {
        //     return(
        //     <>
        //         {barraNavegacao}
        //         <FormularioCadastroPet tema="#e3f2fd" />
        //         <ListaPets tema="#e3f2fd"/>
                
        //     </>)
        // } 
        // else {
        //     return (
        //         <>  
        //             {barraNavegacao}
        //             <FormularioCadastroProduto tema="#e3f2fd"/>
        //             <ListaProdutos  tema="#e3f2fd"/>
        //         </>
        //     )
        // }
    }
}