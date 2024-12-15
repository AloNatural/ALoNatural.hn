
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
                    {name: "Artricalm 15 Cap", price:"L418.00", image: "assets/images/Tienda/4rtr7ca4lm 15 cap.png"},
                    {name: "Dolox Suplemento Alimenticio Capsulas", price: "L250.00", image: "assets/images/Tienda/D0l0x Suplemento.png"},
                    {name: "Dolox Suplemento Alimenticio Bebible", price: "L0.00", image:"assets/images/Tienda/Dolox B3b7b73s.png"},
                    {name: "Potassium Citrate 100 Tabletas", price:"L0.00", image:"assets/images/Tienda/P0t4ss7um_C7tr4t3.png"},
                    {name: "Calcio Magnesium Zinc 60 caps.", price:"L0.00", image:"assets/images/Tienda/C47c7o_M4gn3s7um_Z7nc.png"},
                    {name: "K-Citmag Magnesio Citrate 60 caps", price:"L0.00", image:"assets/images/Tienda/K-M4gn3s7o.png"},
                    {name: "Flexi-Calm 120 Caps", price:"L0.00", image:"assets/images/Tienda/Fl3x7_C47m.png"},
                    {name: "Shark Cartilage Collage 60 caps", price:"L0.00", image:"assets/images/Tienda/Sh4rk_C4rt774g3_C077473N.png"},
                    {name: "Shar Cartigale 60 caps", price:"L0.00", image:"assets/images/Tienda/Sh4rlkC4.png"},
                    {name: "Dolox Crema", price:"L0.00", image:"assets/images/Tienda/D070x_F0rt3.png"},
                    {name: "Dolox 60 caps", price:"L0.00", image:"assets/images/Tienda/Dolox_caps.png"},
                    {name: "Dolox 30 caps", price:"L0.00", image:"assets/images/Tienda/D070x_30Caps.png"},
                    {name: "Super Artricalma Crema", price:"L0.00", image:"assets/images/Tienda/Sup3r_4rtr7c47m4_cr3m4.png"},
                    {name: "Dolox Jarabe 120 ML", price:"L0.00", image:"assets/images/Tienda/D070x_J4R4BE3_120ML.png"},
                    {name: "Artricalm 60 caps", price:"L0.00", image:"assets/images/Tienda/4rtr7c4lm_60caps.png"},
                    {name: "Artricalm 30 caps", price:"L0.00", image:"assets/images/Tienda/4rtr7c4lm_30caps.png"},
                ]

            case "ReproductorM":
                return [
                    {name: "Saw Palmetto 60 caps", price:"L0.00", image: "assets/images/Tienda/S4w_p47m3tt0_60caps.png"},
                    {name: "Maca", price: "L0.00", image: "assets/images/Tienda/M4c4_80caps.png"},
                    {name: "Sexi-Forte Vegetal 60 caps", price:"L0.00", image:"assets/images/Tienda/s3x7_f0rt3_60caps.png"},
                    {name: "Pumpkin", price:"L0.00", image:"assets/images/Tienda/Pumpk7n_60caps.png"},
                    {name: "z-40 50 caps", price:"L0.00", image:"assets/images/Tienda/Z-40_50caps.png"},
                    {name: "Ortiga 60 caps", price:"L0.00", image:"assets/images/Tienda/0rt7g4_60caps.png"},
                    {name: "Maca Dorada 60 caps", price:"L0.00", image:"assets/images/Tienda/M4c4_D0r4d4_60caps.png"},
                    {name: "Prosta Hercules 50 caps", price:"L0.00", image:"assets/images/Tienda/Pr0st4_H3rcul3s_50caps.png"},
                    {name: "Maca Real 60 Tabs", price:"L0.00", image:"assets/images/Tienda/M4c4_r34l_60tabs.png"},
                    {name: "VitaFer-l", price:"L0.00", image:"assets/images/Tienda/V7t4f3r-L.png"},
                ]

            case "ReproductorF":
                return[
                    {name:"Evening Primrose Oil 100 caps", price:"L0.00", image:"assets/images/Tienda/3v3n7ng_Pr7m3r0s_07l.png"},
                    {name:"Gynefem (Jabon Intimos)", price:"L0.00", image:"assets/images/Tienda/G7n3f3m.png"},
                    {name:"Graviola 60 caps", price:"L0.00", image:"assets/images/Tienda/Gr4v70l4 60 caps.png"},
                    {name:"Vaginox Crema 50ml", price:"L0.00", image:"assets/images/Tienda/V4g7n0x_cr3m4.png"},
                    {name:"Ovaril 60 caps", price:"L0.00", image:"assets/images/Tienda/Ov4r7l_60 caps.png"},
                    {name:"Nutribalance Control Hormonal 90 caps", price:"L0.00", image:"assets/images/Tienda/Nutr7b4l4nc3.png"},
                    {name:"Citostac Jarabe Natural", price:"L0.00", image:"assets/images/Tienda/C7t0st4c_J4r4b3_N4tur47.png"},
                    {name:"Graviola 100 caps", price:"L0.00", image:"assets/images/Tienda/Gr4v70l4_100caps.png"},
                ]

            case "Urinario":
                return[
                    {name:"Urovit", price:"L0.00", image:"assets/images/Tienda/Ur0v7t.png"},
                    {name:"Colacvit", price:"L0.00", image:"assets/images/Tienda/C0l4cv7t.png"},
                    {name:"RiñoVit", price:"L0.00", image:"assets/images/Tienda/R7ñ0v7t.png"},
                    {name:"Calaguala", price:"L0.00", image:"assets/images/Tienda/C4lgu474.png"},
                    {name:"Quiebre Piedra", price:"L0.00", image:"assets/images/Tienda/Qu73br4_P73dr4.png"},
                    {name:"Pañiloyan", price:"L0.00", image:"assets/images/Tienda/P4ñil0y4n.png"},
                    {name:"Cramberry 60 caps", price:"L0.00", image:"assets/images/Tienda/Cr4nberry_60c4ps.png"},
                    {name:"Té Kalusuanga", price:"L0.00", image:"assets/images/Tienda/T3_K4lusu4ng4.png"},
                ]

            case "Bajar_Peso":
                return[
                    {name:"St. Jhons 60 caps", price:"L0.00", image:"assets/images/Tienda/St.Jh0ns_60c4ps.png"},
                    {name:"Melatonina 60 caps", price:"L0.00", image:"assets/images/Tienda/M3l4t0n7n_60c4ps.png"},
                    {name:"Melatonina 120 caps", price:"L0.00", image:"assets/images/Tienda/M3l4t0nin_120caps.png"},
                    {name:"5-HTP 60 caps", price:"L0.00", image:"assets/images/Tienda/5-HTP_60caps.png"},
                    {name:"Concentrix 60 caps", price:"L0.00", image:"assets/images/Tienda/C0nc3ntrix_60caps.png"},
                    {name:"Memorix 60 caps", price:"L0.00", image:"assets/images/Tienda/M3m0r7x_60caps.png"},
                    {name:"Summet Gel 10 Caps", price:"L0.00", image:"assets/images/Tienda/Summ3t_G3l_10c4ps.png"},
                    {name:"ADP 30 caps", price:"L0.00", image:"assets/images/Tienda/ADP.png"},
                ]

            default:
                return [];
        }
    }

   function createProductCard(product) {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-price">${product.price}</p>
        <button class="btn-add-cart" data-name="${product.name}" data-price="${product.price}" data-image="${product.image}">Añadir al carrito</button>
    `;
    return card;
}


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


    document.addEventListener("DOMContentLoaded", function () {
    const cartItems = [];
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotalAmount = document.getElementById("cart-total-amount");

    // Función para añadir productos al carrito
    function addToCart(product) {
        cartItems.push(product);
        updateCart();
    }

    // Función para actualizar el contenido del carrito
    function updateCart() {
        cartItemsContainer.innerHTML = ""; // Limpiar el contenedor
        let total = 0;

        if (cartItems.length === 0) {
            cartItemsContainer.innerHTML = `<p>No hay productos en el carrito.</p>`;
        } else {
            cartItems.forEach(item => {
                const cartItem = document.createElement("div");
                cartItem.className = "cart-item";
                cartItem.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                    <div class="cart-item-details">
                        <h4>${item.name}</h4>
                        <p>Precio: ${item.price}</p>
                    </div>
                `;
                cartItemsContainer.appendChild(cartItem);
                total += parseFloat(item.price.replace("L.", "").replace(",", ""));
            });
        }

        cartTotalAmount.textContent = `L.${total.toFixed(2)}`;
    }

    // Delegar clics en botones de añadir al carrito
    document.body.addEventListener("click", function (e) {
        if (e.target.classList.contains("btn-add-cart")) {
            const product = {
                name: e.target.dataset.name,
                price: e.target.dataset.price,
                image: e.target.dataset.image,
            };
            addToCart(product);
        }
    });
});

    
