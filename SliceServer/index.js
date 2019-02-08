const express = require('express');
const cors = require ('cors'); //inte säkert

//routes
const menu = require('./routes/menu');
const orders = require('./routes/orders')


let app = express();

//appen kör automatisk data genom json formatering
app.use(express.json());

//inte säkert
app.use(cors());

app.route('/menu')
.get(menu.get)

app.route('/orders')
.get(orders.get)
.post(orders.post)
.patch(orders.patch)

app.listen(3001, () => {
  console.log('Up in the air');
});
