const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv/config");

const { PORT_PATH } = process.env;

const currencyRoute = require("./routes/currencyRoute");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use("/api", currencyRoute);

const PORT = process.env.PORT || PORT_PATH;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
