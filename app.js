const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL;
const PATH = process.env.BASE_PATH_BRAIT_MODEL_ML

app.use(bodyParser.json())
app.use('/',require('./src/routes/index'))


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT} and this is database url are ${DATABASE_URL} thi is path ${PATH}`);
});