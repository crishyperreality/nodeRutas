const express = require('express')
const app = express()
const port = 3000

const indexRoutes = require('./routes/index');
const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product');
const loginRoutes = require('./routes/login');


app.use('/index', indexRoutes);
app.use('/user', userRoutes);
app.use('/product', productRoutes);
app.use('/login', loginRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})