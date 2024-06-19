import Table from 'react-bootstrap/Table';


export default function ListaServico (props) {

    let tema= props.tema
    let listaServicos=[{nome:'Tosa', categoria:'cortes', valor:'50,00'},
                       {nome:'Tosa', categoria:'cortes', valor:'50,00'},
                       {nome:'Tosa', categoria:'cortes', valor:'50,00'}

    ]

  return (

    <div className="container-fluid" style={{maxWidth:700}}>
      <p style={{fontWeight:700}}>Listagem</p>
        <Table striped bordered hover>
        <thead>
            <tr style={{ backgroundColor: tema }}>
            <th>Serviço</th>
            <th>Categoria</th>
            <th>Valor</th>
          
            </tr>
        </thead>
        <tbody>
            {listaServicos.map((serv,index) =>(
                <tr>
                <td> {serv.nome} </td>
                <td>{serv.categoria}</td>
                <td>{serv.valor}</td>
            </tr>
                ))}
        </tbody>
        </Table>
    </div>
  );
}
