from kafka import KafkaConsumer
from json import loads

consumer = KafkaConsumer(
    'orders',
     bootstrap_servers=['localhost:9092'],
     auto_offset_reset='earliest',
     value_deserializer=lambda x: loads(x.decode('utf-8')))

for message in consumer:
    message = message.value
    print('{}'.format(message))