// src/pages/ListaClientes.js

import React, { useState, useEffect } from 'react';
import { fetchClientes } from '../services/api'; // Importe a função para buscar clientes do seu arquivo api.js
import "../App.css"

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
      <div className="list-container">
        <h2 className="list-title">Lista de Clientes</h2>
        {clientes.length === 0 ? (
          <p>Nenhum cliente cadastrado.</p>
        ) : (
          <table className="client-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Telefone</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map((cliente) => (
                <tr key={cliente._id}>
                  <td>{cliente._id}</td>
                  <td>{cliente.nome}</td>
                  <td>{cliente.email}</td>
                  <td>{cliente.telefone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  };
  
export default ListaClientes;