const { Currency } = require('../models');

/**
 * Create a currency
 * @param {Object} currencyBody
 * @returns {Promise<Currency>}
 */
const createCurrency = async (currencyBody) => {
  console.log(req.body);
  return Currency.create(currencyBody);
};

/**
 * Query for users
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryCurrencies = async (filter, options) => {
//   const currencies = await Currency.g
//   const users = await User.paginate(filter, options);
//   return users;
    return Currency.findAll();
};

/**
 * Get currency by id
 * @param {ObjectId} id
 * @returns {Promise<Currency>}
 */
const getCurrencyById = async (id) => {
    const pk = parseInt(id);
    return Currency.findByPk(pk);
};

/**
 * Update currency by id
 * @param {ObjectId} currencyId
 * @param {Object} updateBody
 * @returns {Promise<Currency>}
 */
const updateCurrencyById = async (currencyId, updateBody) => {
  const currency = await getCurrencyById(currencyId);
  if (!currency) {
    throw new ApiError(4040, 'Currency not found');
  }

  Object.assign(currency, updateBody);
  await currency.save();
  return currency;
};

/**
 * Delete currency by id
 * @param {ObjectId} currencyId
 * @returns {Promise<Currency>}
 */
const deleteCurrencyById = async (currencyId) => {
  const currency = await getCurrencyById(currencyId);
  if (!currency) {
    throw new ApiError(404, 'Currency not found');
  }
  await currency.destroy();
  return currency;
};

module.exports = {
  createCurrency,
  queryCurrencies,
  getCurrencyById,
  updateCurrencyById,
  deleteCurrencyById,
};