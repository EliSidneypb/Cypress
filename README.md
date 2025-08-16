# 👋 Projeto de Login com Cypress

---

## 🚀 Sobre

Este projeto inclui um front-end simples de login e testes E2E automatizados com Cypress. Ideal para aprender sobre automação de testes e fluxo de autenticação.

### 🛠️ Tecnologias

✅ HTML5
✅ CSS3
✅ JavaScript (Vanilla JS)
✅ Cypress
💻 Visual Studio Code
🛠️ Git e GitHub

### 📁 Estrutura do Projeto

```
projeto-login-cypress/
│
├── index.html           # Tela de login
├── dashboard.html       # Tela de dashboard após login
├── style.css            # Estilos CSS
├── script.js            # Validação e redirecionamento
├── package.json         # Configuração Node e scripts
├── cypress.config.js    # Configuração Cypress
└── cypress/
    ├── e2e/
    │   └── login.cy.js  # Testes E2E
    ├── fixtures/        # Dados de teste (opcional)
    └── support/
        └── e2e.js       # Arquivo de suporte do Cypress
```

### Pré-requisitos

* Node.js (recomendado 18+)
* npm (vem com o Node.js)
* Navegador (Chrome, Edge ou Firefox)

### Passo a Passo de Execução

#### 1. Clonar ou baixar o repositório

```bash
git clone https://github.com/EliSidneypb/Cypress.git
cd Cypress
```

#### 2. Instalar dependências

```bash
npm install
```

#### 3. Subir o servidor local

```bash
npm run dev
```

* Acesse `http://localhost:8080` para visualizar a tela de login.

#### 4. Abrir Cypress

```bash
npm run cy:open
```

* Escolha **E2E Testing**.
* Selecione o navegador desejado.
* Clique no teste `login.cy.js` para executar.

#### 5. Rodar testes em modo headless

```bash
npm run cy:run
```

* Executa todos os testes E2E sem abrir a interface do Cypress.

#### 6. Executar servidor e Cypress simultaneamente (opcional)

```bash
npm run start:test
```

* Necessita da dependência `concurrently` instalada.

### Scripts no `package.json`

```json
"scripts": {
  "dev": "http-server -p 8080",
  "cy:open": "cypress open",
  "cy:run": "cypress run",
  "start:test": "concurrently \"npm run dev\" \"npm run cy:open\""
}
```

* `dev` → Sobe o servidor local
* `cy:open` → Abre o Cypress
* `cy:run` → Roda testes em modo headless
* `start:test` → Executa servidor + Cypress juntos

---

## 📝 Como baixar e executar o projeto

1. Abra o terminal (cmd, PowerShell ou Git Bash) na pasta onde quer salvar o projeto.
2. Clone o repositório:

```bash
git clone https://github.com/EliSidneypb/Cypress.git
```

3. Entre na pasta do projeto:

```bash
cd Cypress
```

4. Instale as dependências:

```bash
npm install
```

5. Execute o servidor e/ou Cypress:

```bash
npm run dev          # Abre servidor
npm run cy:open      # Abre Cypress
# ou em modo headless
npm run cy:run
```

---

## 🤝 Colabore

Sinta-se à vontade para explorar, testar e contribuir com melhorias no projeto.

---

## 📫 Contato

* 💼 [LinkedIn](https://www.linkedin.com/in/eli-santos-61a71031a/)

---

## 🔙 [Voltar para o Treinamento](https://github.com/EliSidneypb/Treinamento)

