// src/pages/ListaClientes.js

import React, { useState, useEffect } from 'react';
import { fetchClientes } from '../services/api'; // Importe a função para buscar clientes do seu arquivo api.js

const ListaClientes = () => {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Busque os clientes do backend
        const clientesData = await fetchClientes();
        setClientes(clientesData);
        setLoading(false);
      } catch (error) {
        setError('Erro ao buscar clientes. Por favor, tente novamente.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Lista de Clientes</h2>
      {clientes.length === 0 ? (
        <p>Nenhum cliente cadastrado.</p>
      ) : (
        <ul>
          {clientes.map((cliente) => (
            <li key={cliente._id}>
              <strong>{cliente.nome}</strong> - {cliente.email} - {cliente.telefone}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListaClientes;