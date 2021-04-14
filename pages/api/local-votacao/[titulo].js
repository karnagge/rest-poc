// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const Kafka = require('no-kafka');
const redis = require('redis');
const rejson = require('redis-rejson');

rejson(redis);

const client = redis.createClient({
    host: 'redis',
    port: 6379,
    password: '<password>'
});

client.on('error', err => {
    console.log('Error ' + err);
});

export default function handler(req, res) {
  const { titulo } = req.query
  client.json_get(`${titulo}`, '.', function (err, value) {
    if (err) { throw err; }
    res.status(200).json(value)
    //client.quit();
  });
}
