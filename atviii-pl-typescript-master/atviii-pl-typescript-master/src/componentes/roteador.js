/* eslint-disable no-unused-vars */
import { useState } from "react";



import BarraNavegacao from "./barraNavegacao"
import ListaCliente from "./listaCliente";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import FormularioCadastroPet from "./formularioCadastroPet";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import FormularioCadastroServico from "./formularioCadastroServiço";
import ListaPet from "./listaPet";
import ListaProduto from "./listaProduto";
import ListaServico from "./listaServico";

export default function Roteador() {
    const [tela, setTela] = useState('Clientes')
    const selecionarView = (valor, e) => {
        e.preventDefault()
        setTela(valor)
    }

    const construirView = () => {
        if (tela === 'Clientes') {
            return (
                <>  
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Pet', 'Produto','Serviço']} />
                    <FormularioCadastroCliente tema="#e3f2fd" />
                    <ListaCliente tema="#e3f2fd" />
                </>
            )
        } 
        else if(tela === 'Pet'){
            return(
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Pet', 'Produto','Serviço']} />
                    
                        <FormularioCadastroPet tema="#e3f2fd"/>
                        <ListaPet tema="#e3f2fd"/>
                   
                </>
            )
        }

        else if(tela === 'Produto'){
            return(
                <>
                <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Pet', 'Produto','Serviço']} />
                <FormularioCadastroProduto tema="#e3f2fd"/>
                <ListaProduto />
                
                </>
            )
        }

        else if(tela === 'Serviço'){
            return(
                <>
                <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Pet', 'Produto','Serviço']} />
                <FormularioCadastroServico tema="#e3f2fd"/>
                <ListaServico tema="#e3f2fd"/>
                
                </>
            )
        }

        else {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Pet', 'Produto','Serviço']} />
                    <p>Pagina não encontrada</p>
                </>
            )
        }
    }

    return (
        construirView()
    )
}