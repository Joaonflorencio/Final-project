// src/pages/CadastroMercadoria.js

import React, { useState } from 'react';
import { cadastrarMercadoria } from '../services/api'; // Importe a função para cadastrar mercadoria do seu arquivo api.js
import "../App.css"

const CadastroMercadoria = () => {
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [quantidadeEmEstoque, setQuantidadeEmEstoque] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Chame a função para cadastrar mercadoria com os dados do formulário
      await cadastrarMercadoria({ descricao, preco, quantidadeEmEstoque });
      setMensagem('Mercadoria cadastrada com sucesso!');
      // Limpe os campos do formulário após o cadastro
      setDescricao('');
      setPreco('');
      setQuantidadeEmEstoque('');
    } catch (error) {
      setMensagem('Erro ao cadastrar mercadoria. Por favor, tente novamente.');
    }
  };

  return (
    <div className="form-container">
    <h2 className="form-title">Registro de Mercadoria</h2>
    {mensagem && <p>{mensagem}</p>}
    <form onSubmit={handleSubmit} className="form-body">
      <label className="form-field">
        Descripción:
        <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
      </label>
      <label className="form-field">
        Precio:
        <input type="number" value={preco} onChange={(e) => setPreco(e.target.value)} />
      </label>
      <label className="form-field">
        Cantidad en stock:
        <input type="number" value={quantidadeEmEstoque} onChange={(e) => setQuantidadeEmEstoque(e.target.value)} />
      </label>
      <button type="submit" className="form-button">Registrar</button>
    </form>
  </div>
);
};

export default CadastroMercadoria;