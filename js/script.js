/* 
Lógica JavaScript para interatividade.
Responsável por eventos no Front-end,
como a busca de CEP na tela de vendas. 
*/

document.addEventListener('DOMContentLoaded', function() {
    /* === FUNÇÕES DO HEADER E MENU RESPONSIVO === */

    // Captura elementos do HTML
    const menu = document.getElementById('menu');
    const navMenu = document.getElementById('main-nav-menu');

    // Verifica se os elementos existem antes de adicionar o listener
    if (menu && navMenu) {
        // Evento ao clicar
        menu.addEventListener('click', function(){
            // Alterna classe menu-aberto
            navMenu.classList.toggle('menu-aberto');
            
            // Muda o ícone para X quando estiver aberto
            menu.classList.toggle('active');
        });
    }
});