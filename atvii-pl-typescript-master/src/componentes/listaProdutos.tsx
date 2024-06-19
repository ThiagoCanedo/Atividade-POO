import { Component } from "react";
import Table from 'react-bootstrap/Table';
import { Container } from "react-bootstrap";

type props = {
    tema: string
}
const listaProd =[
    {produto:'Shampoo', categoria:'limpeza',preco:'50,00'},
    {produto:'pasta de dente', categoria:'limpeza',preco:'50,00'},
    {produto:'sabotene', categoria:'limpeza',preco:'50,00'},
    {produto:'Shampoo', categoria:'limpeza',preco:'50,00'},
    {produto:'Shampoo', categoria:'limpeza',preco:'50,00'},
    {produto:'Shampoo', categoria:'limpeza',preco:'50,00'}
]

export default class ListaProdutos extends Component<props>{


    render(){
        let tema = this.props.tema
        return(
            <Container fluid style={{width:600}}>  
                <p style={{ backgroundColor: tema }}>Listagem</p >
                <Table striped bordered hover size="sm">
                    <thead >
                        <tr>
                            <th>Produto</th>
                            <th>Categoria</th>
                            <th>Preço</th>
                        </tr>
                    </thead>
                    <tbody >
                            {listaProd.map((prod,index)=>(
                                    <tr key={index}>
                                        <td>{prod.produto}</td>
                                        <td>{prod.categoria}</td>
                                        <td>{prod.preco}</td>
                                    </tr>
                                
                            ) )}
                            
                        
                
                    </tbody>
                </Table>
                
            </Container>
        )
    }
}