const catchAsync = require('../utils/catchAsync');
const { currencyService } = require('../services');


const createCurrency = catchAsync(async (req, res) => {
  const currency = await currencyService.createCurrency(req.body);
  res.status(201).send(currency);
});

const getCurrencies = catchAsync(async (_req, res) => {
  // const filter = pick(req.query, ['name', 'role']);
  // const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await currencyService.queryCurrencies({}, {});
  res.send(result);
});

const getCurrency = catchAsync(async (req, res) => {
  const currency = await currencyService.getCurrencyById(req.params.id);
  if (!currency) {
   res.status(404).send({"error":"Currency not found"});
  }
  res.send(currency);
});

const updateCurrency = catchAsync(async (req, res) => {
  const user = await currencyService.updateCurrencyById(req.params.id, req.body);
  res.send(user);
});

const deleteCurrency = catchAsync(async (req, res) => {
  await currencyService.deleteCurrencyById(req.params.id);
  res.status(204).send();
});

module.exports = {
  createCurrency,
  getCurrencies,
  getCurrency,
  updateCurrency,
  deleteCurrency,
};