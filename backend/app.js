const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

const uri = 'mongodb+srv://song:IWK0SbO5RVvapmyl@cluster0-yyysm.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(uri, {useNewUrlParser: true}).then(()=> {
    console.log('Connected')
}).catch( err => console.log(err));
mongoose.set('useFindAndModify', false);

app.use(cors());
app.use(bodyParser.json());

const userRoutes = require('./controllers/user');
const productRoutes = require('./controllers/product');
const orderRoutes = require('./controllers/order');

app.get('/api/products', productRoutes.getProducts);
app.get('/api/product/:name', productRoutes.getProduct);
app.post('/api/saveProduct', productRoutes.postProducts);

app.get('/api/users', userRoutes.userList); // list all
app.get('/api/login/:email/:password', userRoutes.user); // find acc with email and ps // login
app.get('/api/account/:email', userRoutes.userInfo);  // find acc with email // already login
app.post('/api/register', userRoutes.addUser);  // create new acc
app.put('/api/register/:email', userRoutes.updateUser);  // create new acc or update exist acc

app.get('/api/orders/:email', orderRoutes.orderList); // get all order with same email account
app.post('/api/checkout', orderRoutes.addOrder); // add new order


module.exports = app;