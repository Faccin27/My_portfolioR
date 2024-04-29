document.addEventListener("DOMContentLoaded", function() {
    // Adiciona um ouvinte de evento de clique para cada item da lista
    var listItems = document.querySelectorAll("#part li");
    listItems.forEach(function(item) {
        item.addEventListener("click", function(event) {
            // Impede o comportamento padrão do link
            event.preventDefault();
            // Obtém o alvo do link
            var target = event.currentTarget.querySelector("a").getAttribute("href");
            // Obtém a seção de destino
            var section = document.querySelector(target);
            // Verifica se a seção de destino existe
            if (section) {
                // Rolamento suave para a seção de destino
                section.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
