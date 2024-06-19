/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import { Container } from "react-bootstrap";

type props = {
    tema: string
}

export function gerarLinhaCLiente(){

}
let dado = [
        {nome: 'Joao', nomeSocial:'joao',email:'joaofreitas@outlook.com'},
        {nome: 'pedro', nomeSocial:'pedro',email:'pedrofreitas@outlook.com'},
        {nome: 'maria', nomeSocial:'maria',email:'mariaalves@outlook.com'}
    ]

export default class ListaCliente extends Component<props>{

    

    
    
    
    render() {
        let tema = this.props.tema
        return (
            <Container fluid style={{width:600}}>
                
                <div className="container-fluid">
                    <div className="list-group">
                        <p>Listagem</p>

                        { dado.map((cliente)=>(
                        <div>
                            <a href="#" className="list-group-item list-group-item-action" style={{ backgroundColor: tema }} >Cliente </a>
                            <a href="#" className="list-group-item list-group-item-action">NOME: {cliente.nome} <p>Nome Social: {cliente.nomeSocial}</p>E-MAIL: {cliente.email}  </a>
                        </div>
                        ))}
                        
                        
                        
                    </div>
                </div>
            </Container>
        )
    }
}
