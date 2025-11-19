
document.addEventListener("DOMContentLoaded", function () {
    const breakpoint = 768; // Ponto de interrupção 'md' do Bootstrap
    const rows = document.querySelectorAll("tr[data-href]");

    function makeRowsClickable() {
        rows.forEach(row => {
            row.style.cursor = "pointer";
            row.addEventListener("click", rowClickListener);
        });
    }

    function removeRowsClickable() {
        rows.forEach(row => {
            row.style.cursor = "default";
            // Remove o listener de clique
            row.removeEventListener("click", rowClickListener);
        });
    }

    // Função de tratamento do clique (definida fora do loop para ser removível)
    function rowClickListener(event) {
        // Se o clique veio de um link ou botão dentro da linha, ignora
        if (event.target.closest('a') || event.target.closest('button')) {
            return;
        }
        // Redireciona para o URL
        window.location.href = this.dataset.href;
    }

    function checkScreenSize() {
        if (window.innerWidth < breakpoint) {
            // Ecrã pequeno: torna as linhas clicáveis
            makeRowsClickable();
        } else {
            // Ecrã grande: remove a funcionalidade de clique
            removeRowsClickable();
        }
    }

    // Executa a verificação inicial ao carregar a página
    checkScreenSize();

    // Executa a verificação sempre que a janela é redimensionada
    window.addEventListener('resize', checkScreenSize);
});
