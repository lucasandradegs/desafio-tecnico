# README do Backend

O desafio do backend consiste em fazer uma API em NodeJS, na qual o servidor vai receber algumas requisições e para avançar, será necessário passar por um filto de avaliações primeiro. (Atualização de preços de produtos em um banco de dados.)

## Pré-requisitos

Para conseguir rodar o backend, é necessário seguir os seguintes requisitos:

- **Node.js**: Certifique-se de que o Node.js está instalado em sua máquina. Você pode fazer o download em [nodejs.org](https://nodejs.org/).

- **Banco de Dados MySQL**: Na pasta `src/database` do projeto, há um arquivo chamado `data-source.ts`. Você deve alterar as configurações de `username` e `password` para corresponder às credenciais da sua conta root do MySQL para que o backend possa se conectar ao banco de dados. Para facilitar minha visualização dos dados no Banco de Dados, utilizei o MySQL workbench para acompanahar se as requisições estavam surtindo efeito.

## Configuração do Banco de Dados

Você deve importar o seguinte arquivo para alimentar o banco de dados, para poder começar a trabalhar com as requisições.
https://drive.google.com/file/d/1Ee0V42j-YmDtQeF-isqnK__wHv1c_3-f/view?usp=drive_link

Você pode utilizar o seguinte comando para importar o arquivo SQL no MySQL:

```bash
mysql -u root -p < seu-arquivo.sql
```

Ou de forma manual, utilizando o MySQL Workbench para abrir o arquivo e rodar o schema.

Isso criará as tabelas e produtos necessários para o funcionamento do sistema.

## Instalação das Dependências

Após clonar o repositório para a sua máquina, navegue até a pasta do projeto e instale as dependências usando o seguinte comando:

```bash
npm install
```

## Executando o Backend

Agora que você configurou o banco de dados e instalou as dependências, pode iniciar o backend. Use o seguinte comando:

```bash
npm run dev:server
```

O servidor estará em execução na porta padrão 3333, mas você pode configurar a porta conforme necessário no arquivo de configuração. (server.ts)

## Testando as Chamadas de API

Você pode usar ferramentas como o Insomnia, Postman ou qualquer aplicativo de sua preferência para testar as chamadas de API ao backend e garantir que tudo esteja funcionando conforme o esperado.

## Tecnologias Utilizadas

- Node.js
- Typescript
- TypeORM
- MySQL

