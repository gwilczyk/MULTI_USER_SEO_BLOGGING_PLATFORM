import fetch from 'isomorphic-fetch';
import { API } from '../config';

export const createCategory = (category, token) => {
	return fetch(`${API}/category`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(category),
	})
		.then(response => response.json())
		.catch(err => console.log(err));
};

export const getCategories = () => {
	return fetch(`${API}/category/listAllCategories`, { method: 'GET' })
		.then(response => response.json())
		.catch(err => console.log(err));
};

export const getCategory = slug => {
	return fetch(`${API}/category/${slug}`, { method: 'GET' })
		.then(response => response.json())
		.catch(err => console.log(err));
};

export const deleteCategory = (slug, token) => {
	return fetch(`${API}/category/${slug}`, {
		method: 'DELETE',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	})
		.then(response => response.json())
		.catch(err => console.log(err));
};
