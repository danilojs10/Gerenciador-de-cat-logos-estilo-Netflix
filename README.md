# Netflix Catalog Manager

Projeto para gerenciar catálogos estilo Netflix utilizando Azure Functions (serverless) e banco de dados no Azure (Cosmos DB, Azure SQL, etc).

## 🚀 Visão Geral

Este projeto tem como objetivo criar uma API backend para gerenciar filmes e séries em um catálogo, com as operações básicas de CRUD (Create, Read, Update, Delete), usando Azure Functions para escalabilidade e baixo custo.

## 📁 Estrutura do Projeto

netflix-catalog-manager/
├── api/
│ └── functions/ # Funções Azure Functions para cada endpoint
├── db/
│ └── scripts/ # Scripts para banco de dados
├── docs/ # Documentação do projeto
├── .github/
│ └── workflows/ # Pipelines CI/CD para GitHub Actions
├── README.md # Este arquivo
└── LICENSE # Licença do projeto


## ⚙️ Tecnologias Utilizadas

- Azure Functions (Node.js)
- Banco de Dados: Azure Cosmos DB (NoSQL) ou Azure SQL (relacional)
- GitHub Actions (CI/CD)
- JavaScript / Node.js
- Azure Functions Core Tools (para desenvolvimento local)

## 📌 Funcionalidades

- Listar filmes e séries do catálogo
- Adicionar novos filmes/séries
- Atualizar informações de filmes/séries
- Remover filmes/séries do catálogo

## 💻 Como Rodar Localmente

1. Clone este repositório

```bash
git clone https://github.com/seu-usuario/netflix-catalog-manager.git
cd netflix-catalog-manager/api
