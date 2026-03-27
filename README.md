# Chronos Pomodoro ⏱️🍅

O **Chronos** é uma aplicação web focada em produtividade baseada na técnica Pomodoro. Desenvolvido para ajudar usuários a gerenciarem seu tempo de forma eficiente, alternando entre períodos de foco intenso e pausas restauradoras.  
Este projeto faz parte das aulas lecionadas pelo professor Luiz Otávio Miranda, do curso da Udemy, com algumas adaptações realizadas por mim.

---
# Índice
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Funcionalidades](#funcionalidades)
- [Como executar o projeto localmente](#como-executar-o-projeto-localmente)

---
## Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes ferramentas:

* **React:** Biblioteca JavaScript para construção da interface de usuário.
* **Vite:** Ferramenta de build extremamente rápida para o desenvolvimento.
* **TypeScript:** Adicionando tipagem estática para um código mais seguro e escalável.
* **React Router:** Gerenciamento de rotas e navegação (incluindo página 404 personalizada).
* **useReducer / Context API:** Para o gerenciamento de estado complexo dos ciclos do timer e tarefas.

---

## Funcionalidades

* Temporizador Pomodoro clássico (Tempo de Foco, Pausa Curta, Pausa Longa).
* Configurações de tempo totalmente personalizáveis pelo usuário.
* Validação de formulários para garantir intervalos de tempo corretos.
* Gerenciamento de estado de tarefas (Iniciar, Interromper, Concluir).
* Visualização do histórico das tarefas realizadas, com possibilidade de exclusão.
* Interface limpa, responsiva e amigável.
* Página 404 criativa com navegação de resgate.

---

## Como executar o projeto localmente

Siga os passos abaixo para rodar o projeto na sua máquina:

**1. Clone o repositório**
```bash
git clone https://github.com/chris-zpl/chronos-pomodoro
```

**2. Acesse a pasta do projeto**
```bash
cd chronos-pomodoro
```

**3. Instale as dependências**
```bash
npm install
```

**4. Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

**5. Acesse no navegador**  
O Vite geralmente inicia o servidor na porta `5173`.   
Acesse [**http://localhost:5173**](http://localhost:5173) para ver a aplicação rodando.