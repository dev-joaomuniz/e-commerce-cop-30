-- Cria a tabela CLIENTES
CREATE TABLE clientes (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    telefone VARCHAR(15),
    email VARCHAR(100) NOT NULL UNIQUE
);

-- Cria a tabela PRODUTOS
CREATE TABLE produtos (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome_produto VARCHAR(100) NOT NULL,
    preco_custo DECIMAL(10, 2) NOT NULL,
    preco_venda DECIMAL(10, 2) NOT NULL,
    descricao TEXT NOT NULL,
    imagem_url VARCHAR(255)
);

-- Cria a tabela VENDAS
CREATE TABLE vendas (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome_cliente VARCHAR(100) NOT NULL,
    nome_produto VARCHAR(100) NOT NULL,
    quantidade INT(11) NOT NULL,
    valor_venda DECIMAL(10, 2) NOT NULL,
    valor_frete DECIMAL(10, 2)
);
