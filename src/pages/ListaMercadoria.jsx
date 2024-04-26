// src/pages/ListaMercadorias.js

import React, { useState, useEffect } from 'react';
import { fetchMercadorias } from '../services/api'; // Importe a função para buscar mercadorias do seu arquivo api.js

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
    <div>
      <h2>Lista de Mercadorias</h2>
      {mercadorias.length === 0 ? (
        <p>Nenhuma mercadoria cadastrada.</p>
      ) : (
        <ul>
          {mercadorias.map((mercadoria) => (
            <li key={mercadoria._id}>
              <strong>{mercadoria.descricao}</strong> - Preço: {mercadoria.preco} - Estoque: {mercadoria.quantidadeEmEstoque}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListaMercadorias;