# Projeto IoT

Este é um projeto de uma aplicação que permite usuario se cadastrar para poder entrar no sistema e realizar o gerenciamento de dispositivos, podendo listar, criar, editar e deletar.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.12.

## Funcionalidades

-> Criar usuário;
-> Realizar login;
-> Criar um novo dispositivo;
-> Editar dispositivo
-> Excluir dispositivo;
-> Listar todos os dispositivos cadastrados.

## Pré-requisitos

Para executar este projeto localmente, você precisa ter o seguinte instalado em sua máquina:

-> Node.js;
-> Angular CLI;
-> Bootstrap;
-> JWT;
-> json-server (para simular uma API REST).

## Como executar

1 - Baixar Node.Js:
  entre no site `https://nodejs.org/en/download` e baixe a versão do node
  de acordo com seu sistema operacional e siga os passos de instalação.

2 - Baixar Angular CLI(Version 16):

Abra seu terminal e execute `npm install -g @angular/cli@16`,
caso tenha dificultadades para instalar, execute como administrado.

3 - Clone este repositório para o seu ambiente local:

`git clone` https://github.com/seu-usuario/nome-do-repositorio.git

4 - Navegue até o diretório do projeto:

cd nome-do-repositorio.

5 - Instale as dependências do projeto:

executar `npm install`.

6 - Abra outra janela do terminal e inicie o servidor de desenvolvimento do Angular:

executar  `ng serve` e abra seu navegador e abra seu navegador e acesse `http://localhost:4200/`
para visualizar a aplicação.

7 - Instalar o servidor da API REST (json-server):

executar `npm install json-server`.

8 - Inicie o servidor da API REST (json-server):

entrar na pasta chamada dados e executar `json-server --watch dados.json` e abra seu navegador e
acesse `http://localhost:3000/lista-usuarios` e `http://localhost:3000/lista-dispositivos` para acessar a API.

## Arquivo db.json

O arquivo dados.json contém os dados simulados da API REST. Ele inclui as informações dos usuarios e dispositivos cadastrados pela aplicação. Você pode adicionar, editar ou excluir dados neste arquivo para simular diferentes cenários de uso da aplicação.

## Autor

Expedito Pereira de Paiva Neto

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
# Teste-Wernher_Von_Braun
