const portfolioItems = [
    { title: "Test Controller", src: "images/controller.png" },
    { title: "Series Studio", src: "images/studio.jpg" },
    { title: "Campaign Editorial", src: "images/editorial.jpg" },
    { title: "Client Feature", src: "images/client.jpg" }
];

const galleryContainer = document.getElementById('galleryContainer');

function renderGallery() {
    if (!galleryContainer) return;
    galleryContainer.innerHTML = '';

    portfolioItems.forEach((item) => {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        
        gridItem.innerHTML = `
            <div class="image-wrapper">
                <img src="${item.src}" alt="${item.title}">
            </div>
            <div class="item-title">${item.title}</div>
        `;

        const imgElement = gridItem.querySelector('img');
        
        imgElement.onerror = () => {
            gridItem.style.display = 'none';
        };
        
        galleryContainer.appendChild(gridItem);
    });
}

renderGallery();