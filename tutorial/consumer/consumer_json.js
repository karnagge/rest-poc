const Kafka = require('no-kafka');
const redis = require('redis');
const rejson = require('redis-rejson');

// Create an instance of the Kafka consumer
var valueSum = 0;
var count = 1

rejson(redis);

const client = redis.createClient({
    host: 'localhost',
    port: 6379,
    password: '<password>'
});

client.on('error', err => {
    console.log('Error ' + err);
});

const consumer = new Kafka.SimpleConsumer({"connectionString":"localhost:9092"})
var data = function (messageSet) {
    messageSet.forEach(function (m) {
        var value = m.message.value.toString('utf8');
        console.log('nome_' + parseInt(count) + ' = ' + value);

        client.json_set('nome_' + count,'.', value, (err) => {
            if (err) throw err;
        });  

        count = count + 1;
    });
};

// Subscribe to the Kafka topic
return consumer.init().then(function () {
    return consumer.subscribe('kafka-python-topic', data);
});