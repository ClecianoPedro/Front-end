import React from "react";

export class Counter extends React.Component {
    render() {
        return (
            <div>
                <h1>0</h1>

                <button>Diminuir</button>
                <button>Aumentar</button>
            </div>
        )
    }
}