document.addEventListener("DOMContentLoaded", function () {
    const productFilter = document.getElementById("productFilter");
    const productsContainer = document.querySelector(".container-products");

    function changeProducts(category) {
        productsContainer.innerHTML = ""; // Limpiar el contenedor
        const products = getProductosPorCategoria(category); // Obtener productos de la categoría
        products.forEach(product => {
            const card = createProductCard(product); // Crear tarjeta del producto
            productsContainer.appendChild(card); // Añadir la tarjeta al contenedor
        });
    }

    productFilter.addEventListener("change", function () {
        const selectedCategory = this.value; // Obtener la categoría seleccionada
        changeProducts(selectedCategory); // Llamar a la función para actualizar los productos
    });

    function getProductosPorCategoria(category) {
        switch (category) {
            case "Americanos":
                return [
                    { name: "Artricalm", price: "L.280.00", image: "https://naturcol.com/wp-content/uploads/2020/02/COLAGENO-x-100.jpg" },
                    { name: "Artricalm", price: "L.280.00", image: "https://naturcol.com/wp-content/uploads/2020/02/COLAGENO-x-100.jpg" },
                    { name: "Artricalm", price: "L.280.00", image: "https://naturcol.com/wp-content/uploads/2020/02/COLAGENO-x-100.jpg" },
                    { name: "Artricalm", price: "L.280.00", image: "https://naturcol.com/wp-content/uploads/2020/02/COLAGENO-x-100.jpg"},
                    { name: "Artricalm", price: "L.280.00", image: "https://naturcol.com/wp-content/uploads/2020/02/COLAGENO-x-100.jpg"},
                    
                    
                ];
            case "Puritans":
                return [
                   { name: "Puritans", price: "L.280.00", image: "https://alonatural.github.io/AloNatural/public/assets/img/Puritans%2060%20caps.png" },
                   { name: "Puritans", price: "L.280.00", image: "https://alonatural.github.io/AloNatural/public/assets/img/Puritans%2060%20caps.png"} ,
                   
                   ];

            case "Sistema Digestivo":
                return [
                    { name:"", price:"", image:""},
                    { name:"", price:"", image:""},
                    { name:"", price:"", image:""},
                ]
            // Agrega más categorías aquí
            default:
                return [];
        }
    }

    function createProductCard(product) {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <div class="container-img">
                <center>
                    <img style="width: 250px;" src="${product.image}" alt="${product.name}">
                </center>
                <div class="button-group">
                    <span>
                        <i class="fa-regular fa-eye"></i>
                    </span>
                    <span>
                        <i class="fa-regular fa-heart"></i>
                    </span>
                </div>
            </div>
            <div class="content-card-product">
                <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <h3>${product.name}</h3>
                <p class="price">${product.price}</p>
            </div>
        `;
        return card;
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const productFilter = document.getElementById('productFilter');
    const productSearch = document.getElementById('productSearch');
    const containerProducts = document.querySelector('.container-products');

    function filterProducts() {
        const filterValue = productFilter.value.toLowerCase();
        const searchValue = productSearch.value.toLowerCase();

        const products = containerProducts.querySelectorAll('.card-product');

        products.forEach(product => {
            const category = product.getAttribute('data-category').toLowerCase();
            const title = product.querySelector('.content-card-product h3').textContent.toLowerCase();

            if ((filterValue === '' || category.includes(filterValue)) &&
                (searchValue === '' || title.includes(searchValue))) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }

    productFilter.addEventListener('change', filterProducts);
    productSearch.addEventListener('input', filterProducts);
});
