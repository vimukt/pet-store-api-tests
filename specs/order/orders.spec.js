import { assert } from 'chai';
import Ajv from 'ajv';
import {
  getPurchaseOrderById, placeAnOrder, placeAnOrderWithInvalidJson, getPurchaseOrderForInvalidId,
  getInventory, deletePurchaseOrderById, deletePurchaseOrderForInvalidId,
} from '../../apis/store/order';

const schema = require('../../schema/order');

const API_RESPONSE_TIME_SLA = 5000;
const ajv = new Ajv();

describe('Store test suite :-> Access to Petstore orders', () => {
  it('Place a pet order : Happy path', async () => {
    const startTime = new Date().getTime();
    const newOrderResponse = await placeAnOrder();
    // Verify basic performance sanity/Response time SLA (is 5 sec.)
    assert.isTrue(new Date().getTime() - startTime < API_RESPONSE_TIME_SLA);
    const newOrderBody = await newOrderResponse.json();
    const contentType = newOrderResponse.headers.get('content-type');
    // Verify correct HTTP status code
    assert.equal(newOrderResponse.status, 200);
    // Verify response payload
    assert.equal(newOrderBody.petId, 100);
    // Verify response headers
    assert.isTrue(contentType.includes('application/json'));
    // Validate the schema
    const validate = ajv.compile(schema);
    const isSchemaValid = validate(newOrderBody);
    assert.isTrue(isSchemaValid);
  });

  it('Place a pet order with invalid json payload : Negative', async () => {
    const startTime = new Date().getTime();
    const invalidOrder = await placeAnOrderWithInvalidJson();
    // Verify basic performance sanity/Response time SLA (is 5 sec.)
    assert.isTrue(new Date().getTime() - startTime < API_RESPONSE_TIME_SLA);
    // Verify correct HTTP status code
    assert.notEqual(invalidOrder.status, 200);
  });

  it('find purchase order by ID: Happy path', async () => {
    const startTime = new Date().getTime();
    const orderById = await getPurchaseOrderById(100);
    // Verify basic performance sanity/Response time SLA (is 5 sec.)
    assert.isTrue(new Date().getTime() - startTime < API_RESPONSE_TIME_SLA);
    const orderByIdBody = await orderById.json();
    const contentType = orderById.headers.get('content-type');
    // Verify correct HTTP status code
    assert.equal(orderById.status, 200);
    // Verify response payload
    assert.equal(orderByIdBody.petId, 100);
    // Verify response headers
    assert.isTrue(contentType.includes('application/json'));
  });
  it('find purchase order by invalid ID : Negative', async () => {
    const startTime = new Date().getTime();
    const orderById = await getPurchaseOrderForInvalidId();
    // Verify basic performance sanity/Response time SLA (is 5 sec.)
    assert.isTrue(new Date().getTime() - startTime < API_RESPONSE_TIME_SLA);
    // Verify correct HTTP status code
    assert.equal(orderById.status, 404);
  });

  it('Returns pet inventories by status: Happy path', async () => {
    const startTime = new Date().getTime();
    const inventory = await getInventory();
    // Verify basic performance sanity/Response time SLA (is 5 sec.)
    assert.isTrue(new Date().getTime() - startTime < API_RESPONSE_TIME_SLA);
    const inventoryBody = await inventory.json();
    const contentType = inventory.headers.get('content-type');
    // Verify correct HTTP status code
    assert.equal(inventory.status, 200);
    // Verify response payload
    assert.isTrue(inventoryBody.available > 0);
    // Verify response headers
    assert.isTrue(contentType.includes('application/json'));
  });
  it('Delete purchase order by ID: Happy path', async () => {
    const startTime = new Date().getTime();
    const deletedPO = await deletePurchaseOrderById(100);
    // Verify basic performance sanity/Response time SLA (is 5 sec.)
    assert.isTrue(new Date().getTime() - startTime < API_RESPONSE_TIME_SLA);
    const deletedPOBody = await deletedPO.json();
    const contentType = deletedPO.headers.get('content-type');
    // Verify correct HTTP status code
    assert.equal(deletedPO.status, 200);
    // Verify response payload
    assert.equal(deletedPOBody.code, 200);
    // Verify response headers
    assert.isTrue(contentType.includes('application/json'));
  });
  it('Delete purchase order by invalid ID: Negative', async () => {
    const startTime = new Date().getTime();
    const deletedPO = await deletePurchaseOrderForInvalidId();
    // Verify basic performance sanity/Response time SLA (is 5 sec.)
    assert.isTrue(new Date().getTime() - startTime < API_RESPONSE_TIME_SLA);
    // Verify correct HTTP status code
    assert.equal(deletedPO.status, 404);
  });
});
