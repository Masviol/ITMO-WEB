(function () {

    function measureLoadTime() {
        const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
        return loadTime;
    }

    function displayLoadTime(){
        const loadTime = measureLoadTime();
        const ul = document.querySelector('ul.postMenu')
        let a = document.createElement("a");
        a.innerHTML = `Время загрузки: ${loadTime} мс`;
        let li = document.createElement("li");
        li.append(a);
        ul.append(li);
    }
    window.addEventListener('load', displayLoadTime);
})();