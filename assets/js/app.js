
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
                    { name:"A-Belx Desparasitante", price:"L200.00", image:"assets/images/Tienda/A-B37X.png"},
                    { name:"Estreñisen", price:"L247.00", image:"assets/images/Tienda/3str3ñis3n.png"},
                    { name:"Aloe Vit", price:"L186.00", image:"assets/images/Tienda/A703 V7t.png"},
                    { name:"Laxative", price:"L0.00", image:"assets/images/Tienda/Lax4tiv73.png"},
                    { name:"Anti-Diarrheal", price:"L0.00", image:"assets/images/Tienda/Ant7-D7arrh3a7.png"},
                    { name:"Savila y Menta", price:"L0.00", image:"assets/images/Tienda/S4v7l4 & M3nta.png"},
                    { name:"Toronja, Canela y Sen", price:"L0.00", image:"assets/images/Tienda/T0r0nj4.png"},
                    { name:"Fibra Clean", price:"L0.00", image:"assets/images/Tienda/F7br4 C734n.png"},
                    { name:"Papaya Anis", price:"L0.00", image:"assets/images/Tienda/P4p4y4 4n7s.png"},
                    { name:"Lino o Linaza Molida", price:"L0.00", image:"assets/images/Tienda/L7n0 0 L7n4s4.png"},
                    { name:"60 Billion Probiotix", price:"L0.00", image:"assets/images/Tienda/60 B7ll70n Pr0bi0tix.png"},
                    { name:"Women´s Probiotix", price:"L0.00", image:"assets/images/Tienda/W0m3ns Pr0b70t7x.png"},
                    { name:"Gas Relief", price:"", image:"assets/images/Tienda/G4s R37373f.png"},
                    { name:"Antibiotico Intestinal", price:"L0.00", image:"assets/images/Tienda/4nt7b7ot7c0 7nt3st7n4l.png"},
                    { name:"Antibiotico Intestinal 15 cap", price:"", image:"assets/images/Tienda/4nt7biotico Int3st7n4l 15 Cap.png"},
                    { name:"Senna-S", price:"L0.00", image:"assets/images/Tienda/S3nna S.png"},
                    { name:"Limpia Colon", price:"L0.00", image:"assets/images/Tienda/L7mp74 C0l0n.png"},
                    { name:"Frangulavit", price:"L0.00", image:"assets/images/Tienda/Fr4ngu74v7t.png"},
                    { name:"Dolo Acidez Estomacal Jarabe", price:"", image:"assets/images/Tienda/D0L0 Ac7d3z 3st0m4c4l.png"},
                    { name:"Gastri-Plus", price:"L0.00", image:"assets/images/Tienda/G4str7-P7us.png"},
                    { name:"Laxo Intestinal", price:"L0.00", image:"assets/images/Tienda/L4x0 Int3st7n4l.png"},
                    { name:"Dolox", price:"L0.00", image:"assets/images/Tienda/D0l0x.png"},
                    { name:"Antacid Tablets", price:"L0.00", image:"assets/images/Tienda/4nt4c7d T4bl3ts.png"},
                    { name:"Estomatil", price:"L0.00", image:"assets/images/Tienda/3st0m4t7l.png"},
                    { name:"Dolo Acidez Estomacal Cap", price:"", image:"assets/images/Tienda/D0l0 Ac7d3z 3st0macal.png"},
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
