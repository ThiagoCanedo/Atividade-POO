import Table from 'react-bootstrap/Table';





export default function ListaPet (props) {
    let tema= props.tema
    const listaPets= [{nome: 'nina', raça:'ylhasa', especie:'cao', sexo:'femea' },
                      {nome: 'meg', raça:'viralata', especie:'cao', sexo:'femea' },
                      {nome: 'molly', raça:'ylhasa', especie:'cao', sexo:'femea' }
    ]

  return (
    <div className="container-fluid" style={{maxWidth: 700}}>
      <p style={{fontWeight:700}}>Listagem</p>
        <Table striped bordered hover >
        <thead>
            <tr style={{ backgroundColor: tema }}>
            <th>Nome</th>
            <th>Sexo</th>
            <th>Raça</th>
            <th>Espécie</th>
            </tr>
        </thead>
        <tbody>
          
        {listaPets.map((pet,index)=> (
            <tr key={index} style={{ backgroundColor: tema }}>
              <td>{pet.nome}</td>
              <td>{pet.raça}</td>
              <td>{pet.especie}</td>
              <td>{pet.sexo}</td>
            </tr>

            ))}
             
             
        
        </tbody>
        </Table>
    </div>
  );
}
