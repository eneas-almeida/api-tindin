# TINDIN

<img src="./media/images/logo-tindin.webp" />

## Teste Desenvolvedor: Backend

> API em NodeJS, utilizando banco de dados MongoDB (TypeORM), com cobertura de testes (coverages), utilizando o Jest.<br /> <a href="http://143.198.112.106:3010">👉 app url</a>

## Sobre o candidato do teste de back-end

**Edivam Enéas de Almeida Júnior**

Graduando em Engenharia de Computação pelo Instituto Federal da Paraíba (2017 - 2022). Pré concluinte.

**Telefone:** (83) 981300768<br />
**Email:** eneas.eng@yahoo.com

👉 <a href="https://www.linkedin.com/in/venzel">Linkedin</a><br />
👉 <a href="https://www.github.com/venzel">Github</a><br />

## Paths

### Login do user

```json
// http://143.198.112.106:3010/users/login (POST)
{
    "email": "admin@admin.com",
    "password": "G1rafarosa#"
}
```

### Registro de user

```json
// http://143.198.112.106:3010/users (POST)
{
    "name": "Tiago Rizzo",
    "email": "tiago@gmail.com",
    "password": "T1ag0rizzo#"
}
```

### Cria a aula

```json
// http://143.198.112.106:3010/classes (POST)
{
    "name": "Inglês",
    "description": "Aula de inglês ao vivo",
    "video": "http://inglesaovivo.com",
    "date_init": "12-12-2021",
    "date_end": "12-21-2021"
}
```

### Atualiza a aula

```json
// http://143.198.112.106:3010/classes/{id} (PUT)
{
    "name": "Portugês",
    "description": "Aula de portugês ao vivo",
    "video": "http://inglesaovivo.com",
    "date_init": "12-12-2021",
    "date_end": "12-21-2021"
}
```

### Lista as aulas

```json
// http://143.198.112.106:3010/classes (GET)
{}
```

### Mostra detalhes de uma aula

```json
// http://143.198.112.106:3010/classes/{id} (GET)
{}
```

### Deleta uma aula

```json
// http://143.198.112.106:3010/classes/{id} (DELETE)
{}
```

### Cria comentário

```json
// http://143.198.112.106:3010/classes/comments (POST)
{
    "id_class": "61e7952ab7b18add1344cde7",
    "comment": "Comentário sobre a aula de português..."
}
```

### Lista comentários

```json
// http://143.198.112.106:3010/comments (GET)
{}
```

### Mostra detalhes de um comentário

```json
// http://143.198.112.106:3010/classes/comments/{id} (GET)
{}
```

### Deleta um comentário

```json
// http://143.198.112.106:3010/classes/comments/{id} (DELETE)
{}
```

## Recursos utilizados

<p align="left">
  <img src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" alt="NodeJs" title="NodeJs" width="30" height="30" />
  <img src="https://cdn.worldvectorlogo.com/logos/typescript.svg" alt="Typescript" title="Typescript" width="30" height="30" />
  <img src="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg" alt="Javascript" title="Javascript" width="30" height="30" />
  <img src="./media/images/jest.svg" alt="Jest" title="Jest" width="30" height="30" />
</p>

-   Typescript
-   Docker / Docker compose
-   Arquitetura Feature By Package
-   Conceitos do DDD, como repository, providers, modules e etc.
-   Framework Express
-   Testes com coverages (Jest)
-   Serviço Sentry para catalogar errors
-   TypeOrm
-   JWT
-   Assincronismo de errors
-   Injeção de dependência com a biblioteca tsyringe
-   Babel para build, resolvendo o problema dos paths
-   Criação de seed para criar o user Admin
-   Helmet
-   Morgan
-   Validação nos DTOs com a biblioteca class-validator
-   Padrões de projeto (Chain of responsability, Strategy, Factory)
-   Gitflow (develop/master/main)
-   Utilização de padronização de commits (convetional commits)
-   Makefile

## Sugestões futuras

-   Utilizar o Swagger para documentar a API
-   Utilização de cache com Redis, utilizando o padrão proxy para login do usuário
-   Utilizar cache na parte de listagem de aulas e comentários
-   Utilizar filas com o bull para resolver a remoção em cascata dos documentos relacionados
-   Utilizar o rate limit para mitigar a idempotência dos métodos posts

## Vantagens da arquitetura Feat By Packages

-   **Manutenção**: Facilita o engajamento de multiplas equipes e colaboradores em um projeto;
-   **Escalável**: Facilita refatoramento do código monolítico para uma uma estrura de microserviços;
-   **SOLID**: Facilita a aplicação de todos os princípios do SOLID;
-   **Git**: Melhora o gerenciamento dos commits, evitando conflitos e etc;
-   **Testes**: Facilita o desenvolvimento de testes de unidade e integração.

## Outras informações

O projeto tem como gerencimento de pacotes o **Yarn** e o **Makefile** como automação de comandos, além disso, o MongoDB é um container do **Docker**.

## Gitflow

<img src="./media/images/gitflow-v1.png" />

## Testes com coverages reports

<img src="./media/images/all-coverages.png" />

<img src="./media/images/delete-comment-coverage.png" />

<img src="./media/images/alias-tests.png" />

## Como executar o projeto

### Pré-requisitos

-   NodeJs v12.22.9
-   Yarn v1.21.1
-   Docker v20.10.12, build e91ed57
-   Docker compose v1.29.2, build 5becea4c
-   Makefile para rodar os aliases

```bash
# Para clonar repositório
git clone https://gitlab.com/venzel/tindin.git

# Para entrar na pasta do projeto
cd tindin

# Para instalar os pacotes
make install

# Para rodar os testes
make test

# Para subir o container do mongodb na porta 27017
make up

# Para rodar as seeds do projeto (user admin)
make seed

# Para executar o projeto na porta 3010
make run
```
