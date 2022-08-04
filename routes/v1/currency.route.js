const express = require('express');
const router = express.Router();
const currencyController = require('../../controllers/currencies.controller');


router
  .route('/')
  .post(currencyController.createCurrency)
  .get(currencyController.getCurrencies);

router
  .route('/:id')
  .get(currencyController.getCurrency)
  .patch(currencyController.updateCurrency)
  .delete( currencyController.deleteCurrency);

module.exports = router;


/**
 * @swagger
 * tags:
 *   name: Currencies
 *   description: Currencies management and retrieval
 */

/**
 * @swagger
 * /v1/currency:
 *   post:
 *     summary: Create a currency
 *     description: It create a new currency.
 *     tags: [Currencies]
 *     security:
 *       - basicAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - symbol
 *               - usdValue
 *             properties:
 *               name:
 *                 type: string
 *               symbol:
 *                 type: string
 *               usdValue:
 *                 type: number
 *             example:
 *               name: Bitcoin
 *               symbol: BTC
 *               usdValue: 19000.12
 *     responses:
 *       "201": 
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Currency'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *
 *   get:
 *     summary: Get all currencies
 *     description: List of available currencies.
 *     tags: [Currencies]
 *     security:
 *       - basicAuth: []
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: User name
 *       - in: query
 *         name: role
 *         schema:
 *           type: string
 *         description: User role
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *         description: sort by query in the form of field:desc/asc (ex. name:asc)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *         default: 10
 *         description: Maximum number of users
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Currency'
 *                 page:
 *                   type: integer
 *                   example: 1
 *                 limit:
 *                   type: integer
 *                   example: 10
 *                 totalPages:
 *                   type: integer
 *                   example: 1
 *                 totalResults:
 *                   type: integer
 *                   example: 1
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 */

/**
 * @swagger
 * /currency/{id}:
 *   get:
 *     summary: Get a currency
 *     description: Details of a currency.
 *     tags: [Currencies]
 *     security:
 *       - basicAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Currency id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Currency'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a currency
 *     description: Alter values.
 *     tags: [Currencies]
 *     security:
 *       - basicAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Currency id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               symbol:
 *                 type: string
 *               usdValue:
 *                 type: number
 *             example:
 *               name: Etherun
 *               symbol: eth
 *               usdValue: 2421.12
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Currency'
 *       "400":
 *         $ref: '#/components/responses/NotFound'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *
 *   delete:
 *     summary: Delete a currency
 *     description: Deletes a currency from the DB.
 *     tags: [Currencies]
 *     security:
 *       - basicAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Currency id
 *     responses:
 *       "200":
 *         description: No content
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 */