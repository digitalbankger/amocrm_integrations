import tokenService from '@/services/tokenService';

const baseUrl = 'https://cors-anywhere.herokuapp.com/https://bkmzenbkmzen.amocrm.ru/api';

async function fetchData(endpoint, options = {}) {
  const accessToken = await tokenService.ensureTokenIsValid();

  options.headers = {
    ...options.headers,
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  };

  const response = await fetch(`${baseUrl}${endpoint}`, options);

  if (!response.ok) {
    throw new Error(`Ошибка: ${response.statusText}`);
  }

  const contentType = response.headers.get('Content-Type');

  if (contentType && contentType.includes('application/json')) {
    return await response.json();
  } else {
    return await response.text();
  }
}

// Получаю все сделки
export function fetchDeals() {
  return fetchData(`/v4/leads`)
    .then(response => {
      console.log('Ответ от API (сделки):', response); 
      return response;
    })
    .catch(error => {
      console.error('Ошибка при получении сделок:', error); 
    });
}

// Получаю сделку по ID
export function fetchDealById(id) {
  return fetchData(`/v4/leads/${id}`);
}

export function useApi() {
  return {
    fetchDeals,
    fetchDealById,
  };
}
