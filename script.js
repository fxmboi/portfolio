const portfolioItems = [
    { title: "Test Controller", src: "images/controller.gif?v=2" },
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
        
        // Hides the box completely if the gif/image file hasn't been uploaded yet
        imgElement.onerror = () => {
            gridItem.style.display = 'none';
        };
        
        galleryContainer.appendChild(gridItem);
    });
}

renderGallery();