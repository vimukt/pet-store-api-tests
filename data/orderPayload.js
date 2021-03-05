// eslint-disable-next-line import/prefer-default-export
export const orderPayload = {
  id: 100,
  petId: 100,
  quantity: 0,
  shipDate: '2021-03-04T12:11:44.060Z',
  status: 'placed',
  complete: true,
};

export const invalidJsonPayload = {
  petId: '-2',
  quantity: '0',
};
