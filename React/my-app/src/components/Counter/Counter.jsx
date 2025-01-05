import React from "react"

export class Counter extends React.Component {
    constructor() {
        super()
        // Estados
        // this.contador = 0
        this.state = { contador: 0, name: '', password: ''}
    }
    render() {
        return (
            // Estilização in-line no React
            <div style={{margin: "20px 0px 0px 20px", }}>
                <h1>{this.state.contador}</h1>

                <div> 
                    {/* Adicionando eventos de clique pelo React */}
                    <button onClick={() => {
                        // Atualizando "Estado" do contador
                        this.setState({contador: this.state.contador - 1})
                    }}>Diminuir</button>
                    <button onClick={() => {
                        this.setState({contador: this.state.contador + 1})
                    }}>Aumentar</button>
                </div>

                <form style={{marginTop: "40px"}}>
                    {/* Atualizando "Estado" de inputs */}
                    <input type="text" placeholder="Nome" value={this.state.name} onChange={ (event) => {this.setState({name: event.target.value})}}/>

                    <input type="password" placeholder="Senha" value={this.state.password} onChange={ (event) => {this.setState({password: event.target.value})}}/>

                    <button>Enviar</button>
                </form>
            </div>
        )
    }  
}