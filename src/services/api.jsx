import { useState } from 'react';

const API_BASE_URL = 'http://localhost:5491';

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