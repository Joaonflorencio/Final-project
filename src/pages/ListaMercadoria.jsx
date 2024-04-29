// src/pages/ListaMercadorias.js

import React, { useState, useEffect } from 'react';
import { fetchMercadorias } from '../services/api'; // Importe a função para buscar mercadorias do seu arquivo api.js
import "../App.css"

const ListaMercadorias = () => {
  const [mercadorias, setMercadorias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Busque as mercadorias do backend
        const mercadoriasData = await fetchMercadorias();
        setMercadorias(mercadoriasData);
        setLoading(false);
      } catch (error) {
        setError('Erro ao buscar mercadorias. Por favor, tente novamente.');
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
      <h2 className="list-title">Lista de Mercadorias</h2>
      {mercadorias.length === 0 ? (
        <p>Nenhuma mercadoria cadastrada.</p>
      ) : (
        <table className="client-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Descrição</th>
              <th>Preço</th>
              <th>Quantidade em Estoque</th>
            </tr>
          </thead>
          <tbody>
            {mercadorias.map((mercadoria) => (
              <tr key={mercadoria._id}>
                <td>{mercadoria._id}</td>
                <td>{mercadoria.descricao}</td>
                <td>{mercadoria.preco}</td>
                <td>{mercadoria.quantidadeEmEstoque}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ListaMercadorias;