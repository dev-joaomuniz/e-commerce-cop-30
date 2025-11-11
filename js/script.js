/* 
Lógica JavaScript para interatividade.
Responsável por eventos no Front-end,
como a busca de CEP na tela de vendas. 
*/

document.addEventListener("DOMContentLoaded", function () {
  /*==============================================
   * FUNÇÕES DO HEADER E MENU RESPONSIVO
   *==============================================*/

  // Captura elementos do HTML
  const menu = document.getElementById("menu");
  const navMenu = document.getElementById("main-nav-menu");

  // Verifica se os elementos existem antes de adicionar o listener
  if (menu && navMenu) {
    // Evento ao clicar
    menu.addEventListener("click", function () {
      // Alterna classe menu-aberto
      navMenu.classList.toggle("menu-aberto");

      // Muda o ícone para X quando estiver aberto
      menu.classList.toggle("active");
    });
  }

  /*==============================================
   * CARROSSEL DE IMAGENS (HERO/BANNER)
   *==============================================*/

  const carouselContainer = document.querySelector(".carousel-container");
  const carouselTrack = document.querySelector(".carousel-items"); 
  const carouselItems = document.querySelectorAll(".carousel-item");
  const prevArrow = document.querySelector(".carousel-arrow.prev");
  const nextArrow = document.querySelector(".carousel-arrow.next");

  // Verifica se os elementos do carrosel existem antes de inicializar
  if (carouselItems.length > 0 && carouselContainer && prevArrow && nextArrow) {
    let currentSlide = 0; // Começa no primeiro slide (índice 0)
    const totalItems = carouselItems.length;
    const autoPlayIntervalTime = 5000; // Tempo para passar sozinho 5 segundos
    let autoPlayInterval;
    const SLIDE_GAP = 13;

    /* Função principal para mover o carrosel */
    function changeSlide(direction) {
      currentSlide += direction; // Atualiza índice (1 - próximo | 2 - anterior)

      // Loop circular
      if (currentSlide >= totalItems) currentSlide = 0; // Se passar do último volta para o primeiro
      if (currentSlide < 0) currentSlide = totalItems - 1; // Se tentar voltar do primeiro vai para o último

      // Largura do slide atual
      const slideRect = carouselItems[0].getBoundingClientRect(); // Retorna tamanho (largura exata em px) e posição do slide
      const slideWidth = Math.round(slideRect.width); // largura real em px do slide

      // Deslocamento total = currentSlide * (slideWidth + gap)
      const offsetPx = -(currentSlide * (slideWidth + SLIDE_GAP)); // Negativo pois move o slide para a esquerda

      // Move o trilho para a esquerda, de acordo com a variável (offsetPx)
      carouselTrack.style.transform = `translateX(${offsetPx}px)`;
    }

    // --- Lógica de AutoPlay

    // Inicia transição automática dos slides
    function startAutoPlay() {
      // Limpa intervalor existentes para evitar ciclos duplicados
      stopAutoPlay();

      // Define novo intervalo para avançar slide
      autoPlayInterval = setInterval(() => {
        changeSlide(1);
      }, autoPlayIntervalTime);
    }

    // Para a transição automática dos slides
    function stopAutoPlay() {
      clearInterval(autoPlayInterval);
    }

    // --- INTERATIVIDADE ---

    // Anexa todos os listeners de eventos (clique e hover)
    function attachEventListeners() {
      // 1. Clique nas setas
      prevArrow.addEventListener("click", () => {
        stopAutoPlay(); // Para o tempo enquanto o usuário interage
        changeSlide(-1); // Volta
        startAutoPlay(); // Reinicia o tempo
      });

      nextArrow.addEventListener("click", () => {
        stopAutoPlay(); // Para o tempo enquanto o usúario interage
        changeSlide(1); // Avança
        startAutoPlay(); // Reinicia o tempo
      });

      // 2. Hover (Pausa AutoPlay enquanto mouse estiver em cima do carrosel)
      carouselContainer.addEventListener("mouseover", stopAutoPlay);
      carouselContainer.addEventListener("mouseout", startAutoPlay);
    }

    // INICIALIZAÇÃO

    function initializeCarousel() {
      // Posiciona no primeiro slide
      carouselTrack.style.transform = `translateX(0px)`;

      // Anexa listeners (setas, hover)
      attachEventListeners();

      // Inicia autoplay
      startAutoPlay();

      // Ajuste responsivo: recalcula posição ao redimensionar a janela
      window.addEventListener("resize", () => {
        // Reaplica transform com o offset recalculado para o slide atual
        const slideRect = carouselItems[0].getBoundingClientRect(); // Retorna tamanho e posição exata do slide
        const slideWidth = Math.round(slideRect.width);
        const offsetPx = -(currentSlide * (slideWidth + SLIDE_GAP));
        carouselTrack.style.transition = "none"; // Desativa animação breve durante resize (alteração no tamanho) para reposicionamento ser instantâneo
        carouselTrack.style.transform = `translateX(${offsetPx}px)`; // Calcula nova posição
        // Força reflow (Atualização das posições e tamanhos)
        void carouselTrack.offsetWidth;
        carouselTrack.style.transition = "transform 0.6s ease-in-out"; // Reativa transição
      });
    }

    // Inicia o carrossel após todas as definições e verificações
    initializeCarousel();
  } // Fim da verificação de elementos do carroselS
});
