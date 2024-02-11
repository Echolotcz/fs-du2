import axios from 'axios';
import mock from './mockApi';
import { USE_MOCK_DATA } from '../../config/config';

if (!USE_MOCK_DATA) {
    mock.restore(); 
}

export const getShoppingLists = () => {
    return axios.get('/api/shoppingLists')
        .then(response => {
            const data = response.data;
            console.log('Shopping lists:', data);
            return data;
        })
        .catch(error => {
            console.error('Error fetching shopping lists:', error);
            throw error;
        });
};

export const saveShoppingList = (newList) => {
    return axios.post('/api/shoppingLists', newList)
        .then(response => response.data)
        .catch(error => {
            console.error('Error saving shopping list:', error);
            throw error;
        });
};

export const removeShoppingList = (listId) => {
    return axios.delete(`/api/shoppingLists/${listId}`)
        .then(response => response.data)
        .catch(error => {
            console.error('Error removing shopping list:', error);
            throw error;
        });
};

export const saveItem = (targetId, newItem) => {
    return axios.post(`/api/shoppingLists/${targetId}/items`, newItem)
        .then(response => response.data)
        .catch(error => {
            console.error('Error saving item:', error);
            throw error;
        });
};

export const removeItem = (targetId, targetItemId) => {
    return axios.delete(`/api/shoppingLists/${targetId}/items/${targetItemId}`)
        .then(response => response.data)
        .catch(error => {
            console.error('Error removing item:', error);
            throw error;
        });
};

export const saveMember = (targetId, newMember) => {
    return axios.post(`/api/shoppingLists/${targetId}/members`, JSON.stringify(newMember))
        .then(response => response.data)
        .catch(error => {
            console.error('Error saving member:', error);
            throw error;
        });
};

export const removeMember = (targetId, targetMember) => {
    return axios.delete(`/api/shoppingLists/${targetId}/members/${targetMember}`)
        .then(response => response.data)
        .catch(error => {
            console.error('Error removing member:', error);
            throw error;
        });
};