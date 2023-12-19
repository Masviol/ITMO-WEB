document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.querySelector('.blockBlack__content__preloader');
    const content = document.querySelector('.content__photo');

    fetchData()
        .then(data => {
            // Step 4: Render the data
            renderData(data);
        })
        .catch(error => {
            // Step 6: Handle errors
            handleError(error);
        })
        .finally(() => {
            // Step 2: Hide the preloader
            preloader.style.display = 'none';
        });

    function fetchData() { 
        const randomFilter = Math.random() < 0.5 ? 'id_gte=100' : 'id_gte=200';
        const apiUrl = `https://jsonplaceholder.typicode.com/photos?${randomFilter}&_limit=5`;
        return fetch(apiUrl)
            .then(response => { 
                if(!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            });
    }

    function renderData(data) { 
        content.innerHTML = "";
    
        data.some((photo, index) => {
            const photoElement = document.createElement("img");
            const element = document.createElement("li")
            photoElement.src = photo.url;
            photoElement.alt = photo.title;
            photoElement.id = photo.id
            

            taskHTML = `
                <li>Фото номер: ${photoElement.id}</li>
            `;

            content.insertAdjacentHTML("beforeend", taskHTML)
            element.appendChild(photoElement)
            content.appendChild(element);
    
            return index >= 4;
        });
    }
    

    function handleError(error) { 
        content.innerHTML = `<p class="error-massage">⚠ Something went wrong: ${error.message}</p>`;
    }
})