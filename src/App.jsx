import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CadastroCliente from './pages/CadastroCliente';
import CadastroMercadoria from './pages/CadastroMercadoria';
import ListaClientes from './pages/ListaClientes';
import ListaMercadorias from './pages/ListaMercadoria';
import "./App.css"

const App = () => {
  // Definindo um estado para controlar a visualização da página
  const [currentPage, setCurrentPage] = useState('cadastro-cliente');

  // Função para renderizar a página atual com base no estado
  const renderPage = () => {
    switch (currentPage) {
      case 'cadastro-cliente':
        return <CadastroCliente />;
      case 'cadastro-mercadoria':
        return <CadastroMercadoria />;
      case 'lista-clientes':
        return <ListaClientes />;
      case 'lista-mercadorias':
        return <ListaMercadorias />;
      default:
        return null;
    }
  };

  // Função para manipular a navegação entre páginas
  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
    <Header />
    <nav className="nav-container">
      <button className="nav-button" onClick={() => navigateTo('cadastro-cliente')}>Registro de Cliente</button>
      <button className="nav-button" onClick={() => navigateTo('cadastro-mercadoria')}>Registro de Mercadoria</button>
      <button className="nav-button" onClick={() => navigateTo('lista-clientes')}>Lista de Clientes</button>
      <button className="nav-button" onClick={() => navigateTo('lista-mercadorias')}>Lista de Mercadorias</button>
    </nav>
    {renderPage()}
    <Footer />
  </div>
  );
};


export default App;