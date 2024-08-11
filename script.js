document.addEventListener("DOMContentLoaded", function() {
    var listItems = document.querySelectorAll("#part li");
    listItems.forEach(function(item) {
        item.addEventListener("click", function(event) {
            event.preventDefault();
            var target = event.currentTarget.querySelector("a").getAttribute("href");
            var section = document.querySelector(target);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
