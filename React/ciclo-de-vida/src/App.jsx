import React from "react"
import { Counter } from "./components/Counter/Counter"

class App extends React.Component {
  constructor() {
    super()

    this.state = {showCounter: false}
  }

    render() {
      return (
        <div>
          <h1>Ciclo de Vida no React</h1>

          {/* Adicionando evento e mudando estado ao clicar no botão */}
          <button onClick={() => {
            this.setState({showCounter: !this.state.showCounter})
          }}>{
            // Mostrando texto do botão com base no valor do estado "showCounter" utilizando "operador ternário"
            this.state.showCounter ? 'Remover contador' : 'Mostrar contador'
          }</button>
          {/* (Melhor prática) Exibindo "componente" com base no valor do estado "showCounter" utilizando "operador ternário" */}
          {this.state.showCounter ?<Counter /> : null}
          {/* Outra forma de exibir o "componente" com base no valor do estado "showCounter" */}
          {/* {this.state.showCounter && <Counter/>} */}
        </div>
      )
    }
}

export default App