# E-commerce Temático COP-30 Pará

> **Projeto Full-Stack de Simulação de Vendas** desenvolvido com HTML, CSS, JavaScript, **PHP** e **MySQL**. O foco é demonstrar a criação de um sistema completo com cadastro de clientes/produtos, e lógica de vendas com cálculo de frete (integração VIACEP).

## 🛠️ Tecnologias Utilizadas

| Camada | Tecnologia | Detalhes |
| :--- | :--- | :--- |
| **Front-end** | HTML5, CSS3, JavaScript | Interface, estilo e interatividade (como a busca de CEP). |
| **Back-end** | PHP | Lógica de negócio, processamento de formulários e comunicação com o banco de dados. |
| **Banco de Dados** | MySQL | Persistência dos dados (tabelas CLIENTES, PRODUTOS, VENDAS). |
| **API** | VIACEP | Serviço externo para busca de CEP e cálculo de frete. |

---

## ✨ Funcionalidades

O sistema implementa as operações CRUD básicas sobre as entidades principais:

* **CRUD de Clientes:** Cadastro, visualização e gestão dos dados do cliente.
* **CRUD de Produtos:** Cadastro de itens com nome e preço.
* **Sistema de Vendas:** Tela dedicada para registrar transações.
* **Cálculo de Frete:** Utilização da API **VIACEP** para cálculo dinâmico de frete.

---

## ⚙️ Como Rodar o Projeto (Setup Local)

Siga os passos abaixo para configurar e executar o projeto no seu ambiente local (XAMPP):

### 1. Clonar o Repositório

Mova a pasta clonada para o diretório de servidor do XAMPP (`htdocs`).

```bash
git clone https://github.com/dev-joaomuniz/e-commerce-cop-30.git
```

### 2. Configurar o Banco de Dados

Inicie os módulos **Apache** e **MySQL** no XAMPP.

Acesse o **phpMyAdmin** (http://localhost/phpmyadmin).

Crie um novo banco de dados (ex: e_commerce_cop30_db)

Acesse a aba **"Importar"** e selecione o arquivo **db/database.sql** deste repositório para criar automaticamente todas as tabelas.

### 3. Configurar a Conexão PHP

Este repositório **ignora** o arquivo de conexão por segurança **(includes/db_connection.php). Você deve criá-lo localmente**:

Crie o arquivo **includes/db_connection.php** na pasta **includes/**.

Insira suas credenciais do XAMPP (Geralmente, root sem senha):

PHP

```php
<?php
// Configurações do MySQL (XAMPP/Localhost)
$host = 'localhost';
$user = 'root'; 
$pass = ''; // Senha do seu ambiente local
$db_name = 'e_commerce_cop30_db'; // Nome do banco que você criou no passo 2

// Conexão
$conn = new mysqli($host, $user, $pass, $db_name);

// Verifica a conexão
if ($conn->connect_error) {
    die("Falha na conexão com o banco de dados: " . $conn->connect_error);
}
?>
```

### 4. Acessar a Aplicação

Abra o navegador e acesse o ponto de entrada:

http://localhost/e-commerce-cop-30/index.php
**Ação Final**: Se você ainda não fez o commit, execute os comandos finais no terminal:

Bash

```bash
git add .
git commit -m "chore: Estrutura inicial do projeto, com pastas e arquivos bases"
git remote add origin https://github.com/dev-joaomuniz/e-commerce-cop-30.git
git push -u origin main
```

## 📝 Convenção de Commits

Para manter o histórico do projeto limpo e rastreável, utilize os prefixos abaixo em suas mensagens de commit:

| Prefixo | Significado | Exemplo |
| :--- | :--- | :--- |
| **feat:** | Adiciona uma **nova funcionalidade** (Ex: cadastro, listagem). | `feat: Adiciona tela de cadastro de produtos` |
| **fix:** | Corrige um **bug**. | `fix: Corrige erro na conexão com o banco de dados` |
| **refactor:** | **Refatoração.** Melhora a estrutura do código **sem alterar** sua funcionalidade. | `refactor: Simplifica a função de cadastro de clientes no functions.php` |
| **chore:** | **Configuração e Organização**. Mudanças na estrutura, ferramentas ou setup. **Não afeta a lógica funcional do sistema**. | `chore: Adiciona .gitkeep nas pastas de assets` |
| **docs:** | Mudança apenas na **documentação**. | `docs: Atualiza a seção Como Rodar o Projeto` |