require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());
const routes = require("./routes");
app.use(routes);

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
});
