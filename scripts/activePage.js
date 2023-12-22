document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll("a");
    const currentPage = document.location.href;
    menuItems.forEach(function(item) {
        const itemLink = item.href;
        if (itemLink === currentPage) {
            item.classList.add("active");
        }
    });
});