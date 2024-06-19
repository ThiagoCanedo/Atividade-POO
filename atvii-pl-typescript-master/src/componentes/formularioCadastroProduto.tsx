import { Component } from "react";
import { Container } from "react-bootstrap";


type props = {
    tema: string
}
export default class FormularioCadastroProduto extends Component<props>{
    render() {
        let tema = this.props.tema
        return (
            <Container fluid style={{width:600,paddingBottom:30}}>
                <div className="container-fluid">
                    <form>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Categoria" aria-label="Categoria" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>$</span>
                            <input type="number" className="form-control" placeholder="Preço" aria-label="Preço" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group mb-3">
                            <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
                        </div>
                    </form>
                </div>
           </Container> 
        )
    }
}
