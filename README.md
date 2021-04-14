Roteiro para replicar a poc

git clone https://github.com/karnagge/rest-poc.git

Entrar no diretório do projeto.

docker-compose up

o container rest-etitulo tem os códigos para execução

no diretório tutorial temos os scripts de produção e consumo

tutorial\producer\producer_test.py

e 

tutorial\consumer\consumer_json.js

para acessar o serviço 

http://localhost:3000/api/local-votacao/nome_58524

para verificacr o Redis:

npm redis-commander
redis-commander