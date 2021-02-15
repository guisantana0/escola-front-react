# escola-front-react
Aplicação em React para Escola

Necessário ter instalado o NodeJS, NPM ou Yarn.

Após clonar o repositório execute os passos:

* Abra o prompt ou terminal no diretório raiz do projeto.
* digite o comando: yarn install ou npm install
Aguarde até baixar todas as dependências.

Após baixar as dependências, é necessário editar o arquivo:
src/appsetings.js

Esse arquivo é responsável pelo endereço de comunicação com a api da escola, sem esse endereço não é possível manter os dados do sistema.

Modifique a linha da 2 colocando o endereço ip e o caminho até a api do servidor backend da escola.

Exemplo:
http://192.168.0.3:80/escola-api/

para 
http://localhost:80/escola-api/

após a edição, execute o seguinte comando no terminal: yarn start

após isso o serviço estará executando na porta 3000.
