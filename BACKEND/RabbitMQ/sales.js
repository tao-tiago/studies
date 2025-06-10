const amqp = require('amqplib/callback_api');
const express = require('express')
const app = express()
app.use(express.json());
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {

  const {
    message
  } = req.body;

  amqp.connect('amqp://localhost:5672', function (err, conn) {
    conn.createChannel(function (err, ch) {
      const channel = 'myChannel';
      const msg = message;
      ch.assertQueue(channel, { durable: false });
      ch.sendToQueue(channel, new Buffer.from(msg));
      console.log(" [x] Enviando compra: %s", msg);
    });
  });

  res.send(`Compra enviada! ${message}`)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})