from kafka import KafkaProducer
import json
import random
from time import sleep
from datetime import datetime

# Create an instance of the Kafka producer
producer = KafkaProducer(bootstrap_servers='localhost:9092',
                            value_serializer=lambda v: str(v).encode('utf-8'))

# Call the producer.send method with a producer-record
print("Ctrl+c to Stop")
count = 0
while True:
    producer.send('kafka-python-topic', "{\"nome\": \"Francisco Lopes\", \"numero\":" + str(count) + "}")
    print(str(count))
    count = count + 1