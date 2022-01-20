const express = require('express');
const app = express();
require('./database/db');
app.use(express.json());
app.use("/api",require('./router/contactRouter'))




const PORT = process.env.PORT || 3001;

app.listen(PORT, () =>
{
    console.log('Server Running on Port', PORT);
})



