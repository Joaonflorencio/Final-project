import React, { useState, useEffect } from 'react';
import { fetchClientes, deleteCliente } from '../services/api'; // Importe as funções para buscar e excluir clientes do seu arquivo api.js
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

  // Função para lidar com a exclusão de um cliente
  const handleDelete = async (id) => {
    try {
      // Exclua o cliente do backend
      await deleteCliente(id);
      // Atualize a lista de clientes após a exclusão
      const updatedClientes = clientes.filter((cliente) => cliente._id !== id);
      setClientes(updatedClientes);
    } catch (error) {
      setError('Erro ao excluir cliente. Por favor, tente novamente.');
    }
  };

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
              <th>Ações</th> {/* Adiciona uma coluna para as ações */}
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <tr key={cliente._id}>
                <td>{cliente._id}</td>
                <td>{cliente.nome}</td>
                <td>{cliente.email}</td>
                <td>{cliente.telefone}</td>
                <td>
                  <button onClick={() => handleDelete(cliente._id)}>Excluir</button>
                </td> {/* Botão para excluir o cliente */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ListaClientes;