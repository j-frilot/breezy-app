const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

let books = [];

app.use(cors());

app.post("/book", (req, res) => {

})

app.listen(port, () => console.log(`Listening at port ${port}`));