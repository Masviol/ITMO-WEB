(function () {
    // Функция для измерения времени загрузки страницы
    function measureLoadTime() {
        const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
        return loadTime;
    }

    // Функция для вывода информации о времени загрузки в подвал страницы
    function displayLoadTime() {
        const loadTime = measureLoadTime();
        const footer = document.querySelector('footer');
        const loadTimeElement = document.createElement('p');
        loadTimeElement.textContent = `Время загрузки: ${loadTime} мс`;
        footer.appendChild(loadTimeElement);
    }

    // Подписываемся на событие загрузки страницы
    window.addEventListener('load', displayLoadTime);
})();
