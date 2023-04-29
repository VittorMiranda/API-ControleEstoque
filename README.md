# API-ControleEstoque
API TCC Controle de estoque Sarvodelli

Essa API tem como função conectar um aplicativo de gestão de estoque com o banco de dados,
permitindo adicionar, alterar ou excluir registros do banco de dados.

Caso deseje testar essa API basta.
1. Alterar as configurações de conexão com o banco de dados com os dados de seu banco de dados local.
2. Entrar na pasta back através do terminal.
3. Executar o comando: npx sequelize-cli db:migrate(ira gerar as tabelas do banco de dados que criado para esse projeto).
4. Utilizar o comando npm run dev 
Após esses passo basta abrir o insominia e testar as rotas presentes no arquivo routes.js
Para saber como inserir dados basta entrar no arquivo controller respectivo a rota que deseja utilizar, 
lá estar o padrão JSON e o nome das variaveis que devo usar.
Antes de tudo é bom utilizar o comando "npm install" para garantir que todas as bibliotecas estão iinstaladas.
