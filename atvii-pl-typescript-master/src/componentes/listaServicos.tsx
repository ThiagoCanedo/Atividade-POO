import { Component } from "react";
import { Container,Table } from "react-bootstrap";

type props={
    tema:string
}
const listServico = [
    {servico:'banho', categoria:'limpeza', valor:'100,00'},
    {servico:'Consulta', categoria:'limpeza', valor:'85,00'},
    {servico:'vacina', categoria:'limpeza', valor:'70,00'},
    {servico:'banho e tosa', categoria:'limpeza', valor:'114,00'}
]

export default class ListaServicos extends Component<props>{

    render(){
let tema= this.props.tema
    return(
        <Container fluid style={{width:600}} >
            <Table className="table" > 
                <thead >
                    <tr>
                        <th>Serviço</th>
                        <th>Categoria</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {listServico.map((serv,index)=>(
                        <tr key={index} style={{ backgroundColor: tema }}>
                            <td>{serv.servico}</td>
                            <td>{serv.categoria}</td>
                            <td>{serv.valor}</td>
                        </tr>

                   
                    ))}
                    
                </tbody>

            </Table>
        </Container>
    )
        
    }
}