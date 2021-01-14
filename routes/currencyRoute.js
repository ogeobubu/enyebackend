const { Router } = require("express");
const { currencyAPI } = require("../controllers/currency");

const router = Router();

router.get("/rates", currencyAPI);

// --------------
// HARD CODED API
// --------------

// const fullResult = {
//   rates: {
//     CAD: 1.5487,
//     HKD: 9.4336,
//     ISK: 156,
//     PHP: 58.472,
//     DKK: 7.4392,
//     HUF: 360.25,
//     CZK: 26.173,
//     AUD: 1.5734,
//     RON: 4.8725,
//     SEK: 10.1383,
//     IDR: 17188.25,
//     INR: 89.0095,
//     BRL: 6.4869,
//     RUB: 89.7859,
//     HRK: 7.5805,
//     JPY: 126.44,
//     THB: 36.547,
//     CHF: 1.0812,
//     SGD: 1.6139,
//     PLN: 4.5253,
//     BGN: 1.9558,
//     TRY: 9.0531,
//     CNY: 7.8716,
//     NOK: 10.339,
//     NZD: 1.6954,
//     ZAR: 18.6329,
//     USD: 1.2166,
//     MXN: 24.1414,
//     ILS: 3.8212,
//     GBP: 0.88983,
//     KRW: 1335.2,
//     MYR: 4.9205,
//   },
//   base: "EUR",
//   date: today,
// };

// const resultsEUR = {
//   results: {
//     base: "EUR",
//     date: today,
//     rates: {
//       CAD: 1.5487,
//       HKD: 9.4336,
//       ISK: 156,
//       PHP: 58.472,
//       DKK: 7.4392,
//       HUF: 360.25,
//       CZK: 26.173,
//       AUD: 1.5734,
//       RON: 4.8725,
//       SEK: 10.1383,
//       IDR: 17188.25,
//       INR: 89.0095,
//       BRL: 6.4869,
//       RUB: 89.7859,
//       HRK: 7.5805,
//       JPY: 126.44,
//       THB: 36.547,
//       CHF: 1.0812,
//       SGD: 1.6139,
//       PLN: 4.5253,
//       BGN: 1.9558,
//       TRY: 9.0531,
//       CNY: 7.8716,
//       NOK: 10.339,
//       NZD: 1.6954,
//       ZAR: 18.6329,
//       USD: 1.2166,
//       MXN: 24.1414,
//       ILS: 3.8212,
//       GBP: 0.88983,
//       KRW: 1335.2,
//       MYR: 4.9205,
//     },
//   },
// };

// const resultsUSD = {
//   results: {
//     base: "USD",
//     date: today,
//     rates: {
//       CAD: 1.2729738616,
//       HKD: 7.7540687161,
//       ISK: 128.2262041756,
//       PHP: 48.0618116061,
//       DKK: 6.1147460135,
//       HUF: 296.1121157324,
//       CZK: 21.5132336018,
//       GBP: 0.7314072004,
//       RON: 4.0050139734,
//       SEK: 8.3333059346,
//       IDR: 14128.1029097485,
//       INR: 73.1625020549,
//       BRL: 5.331990794,
//       RUB: 73.8006740095,
//       HRK: 6.2308893638,
//       JPY: 103.92898241,
//       THB: 30.0402761795,
//       CHF: 0.8887062305,
//       EUR: 0.8219628473,
//       MYR: 4.04446819,
//       BGN: 1.6075949367,
//       TRY: 7.4413118527,
//       CNY: 6.4701627486,
//       NOK: 8.498273878,
//       NZD: 1.3935558113,
//       ZAR: 15.3155515371,
//       USD: 1,
//       MXN: 19.8433338813,
//       SGD: 1.3265658392,
//       AUD: 1.2932763439,
//       ILS: 3.140884432,
//       KRW: 1097.4847936873,
//       PLN: 3.7196284728,
//     },
//   },
// };

// const chooseCZKCurrency = {
//   results: {
//     base: "CZK",
//     date: today,
//     rates: {
//       EUR: 0.0377244605,
//       GBP: 0.033795458,
//       USD: 0.044824204,
//     },
//   },
// };

// router.get("/rates", (req, res) => {
//   if (req.url === "/rates") {
//     res.status(200).json(fullResult);
//   } else if (req.query.base === resultsEUR.results.base) {
//     res.status(200).json(resultsEUR);
//   } else if (req.query.base === resultsUSD.results.base) {
//     res.status(200).json(resultsUSD);
//   } else if (
//     req.query.base === chooseCZKCurrency.results.base &&
//     req.query.currency === "EUR,GBP,USD"
//   ) {
//     res.status(200).json(chooseCZKCurrency);
//   } else {
//     res.status(400).json({
//       error: "Bad Request!",
//     });
//   }
// });

module.exports = router;
