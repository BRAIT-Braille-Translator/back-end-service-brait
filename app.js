const express = require('express')
const app = express();
const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL;


// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.use('/',require('./src/routes/index'))


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT} and this is database url ${DATABASE_URL}`);
});