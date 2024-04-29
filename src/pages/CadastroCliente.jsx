import React, { useState } from 'react';
import axios from 'axios';
import "../App.css"

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
    <div className="form-container">
      <h2 className="form-title">Registro de cliente</h2>
      <p>{mensagem}</p>
      <form onSubmit={handleSubmit} className="form-body">
        <label className="form-field">
          Nome:
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        </label>
        <label className="form-field">
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label className="form-field">
          Telefone:
          <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
        </label>
        <button type="submit" className="form-button">Registrar</button>
      </form>
    </div>
  );
};

export default CadastroCliente;