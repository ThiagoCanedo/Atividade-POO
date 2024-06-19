export default function FormularioCadastroProduto(props){
    let tema= props.tema
    
    
    return (
        <div className="container-fluid" style={{maxWidth:700,marginBottom:100}}>
            <form>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Categoria" aria-label="Categoria" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>$</span>
                    <input type="text" className="form-control" placeholder="Valor" aria-label="Valor" aria-describedby="basic-addon1" />
                </div>
    
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Quantidade" aria-label="Quantidade" aria-describedby="basic-addon1" />
                </div>

                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
                </div>
            </form>
        </div>
    )
    
    
    }