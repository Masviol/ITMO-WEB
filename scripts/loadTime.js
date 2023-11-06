// (function () {

//     function measureLoadTime() {
//         const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
//         return loadTime;
//     }

//     function displayLoadTime() {
//         const loadTime = measureLoadTime();
//         const postMenu = document.querySelector('postMenu');
//         const loadTimeElement = document.createElement('p');
//         loadTimeElement.textContent = `Время загрузки: ${loadTime} мс`;
//         postMenu.appendChild(loadTimeElement);
//     }

//     window.addEventListener('load', displayLoadTime);
// })();

(function () {

    function measureLoadTime() {
        const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
        return loadTime;
    }

    function displayLoadTime(){
        const loadTime = measureLoadTime();
        const ul = document.querySelector('ul.postMenu')
        let li = document.createElement("li");
        li.innerHTML = `Время загрузки: ${loadTime} мс`;
        ul.append(li);
    }
    window.addEventListener('load', displayLoadTime);
})();