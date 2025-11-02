<?php
/*
        Cabeçalho Principal do Site.
        Contém a estrutura inicial do documento HTML
        Incluir link para o CSS
        Obs.: Não fechar as tags body e html
    */
?>

<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Belêmica</title>
    <!-- Ícones Font Awesome -->
    <script src="https://kit.fontawesome.com/c67b07ff34.js" crossorigin="anonymous"></script>
    <!-- Estilos principais -->
    <link rel="stylesheet" href="css/style.css">
</head>

<body>
    <header>
        <div class="main-header">
            <!-- Logo principal -->
            <a href="../e-commerce-cop-30/index.php">
                <img class="header-logo" src="assets/images/belemica.png" alt="Logo-Belêmica">
            </a>

            <!-- Menu de navegação Principal -->
            <nav class="main-nav" id="main-nav-menu">
                <ul class="main-menu">
                    <li><a href="">Início</a></li>
                    <li><a href="">Cerâmica</a></li>
                    <li><a href="">Joias</a></li>
                    <li><a href="">Decoração</a></li>
                    <li><a href="">Sobre</a></li>
                    <li><a href="">Contato</a></li>
                </ul>
            </nav>

            <!-- Ações do Header: usuário, carrinho e menu mobile -->
            <div class="header-actions">
                <a href="">
                    <i class="fa-regular fa-user"></i>
                </a>
                <a href="">
                    <i class="fa-solid fa-cart-shopping"></i>
                </a>
                <button id="menu">
                    <i class="fa-solid fa-bars" id="icon-bars"></i>
                    <i class="fa-solid fa-xmark" id="icon-x"></i>
                </button>
            </div>
        </div>
    </header>