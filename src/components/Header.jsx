
import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Minha Aplicação</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/cadastro-cliente">Cadastro de Cliente</a></li>
          <li><a href="/cadastro-mercadoria">Cadastro de Mercadoria</a></li>
          <li><a href="/lista-clientes">Lista de Clientes</a></li>
          <li><a href="/lista-mercadorias">Lista de Mercadorias</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;