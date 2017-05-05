const express = require('express');

require('dotenv').config();

const app = express();

const port = process.env.PORT || 3000;
app.use(express.static('./client'));


app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
