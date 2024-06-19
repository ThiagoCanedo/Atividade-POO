


export default function FormularioCadastroPet(props){
let tema= props.tema


return (
    <div className="container-fluid" style={{maxWidth:700, marginBottom:100}}>
        <form>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Raça" aria-label="Raça" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                {/* <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>@</span> */}
                <input type="text" className="form-control" placeholder="Espécie" aria-label="Espécie" aria-describedby="basic-addon1" />
            </div>

            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Sexo" aria-label="Sexo" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="CPF dono" aria-label="CPF dono" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
            </div>
        </form>
    </div>
)


}