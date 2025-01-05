import React from "react";

export class Counter extends React.Component {
    // Primeria etapa do ciclo de montagem
    constructor() {
        super()
        this.state = {contador: 0}
        console.log("Construindo a classe Counter...")
    }
    // Não utilizar componentWillMount()
    // Segunda etapa do ciclo de montagem
    UNSAFE_componentWillMount() {
        console.log("O componente -contador- será montado!")
    }

    // Criando método para usar quando rolar a página
    consoleScroll() {
        console.log("Rolando a página...")
    }

    // Última etapa do ciclo de montagem
    componentDidMount() {
        console.log("O componente foi montado! ✅")

        // Mostrando a importância de remover o evento após o componente ser desmontado...
        document.addEventListener("scroll", this.consoleScroll)
        }

    // Método sempre chamado quando uma prop ou estado for atualizado
    shouldComponentUpdate() {
        return true;
    }

    // Não utilizar componentWillUpdate()
    // Primeira etapa do ciclo de atualização
    UNSAFE_componentWillUpdate() {
        console.log("O componente será atualizado!")
    }

    // Última etapa do ciclo de atualização
    componentDidUpdate() {
        console.log("O componente foi atualizado! ✅")
    }

    // Única etapa do ciclo de desmontagem (útil para: remover eventos que estavam associados ao componente, cancelar uma requisição HTTP, invalidar algum timer)
    componentWillUnmount() {
        console.log("O componente será desmontado...")
        // Removendo evento ao desmonstar o componente
        document.removeEventListener("scroll", this.consoleScroll)

    }

    // Terceira etapa do ciclo de montagem
    // Segunda etapa do ciclo de atualização
    render() {
        console.log("Renderizando o componente Counter...")
        return (
            <div>
                <h1>{this.state.contador}</h1>

                <button onClick={() => this.setState({contador: this.state.contador - 1})}>Diminuir</button>
                <button onClick={() => this.setState({contador: this.state.contador + 1})}>Aumentar</button>
            </div>
        )
    }
}