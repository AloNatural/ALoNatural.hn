
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
            case "Nervioso":
                return [
                    { name: "St. John's 500 mg | 60 cápsulas", price: "L.167.00", image: "assets/images/Tienda/ST_J.png" },
                    { name: "Melatonina 10 mg", price: "L.440.00", image: "assets/images/Tienda/MelaToNi5MG.png" },
                    { name: "Melatonina 5 Mg x 120 Tabletas", price: "L.520.00", image: "assets/images/Tienda/MelaToNi-1mg.png"},
                    { name: "5-HTP 100 mg (Griffonia Simplicifolia)", price: "L.0.00", image: "assets/images/Tienda/5-HTP.png" },
                    { name: "Concentrix 60 cápsulas", price: "L.438.00", image: "assets/images/Tienda/ConceX.png"},
                    { name: "Memorix", price: "L.0.00", image: "assets/images/Tienda/MemoX.png"},
                    { name: "SUMET GEL CAPS", price: "L.0.00", image: "assets/images/Tienda/SuMetC.png"},
                    { name: "ADP-Caps", price: "L.0.00", image: "assets/images/Tienda/ADP-C.png"},
                ];
            case "Cerebro_Vacular":
                return [
                   { name: "Equaline Vitamin B-6", price: "L.0.00", image: "assets/images/Tienda/Equ4l7ne.png" },
                   { name: "Nervodatil 60 cápsulas", price: "L198.00", image: "assets/images/Tienda/N3rv0datil.png"} ,
                   { name: "Tilovit", price: "L100.00", image: "assets/images/Tienda/T1lovit.png"} ,
                   { name: "Damianil", price: "L198.00", image: "assets/images/Tienda/D4m1an1il.png"} ,
                   { name: "Ginseng Vit", price: "L187.00", image: "assets/images/Tienda/G1ns3t_V1t.png"} ,
                   { name: "Ginseng + Ginkgo Biloba", price: "L197.00", image: "assets/images/Tienda/G1nseng+.png"} ,
                   { name: "Ginkgo Vit", price: "L182.00", image: "assets/images/Tienda/G1nk0V1t.png"} ,
                   { name: "Triple Oxigenador Cerebral", price: "L450.00", image: "assets/images/Tienda/Tripple0Xig3nad0or.png"} ,
                   ];

            case "Digestivo":
                return [
                    { name:"A-BelX", price:"", image:""},
                    { name:"", price:"", image:""},
                    { name:"", price:"", image:""},
                ]

            case "Oseo":
                return[
                    {name: "Puritans", price:"", image: ""},
                    {name: "", price: "", image: ""},
                ]

            case "ReproductorM":
                return [
                    {name: "Puritans", price:"", image: ""},
                    {name: "", price: "", image: ""},
                ]

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
            <img style="width: 250px; height: 250px; object-fit: cover;" src="${product.image}" alt="${product.name}">
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
