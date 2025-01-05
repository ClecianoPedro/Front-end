import React from "react";

export class Counter extends React.Component {
    // Primeria etapa do ciclo de montagem
    constructor() {
        super()
        console.log("Construindo a classe Counter...")
    }
    // Não utilizar componentWillMount()
    UNSAFE_componentWillMount() {
        console.log("O componente -contador- será montado!")
    }

    // Última etapa do ciclo de montagem
    componentDidMount() {
        console.log("O componente foi montado! ✅")
    }
    // Terceira etapa do ciclo de montagem
    render() {
        console.log("Renderizando o componente Counter...")
        return (
            <div>
                <h1>0</h1>

                <button>Diminuir</button>
                <button>Aumentar</button>
            </div>
        )
    }
}