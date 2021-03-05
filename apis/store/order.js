/* eslint-disable linebreak-style */
import fetch from 'node-fetch';
import { BASE_URL, getHeaders } from '../../lib/auth';
import { invalidJsonPayload, orderPayload } from '../../data/orderPayload';

const orderUrl = `${BASE_URL}/store/order`;
const inventoryUrl = `${BASE_URL}/store/inventory`;

export const getInventory = async () => {
  const response = await fetch(inventoryUrl, {
    method: 'GET',
    headers: await getHeaders(),
  })
    .then((resp) => resp)
    .catch((error) => {
      console.log(error);
    });
  return response;
};

export const getPurchaseOrderById = async (orderId) => {
  const response = await fetch(`${orderUrl}/${orderId}`, {
    method: 'GET',
    headers: await getHeaders(),
  })
    .then((resp) => resp)
    .catch((error) => {
      console.log(error);
    });
  return response;
};

export const getPurchaseOrderForInvalidId = async () => {
  const response = await fetch(`${orderUrl}/hello`, {
    method: 'GET',
    headers: await getHeaders(),
  })
    .then((resp) => resp)
    .catch((error) => {
      console.log(error);
    });
  return response;
};

export const placeAnOrder = async () => {
  const response = await fetch(orderUrl, {
    method: 'post',
    headers: await getHeaders(),
    body: JSON.stringify(orderPayload),
  })
    .then((resp) => resp)
    .catch((error) => {
      console.log(error);
    });
  return response;
};

export const placeAnOrderWithInvalidJson = async () => {
  const response = await fetch(orderUrl, {
    method: 'post',
    headers: await getHeaders(),
    body: JSON.stringify(invalidJsonPayload),
  })
    .then((resp) => resp.json())
    .catch((error) => {
      console.log(error);
    });
  return response;
};
export const deletePurchaseOrderById = async (orderId) => {
  const response = await fetch(`${orderUrl}/${orderId}`, {
    method: 'delete',
    headers: await getHeaders(),
  })
    .then((resp) => resp)
    .catch((error) => {
      console.log(error);
    });
  return response;
};
export const deletePurchaseOrderForInvalidId = async () => {
  const response = await fetch(`${orderUrl}/hi`, {
    method: 'delete',
    headers: await getHeaders(),
  })
    .then((resp) => resp)
    .catch((error) => {
      console.log(error);
    });
  return response;
};
