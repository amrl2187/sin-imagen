document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('storeSelect').addEventListener('change', loadProducts);
    loadProducts();
});

function loadProducts() {
    const store = document.getElementById('storeSelect').value;
    const productsContainer = document.getElementById('productsContainer');
    productsContainer.innerHTML = ''; // Limpiar contenedor de productos
    const allProducts = [
        { store: 'amazon', name: "Producto Amazon 1", image: "path_to_image_1.jpg", description: "Descripción del Producto Amazon 1" },
        { store: 'aliexpress', name: "Producto AliExpress 1", image: "path_to_image_2.jpg", description: "Descripción del Producto AliExpress 1" },
        { store: 'joytec', name: "Producto JoyTec 1", image: "path_to_image_3.jpg", description: "Descripción del Producto JoyTec 1" },
        { store: 'paytec', name: "Producto PayTec 1", image: "path_to_image_4.jpg", description: "Descripción del Producto PayTec 1" },
        { store: 'neotec', name: "Producto NeoTec 1", image: "path_to_image_5.jpg", description: "Descripción del Producto NeoTec 1" },
        { store: 'compurastro', name: "Producto CompuRastro 1", image: "path_to_image_6.jpg", description: "Descripción del Producto CompuRastro 1" },
        { store: 'miempresa', name: "Producto mi empresa 7", image: "path_to_image_7.jpg", description: "Descripción del Producto mi empresa 7" },
    ];

    const filteredProducts = allProducts.filter(product => product.store === store || store === 'all');
    filteredProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `<h3>${product.name}</h3><img src="${product.image}" alt="${product.name}"><p>${product.description}</p>`;
        productsContainer.appendChild(productDiv);
    });
}

function searchProducts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const store = document.getElementById('storeSelect').value;
    console.log('Buscar productos en ' + store + ' que contengan: ' + searchInput);
    // Lógica de búsqueda aquí (requerirá implementación adicional)
}
