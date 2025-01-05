import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx';

// Componente em classe é uma classe que herda a classe Component do React, e retorna HTML dentro do método render().
class App extends React.Component {
  // Método responsável por renderizar o conteúdo HTML do nosso componente
  render() {
    return <Navbar />
  }
}

export default App;
