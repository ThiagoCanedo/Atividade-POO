import Table from 'react-bootstrap/Table';


export default function ListaProduto (props) {
    let tema= props.tema
    const listaProds  = [{nome:'Shampoo', categoria:'Higiene', valor:'30,00', Quantidade:'50'},
                         {nome:'Shampoo', categoria:'Higiene', valor:'30,00', Quantidade:'50'},
                         {nome:'Shampoo', categoria:'Higiene', valor:'30,00', Quantidade:'50'}
    ]
    
  return (
    <div className="container-fluid" style={{maxWidth:700}}>
      <p style={{fontWeight:700}}>Listagem</p>
        <Table striped bordered hover>
        <thead>
            <tr style={{ backgroundColor: tema }}>
            <th>Nome</th>
            <th>Categoria</th>
            <th>Valor</th>
            <th>Quantidade</th>
            </tr>
        </thead>
        <tbody>
            {listaProds.map((prod,index) =>(
                <tr>
                <td> {prod.nome} </td>
                <td>{prod.categoria}</td>
                <td>{prod.valor}</td>
                <td>{prod.Quantidade}</td>
            </tr>
                ))}
        </tbody>
        </Table>
    </div>
  );
}
