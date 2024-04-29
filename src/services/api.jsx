import { useState } from 'react';

const API_BASE_URL = 'https://backend-final-project-javascript-dev-tpex.2.ie-1.fl0.io';

export const cadastrarCliente = async (clienteData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/clientes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(clienteData),
    });
    if (!response.ok) {
      throw new Error('Erro ao cadastrar cliente.');
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const cadastrarMercadoria = async (mercadoriaData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/mercadorias`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mercadoriaData),
    });
    if (!response.ok) {
      throw new Error('Erro ao cadastrar mercadoria.');
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const fetchClientes = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/clientes`);
    if (!response.ok) {
      throw new Error('Erro ao buscar clientes.');
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const fetchMercadorias = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/mercadorias`);
    if (!response.ok) {
      throw new Error('Erro ao buscar mercadorias.');
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const deleteCliente = async (clienteId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/clientes/${clienteId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Erro ao excluir cliente.');
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const deleteMercadoria = async (mercadoriaId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/mercadorias/${mercadoriaId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Erro ao excluir mercadoria.');
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};