<?php
/*
    Ponto de entrada principal do site.
    Responsável por montar a estrutura completa da página
    */
?>

<?php
// Inclui o arquivo de cabeçalho (header)
require_once 'includes/header.php';
?>

<main>
    <!-- Seção principal do carrosel -->
    <div class="carousel-container">

        <!-- Seção com todos os slides -->
        <div class="carousel-items">

            <!-- Slide 1 -->
            <div class="carousel-item is-active">
                <img src="assets/images/slide1.jpg" alt="Cerâmicas Artesanais - Slide 1">
                <div class="carousel-caption">
                    <h3>Cerâmicas Artesanais</h3>
                    <p>Peças únicas feitas à mão por artesões locais</p>
                </div>
            </div>

            <!-- Slide 2 -->
            <div class="carousel-item">
                <img src="assets/images/slide2.jpg" alt="Acessórios da Amazônia - Slide 2">
                <div class="carousel-caption">
                    <h3>Acessórios da Amazônia</h3>
                    <p>Design autêntico com materiais naturais e sustentáveis</p>
                </div>
            </div>

            <!-- Slide 3 -->
            <div class="carousel-item">
                <img src="assets/images/slide3.jpg" alt="Compromisso com a Natureza - Slide 3">
                <div class="carousel-caption">
                    <h3>Compromisso com a Natureza</h3>
                    <p>Preservando a Amazônia através do comércio sustentável</p>
                </div>
            </div>

        </div>

        <!-- Setas de navegação -->
        <button class="carousel-arrow prev">&#10094;</button>
        <button class="carousel-arrow next">&#10095;</button>

    </div>
    <!-- Fim do carrosel -->
</main>


<?php
// Inclui o arquivo de Rodapé (footer)
require_once 'includes/footer.php'
?>