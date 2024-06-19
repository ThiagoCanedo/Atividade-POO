/* eslint-disable jsx-a11y/anchor-is-valid */

import Table from 'react-bootstrap/Table';





export default function ListaCliente(props) {
    const dados =[
    {nome:'joao',nomeSocial:'joao',eMail:'joao@outlook.com' },
    {nome:'joao',nomeSocial:'joao',eMail:'joao@outlook.com' },
    {nome:'joao',nomeSocial:'joao',eMail:'joao@outlook.com' }
    ];
    let tema = props.tema
    return (
        <div className="container-fluid" style={{maxWidth:700}}>
        <p style={{fontWeight:700}}>Listagem</p>
        <Table striped bordered hover >
            <thead>
                <tr style={{ backgroundColor: tema }}>
                    <th> nome</th>
                    <th>nome Social</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {dados.map((cliente,index) =>(
                    <tr>
                    <td> {cliente.nome} </td>
                    <td>{cliente.nomeSocial}</td>
                    <td>{cliente.eMail}</td>
                </tr>
                ))}
            </tbody>
        </Table>
        
        
        </div>
    )
}