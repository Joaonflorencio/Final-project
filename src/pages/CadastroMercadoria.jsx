// src/pages/CadastroMercadoria.js

import React, { useState } from 'react';
import { cadastrarMercadoria } from '../services/api'; // Importe a função para cadastrar mercadoria do seu arquivo api.js

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
    <div>
      <h2>Cadastro de Mercadoria</h2>
      {mensagem && <p>{mensagem}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Descrição:
          <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
        </label>
        <label>
          Preço:
          <input type="number" value={preco} onChange={(e) => setPreco(e.target.value)} />
        </label>
        <label>
          Quantidade em Estoque:
          <input type="number" value={quantidadeEmEstoque} onChange={(e) => setQuantidadeEmEstoque(e.target.value)} />
        </label>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastroMercadoria;