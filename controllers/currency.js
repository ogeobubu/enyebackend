const fetch = require("node-fetch");

exports.currencyAPI = (req, res) => {
  fetch("https://api.exchangeratesapi.io/latest", { method: "GET" })
    .then((response) => response.json())
    .then(() => {
      if (req.url === "/rates") {
        fetch("https://api.exchangeratesapi.io/latest", {
          method: "GET",
        })
          .then((response) => response.json())
          .then((data) => {
            res.status(200).json({
              results: data,
            });
          });
      } else if (req.query.base === "USD") {
        fetch("https://api.exchangeratesapi.io/latest?base=USD", {
          method: "GET",
        })
          .then((response) => response.json())
          .then((data) => {
            res.json({
              results: data,
            });
          });
      } else if (
        req.query.base === "CZK" &&
        req.query.currency === "EUR,GBP,USD"
      ) {
        fetch(
          "https://api.exchangeratesapi.io/latest?base=CZK&symbols=EUR,GBP,USD",
          {
            method: "GET",
          }
        )
          .then((response) => response.json())
          .then((data) => {
            res.json({
              results: data,
            });
          });
      } else {
        res.status(400).json({
          error: "Bad Request! Cannot fetch data from API.",
        });
      }
    });
};
