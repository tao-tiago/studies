const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost:5672', function (err, conn) {
  conn.createChannel(function (err, ch) {
    const channel = 'myChannel';

    ch.assertQueue(channel, { durable: false });
    ch.prefetch(1);
    console.log(" [*] Aguardando as compras em %s.", channel);

    ch.consume(channel, function (msg) {
      console.log(" [x] Compra processada %s", msg.content.toString());
    }, { noAck: true });
  });
});