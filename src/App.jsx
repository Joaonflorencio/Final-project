import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CadastroCliente from './pages/CadastroCliente';
import CadastroMercadoria from './pages/CadastroMercadoria';
import ListaClientes from './pages/ListaClientes';
import ListaMercadorias from './pages/ListaMercadoria';

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
      <nav>
        <ul>
          <li>
            <button onClick={() => navigateTo('cadastro-cliente')}>Cadastro de Cliente</button>
          </li>
          <li>
            <button onClick={() => navigateTo('cadastro-mercadoria')}>Cadastro de Mercadoria</button>
          </li>
          <li>
            <button onClick={() => navigateTo('lista-clientes')}>Lista de Clientes</button>
          </li>
          <li>
            <button onClick={() => navigateTo('lista-mercadorias')}>Lista de Mercadorias</button>
          </li>
        </ul>
      </nav>
      {renderPage()}
      <Footer />
    </div>
  );
};

export default App;