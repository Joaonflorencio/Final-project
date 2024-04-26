import React, { useState } from 'react';
import axios from 'axios';

const CadastroCliente = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Enviar os dados para o backend
      await axios.post('http://localhost:5491/clientes', {
        nome,
        email,
        telefone
      });

      // Limpar os campos e exibir mensagem de sucesso
      setNome('');
      setEmail('');
      setTelefone('');
      setMensagem('Cliente cadastrado com sucesso!');
    } catch (error) {
      // Exibir mensagem de erro se ocorrer algum problema
      setMensagem('Erro ao cadastrar cliente. Por favor, tente novamente.');
    }
  };

  return (
    <div>
      <h2>Cadastro de Cliente</h2>
      <p>{mensagem}</p>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Telefone:
          <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
        </label>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastroCliente;