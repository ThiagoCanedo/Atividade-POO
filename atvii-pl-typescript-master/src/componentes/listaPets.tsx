import { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container } from 'react-bootstrap';

type props = {
    tema: string
}

const dadoPet = [
    {nome:'nina',sexo:'femea', raca:'whasa', especie:'cão' },
    {nome:'meg',sexo:'femea', raca:'viralixo', especie:'cão' },
    {nome:'molly',sexo:'femea', raca:'mix', especie:'cão' }
]


export default class ListaPets extends Component <props> {

   render(){
    let tema = this.props.tema
    return(
        <Container fluid style={{width:600}}>
        <p>Listagem</p>
            {dadoPet.map((pet,index)=>(       
                    <div key={index} style={{width:600}}>  
            <ListGroup>            
                <ListGroup.Item style={{ backgroundColor: tema }}>Nome:{pet.nome}:</ListGroup.Item>
                <ListGroup.Item>SEXO:{pet.sexo} </ListGroup.Item>
                <ListGroup.Item >RAÇA: {pet.raca}</ListGroup.Item>
                <ListGroup.Item>ESPECIE: {pet.especie}</ListGroup.Item> 
                <p></p>
            </ListGroup> 
            </div>
                ))}
            
        
    </Container>
    )
   }

}