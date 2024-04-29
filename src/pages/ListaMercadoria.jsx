import React, { useState, useEffect } from 'react';
import { fetchMercadorias, deleteMercadoria } from '../services/api'; // Importe a função para buscar e excluir mercadorias do seu arquivo api.js
import "../App.css";

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

  const handleDelete = async (mercadoriaId) => {
    try {
      // Exclua a mercadoria do backend
      await deleteMercadoria(mercadoriaId);
      // Atualize a lista de mercadorias após a exclusão
      setMercadorias(mercadorias.filter(mercadoria => mercadoria._id !== mercadoriaId));
    } catch (error) {
      setError('Erro ao excluir mercadoria. Por favor, tente novamente.');
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
              <th>Ações</th> {/* Adicione uma coluna para as ações */}
            </tr>
          </thead>
          <tbody>
            {mercadorias.map((mercadoria) => (
              <tr key={mercadoria._id}>
                <td>{mercadoria._id}</td>
                <td>{mercadoria.descricao}</td>
                <td>{mercadoria.preco}</td>
                <td>{mercadoria.quantidadeEmEstoque}</td>
                <td>
                  <button onClick={() => handleDelete(mercadoria._id)}>Excluir</button> {/* Botão de exclusão */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ListaMercadorias;