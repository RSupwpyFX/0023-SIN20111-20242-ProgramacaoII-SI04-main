-- Tabela Endereco
CREATE TABLE Endereco (
    IdEndereco SERIAL PRIMARY KEY,
    CEP VARCHAR(10) NOT NULL,
    Endereco VARCHAR(255) NOT NULL,
    Numero VARCHAR(10),
    Bairro VARCHAR(100),
    Cidade VARCHAR(100),
    Estado VARCHAR(2),
    Celular VARCHAR(15)
);

-- Tabela Pessoa
CREATE TABLE Pessoa (
    IdPessoa SERIAL PRIMARY KEY,
    Nome VARCHAR(100) NOT NULL,
    CPF VARCHAR(11) UNIQUE NOT NULL,
    RG VARCHAR(15),
    DataNascimento DATE,
    Sexo VARCHAR(10),
    IdEndereco INT REFERENCES Endereco(IdEndereco),
    Email VARCHAR(100) UNIQUE NOT NULL,
    Senha VARCHAR(255) NOT NULL
);

-- Tabela Usuario
CREATE TABLE Usuario (
    IdUsuario SERIAL PRIMARY KEY,
    TipoUsuario VARCHAR(50) NOT NULL
);

-- Tabela Funcionario
CREATE TABLE Funcionario (
    IdFuncionario SERIAL PRIMARY KEY,
    IdPessoa INT REFERENCES Pessoa(IdPessoa),
    IdUsuario INT REFERENCES Usuario(IdUsuario),
    Funcao VARCHAR(50),
    NivelPermissao INT
);

-- Tabela Cliente
CREATE TABLE Cliente (
    IdCliente SERIAL PRIMARY KEY,
    IdPessoa INT REFERENCES Pessoa(IdPessoa),
    IdUsuario INT REFERENCES Usuario(IdUsuario)
);

-- Tabela Produto
CREATE TABLE Produto (
    IdProduto SERIAL PRIMARY KEY,
    Nome VARCHAR(100) NOT NULL,
    Descricao TEXT,
    Quantidade INT,
    Valor DECIMAL(10, 2)
);

-- Tabela VendaCabecalho
CREATE TABLE VendaCabecalho (
    IdVenda SERIAL PRIMARY KEY,
    IdCliente INT REFERENCES Cliente(IdCliente),
    IdFuncionario INT REFERENCES Funcionario(IdFuncionario),
    DataVenda TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ValorTotal DECIMAL(10, 2),
    FormaPagamento VARCHAR(50),
    Status VARCHAR(20)
);

-- Tabela VendaCorpo
CREATE TABLE VendaCorpo (
    IdVendaCorpo SERIAL PRIMARY KEY,
    IdVenda INT REFERENCES VendaCabecalho(IdVenda),
    IdProduto INT REFERENCES Produto(IdProduto),
    Quantidade INT,
    ValorUnitario DECIMAL(10, 2),
    ValorTotal DECIMAL(10, 2)
);

-- Tabela Estoque
CREATE TABLE Estoque (
    IdEstoque SERIAL PRIMARY KEY,
    IdProduto INT REFERENCES Produto(IdProduto),
    Quantidade INT
);

-- Tabela Carrinho
CREATE TABLE Carrinho (
    IdCarrinho SERIAL PRIMARY KEY,
    IdCliente INT REFERENCES Cliente(IdCliente),
    IdProduto INT REFERENCES Produto(IdProduto),
    Quantidade INT
);

-- ========================================= INSERÇÃO DE DADOS

-- Inserindo endereços
INSERT INTO Endereco (CEP, Endereco, Numero, Bairro, Cidade, Estado, Celular)
VALUES 
('12345-678', 'Rua A', '100', 'Centro', 'Brusque', 'SC', '47998765432'),
('98765-432', 'Rua B', '200', 'Bairro Alto', 'Blumenau', 'SC', '47987654321');

-- Inserindo pessoas
INSERT INTO Pessoa (Nome, CPF, RG, DataNascimento, Sexo, IdEndereco, Email, Senha)
VALUES 
('João Silva', '12345678901', '1234567', '1990-01-01', 'Masculino', 1, 'joao@gmail.com', 'senha123'),
('Maria Oliveira', '98765432100', '7654321', '1985-05-15', 'Feminino', 2, 'maria@gmail.com', 'senha456'),
('Carlos Pereira', '23456789012', '2345678', '1992-08-12', 'Masculino', 1, 'carlos@gmail.com', 'senha789'),
('Ana Costa', '34567890123', '3456789', '1995-03-23', 'Feminino', 2, 'ana@gmail.com', 'senha321'),
('Lucas Santos', '45678901234', '4567890', '1988-12-05', 'Masculino', 1, 'lucas@gmail.com', 'senha654');

-- Inserindo usuários
INSERT INTO Usuario (TipoUsuario)
VALUES ('Cliente'), ('Administrador');

-- Inserindo funcionários
INSERT INTO Funcionario (IdPessoa, IdUsuario, Funcao, NivelPermissao)
VALUES 
(1, 2, 'Gerente', 1), 
(3, 2, 'Atendente', 2);

-- Inserindo clientes
INSERT INTO Cliente (IdPessoa, IdUsuario)
VALUES 
(2, 1),
(4, 1),
(5, 1);

-- Inserindo produtos
INSERT INTO Produto (Nome, Descricao, Quantidade, Valor)
VALUES 
('Produto A', 'Descrição do Produto A', 100, 50.00),
('Produto B', 'Descrição do Produto B', 200, 75.00),
('Produto C', 'Descrição do Produto C', 150, 120.00),
('Produto D', 'Descrição do Produto D', 50, 200.00),
('Produto E', 'Descrição do Produto E', 300, 30.00);

-- Inserindo vendas
INSERT INTO VendaCabecalho (IdCliente, IdFuncionario, ValorTotal, FormaPagamento, Status)
VALUES 
(1, 1, 500.00, 'Cartão de Crédito', 'Finalizado'),
(2, 1, 300.00, 'Boleto', 'Finalizado');

-- Inserindo detalhes da venda (VendaCorpo)
INSERT INTO VendaCorpo (IdVenda, IdProduto, Quantidade, ValorUnitario, ValorTotal)
VALUES 
(1, 1, 2, 50.00, 100.00),
(1, 2, 5, 75.00, 375.00),
(2, 3, 2, 120.00, 240.00);

-- Inserindo estoque
INSERT INTO Estoque (IdProduto, Quantidade)
VALUES 
(1, 90),
(2, 195),
(3, 148),
(4, 50),
(5, 300);

-- Inserindo itens no carrinho
INSERT INTO Carrinho (IdCliente, IdProduto, Quantidade)
VALUES 
(1, 1, 1),
(1, 2, 3),
(2, 3, 2),
(3, 4, 1);

-- ========================================= SELECTS IMPORTANTE NO SISTEMA
-- Consulta de Clientes
SELECT 
    c.IdCliente, 
    p.Nome, 
    p.CPF, 
    p.Email, 
    e.Endereco, 
    e.Cidade, 
    e.Estado
FROM 
    Cliente c
JOIN 
    Pessoa p ON c.IdPessoa = p.IdPessoa
JOIN 
    Endereco e ON p.IdEndereco = e.IdEndereco;

-- =========================================
-- Consulta de Funcionários
SELECT 
    f.IdFuncionario, 
    p.Nome, 
    f.Funcao, 
    f.NivelPermissao, 
    p.Email
FROM 
    Funcionario f
JOIN 
    Pessoa p ON f.IdPessoa = p.IdPessoa;

-- =========================================
-- Consulta de Produtos Disponíveis no Estoque
SELECT 
    p.IdProduto, 
    p.Nome, 
    p.Descricao, 
    e.Quantidade, 
    p.Valor
FROM 
    Produto p
JOIN 
    Estoque e ON p.IdProduto = e.IdProduto
WHERE 
    e.Quantidade > 0;

-- =========================================
-- Consulta de Produtos no Carrinho de um Cliente Específico
SELECT 
    car.IdCarrinho, 
    p.Nome AS Produto, 
    car.Quantidade, 
    p.Valor, 
    (car.Quantidade * p.Valor) AS Total
FROM 
    Carrinho car
JOIN 
    Produto p ON car.IdProduto = p.IdProduto
WHERE 
    car.IdCliente = 1;  -- Substitua o valor para buscar outro cliente

-- =========================================
-- Consulta de Vendas Realizadas
SELECT 
    vc.IdVenda, 
    pCliente.Nome AS Cliente, 
    pFuncionario.Nome AS Funcionario, 
    vc.DataVenda, 
    vc.ValorTotal, 
    vc.FormaPagamento, 
    vc.Status
FROM 
    VendaCabecalho vc
JOIN 
    Cliente c ON vc.IdCliente = c.IdCliente
JOIN 
    Pessoa pCliente ON c.IdPessoa = pCliente.IdPessoa
JOIN 
    Funcionario f ON vc.IdFuncionario = f.IdFuncionario
JOIN 
    Pessoa pFuncionario ON f.IdPessoa = pFuncionario.IdPessoa;

-- =========================================
-- Consulta de Detalhes de uma Venda Específica
SELECT 
    vc.IdVenda, 
    p.Nome AS Produto, 
    vcor.Quantidade, 
    vcor.ValorUnitario, 
    vcor.ValorTotal
FROM 
    VendaCorpo vcor
JOIN 
    Produto p ON vcor.IdProduto = p.IdProduto
JOIN 
    VendaCabecalho vc ON vcor.IdVenda = vc.IdVenda
WHERE 
    vc.IdVenda = 1;  -- Substitua para a venda que você quer consultar

-- =========================================
-- Consulta de Produtos por Nome ou ID
SELECT 
    IdProduto, 
    Nome, 
    Descricao, 
    Quantidade, 
    Valor
FROM 
    Produto
WHERE 
    Nome ILIKE '%Produto A%' OR IdProduto = 1;  -- Modifique o nome ou ID conforme a busca

-- =========================================
-- Consulta de Clientes que Realizaram Compras
SELECT DISTINCT 
    c.IdCliente, 
    p.Nome, 
    p.CPF, 
    p.Email
FROM 
    VendaCabecalho vc
JOIN 
    Cliente c ON vc.IdCliente = c.IdCliente
JOIN 
    Pessoa p ON c.IdPessoa = p.IdPessoa;

-- =========================================
-- Consulta de Produtos com Estoque Baixo
SELECT 
    p.IdProduto, 
    p.Nome, 
    e.Quantidade
FROM 
    Produto p
JOIN 
    Estoque e ON p.IdProduto = e.IdProduto
WHERE 
    e.Quantidade < 10;  -- Define o limite do que é considerado estoque baixo

-- =========================================
-- Consulta de Funcionários com Acesso Administrativo
SELECT 
    f.IdFuncionario, 
    p.Nome, 
    f.Funcao, 
    f.NivelPermissao
FROM 
    Funcionario f
JOIN 
    Pessoa p ON f.IdPessoa = p.IdPessoa
WHERE 
    f.NivelPermissao >= 1;