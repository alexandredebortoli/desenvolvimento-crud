# Desenvolvimento CRUD

Este é o repositório do projeto de desenvolvimento CRUD para a disciplina de Banco de Dados. O projeto consiste em realizar operações CRUD (Create, Read, Update, Delete) em três entidades: Carro, Modelo e Marca. O repositório está estruturado em dois diretórios principais: `client-desenvolvimento` e `service-desenvolvimento`.

## client-desenvolvimento

O diretório `client-desenvolvimento` contém a parte de front-end do projeto. O front-end foi desenvolvido utilizando Next.js, TypeScript, Tailwind CSS e Daisy UI.

### Dependências

Para baixar as dependências do projeto, siga as instruções abaixo:

1. Certifique-se de ter o Node.js e o gerenciador de pacotes Yarn instalados em seu sistema.

1. Navegue até o diretório `client-desenvolvimento` no terminal.
   
1. Execute o seguinte comando para instalar as dependências:
   
   ``` bash
   yarn install
   ```
   
### Executando o front-end
Após a instalação das dependências, você pode iniciar o servidor de desenvolvimento do front-end com o seguinte comando:

``` bash
yarn dev
```

Isso iniciará o servidor de desenvolvimento e o front-end estará acessível em http://localhost:3000.

## service-desenvolvimento

O diretório `service-desenvolvimento` contém a parte do back-end e a API REST que o front-end consome via HTTP. O back-end foi desenvolvido utilizando NestJS, TypeScript e TypeORM. Além disso, o back-end foi integrado com o Swagger para facilitar a documentação da API.

### Dependências

Para baixar as dependências do projeto, siga as instruções abaixo:

1. Certifique-se de ter o Node.js e o gerenciador de pacotes Yarn instalados em seu sistema.

1. Navegue até o diretório `service-desenvolvimento` no terminal.
   
1. Execute o seguinte comando para instalar as dependências:
   
   ``` bash
   yarn install
   ```

### Executando o back-end
Após a instalação das dependências e a criação do banco de dados, você pode iniciar o servidor de desenvolvimento do back-end com o seguinte comando:

``` bash
yarn start:dev
```

Isso iniciará o servidor de desenvolvimento do NestJS e o back-end estará acessível em http://localhost:3010.

### Documentação da API

A documentação da API foi gerada automaticamente pelo Swagger. Você pode acessá-la em http://localhost:3010/api.

## Banco de Dados

O banco de dados escolhido para este projeto foi o banco relacional MySQL. No repositório, você encontrará um arquivo com o script de criação do banco de dados e tabelas. Certifique-se de executar esse script em seu banco de dados MySQL antes de iniciar o back-end.
