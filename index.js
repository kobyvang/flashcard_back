const connectDB = require('./startup/db');
const express = require('express');
const app = express();
const products = require('./routes/collections');

connectDB();


app.use(express.json());
app.use('/api/collections', products);




const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});
