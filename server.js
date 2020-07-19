const express = require('express')
const app = express();
const routes = require("./routes/index.js");
const cors = require('cors');
app.use(cors());
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use("/", routes);


app.listen(8000, () => {
    console.log("hello world")
  console.log('Example app listening on port 8000!')
});