document.addEventListener("DOMContentLoaded", function () {
    const productFilter = document.getElementById("productFilter");
    const productsContainer = document.querySelector(".container-products");
    const cartCount = document.querySelector(".cart-count");

    function changeProducts(category) {
        productsContainer.innerHTML = ""; // Limpiar el contenedor
        const products = getProductosPorCategoria(category); // Obtener productos de la categoría
        products.forEach(product => {
            const card = createProductCard(product); // Crear tarjeta del producto
            if (card) productsContainer.appendChild(card); // Añadir la tarjeta al contenedor
        });
    }

    productFilter.addEventListener("change", function () {
        const selectedCategory = this.value; // Obtener la categoría seleccionada
        changeProducts(selectedCategory); // Llamar a la función para actualizar los productos
    });

    function searchProducts() {
        const query = document.getElementById("searchInput").value.toLowerCase();
        const products = document.querySelectorAll(".product-card");
        products.forEach(product => {
            const name = product.querySelector("h3").textContent.toLowerCase();
            product.style.display = name.includes(query) ? "block" : "none";
        });
    }

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
                   { name: "Ginseng + Ginkgo Biloba", price: "L.197.00", image: "assets/images/Tienda/G1nseng+.png"} ,
                   { name: "Ginkgo Vit", price: "L.182.00", image: "assets/images/Tienda/G1nk0V1t.png"} ,
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
                ];

            case "Oseo":
                return [
                    {name: "Artricalm 15 Cap", price:"L418.00", image: "assets/images/Tienda/4rtr7ca4lm 15 cap.png"},
                    {name: "Dolox Suplemento Alimenticio Capsulas 30", price:"L260.00", image: "assets/images/Tienda/D0l0x 30.png"},
                    {name: "Cálcio + Vitaminas", price:"L284.00", image: "assets/images/Tienda/C4lci0+V1t.png"},
                    {name: "Glucosamina 300 mg 90 cápsulas", price:"L255.00", image: "assets/images/Tienda/Gluc0s4m1n4.png"},
                    {name: "Calcior D3", price:"L0.00", image: "assets/images/Tienda/C4lci0r 0 D3.png"},
                    {name: "Exfortius 20 Tabletas", price:"L209.00", image: "assets/images/Tienda/3xf0r73us.png"},
                ];

            default:
                return [];
        }
    }

function createProductCard(product) {
        if (!product.name || !product.price || !product.image) {
            console.warn("Producto inválido:", product);
            return null; // Salta productos inválidos
        }

        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <div class="container-img">
                <img src="${product.image}" alt="${product.name}" style="width: 250px; height: 250px; object-fit: cover;">
            </div>
            <div class="content-card-product">
                <h3>${product.name}</h3>
                <p class="price">${product.price}</p>
                <button 
                    class="btn-add-cart" 
                    data-name="${product.name}" 
                    data-price="${product.price}" 
                    data-image="${product.image}">
                    Añadir al carrito
                </button>
            </div>
        `;

        const addToCartButton = card.querySelector(".btn-add-cart");
        addToCartButton.addEventListener("click", addToCart);

        return card;
    }

    let cartItems = [];

    function addToCart(event) {
        const button = event.target;
        const name = button.getAttribute("data-name");
        const price = button.getAttribute("data-price");
        const image = button.getAttribute("data-image");

        let item = cartItems.find(i => i.name === name);
        if (item) {
            item.quantity += 1;
        } else {
            item = { name, price, image, quantity: 1 };
            cartItems.push(item);
        }

        saveCart();
        updateCart();
        updateCartCount(); // Actualizar número de productos en el ícono del carrito
    }

    function updateCart() {
        const cartContainer = document.querySelector("#cart-items");
        cartContainer.innerHTML = "";

        if (cartItems.length === 0) {
            cartContainer.innerHTML = "<p>No hay productos en el carrito.</p>";
        } else {
            cartItems.forEach(item => {
                const cartItem = document.createElement("div");
                cartItem.className = "cart-item d-flex align-items-center";
                cartItem.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" style="width: 100px; height: 100px; object-fit: cover;">
                    <div class="cart-item-details ml-2">
                        <span>${item.name}</span>
                        <span>Cantidad: ${item.quantity}</span>
                        <span>${item.price}</span>
                        <button class="remove-cart" data-name="${item.name}">Eliminar</button>
                    </div>
                `;

                const removeButton = cartItem.querySelector(".remove-cart");
                removeButton.addEventListener("click", removeFromCart);

                cartContainer.appendChild(cartItem);
            });
        }

        const cartTotal = cartItems.reduce((total, item) => total + (parseFloat(item.price.replace("L.", "")) * item.quantity), 0);
        document.querySelector("#cart-total-amount").textContent = `L. ${cartTotal.toFixed(2)}`;
    }

    function removeFromCart(event) {
        const button = event.target;
        const name = button.getAttribute("data-name");

        cartItems = cartItems.filter(item => item.name !== name);

        saveCart();
        updateCart();
        updateCartCount(); // Actualizar número de productos en el ícono del carrito
    }

    function saveCart() {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }

    function loadCart() {
        const storedCart = localStorage.getItem("cartItems");
        if (storedCart) {
            cartItems = JSON.parse(storedCart);
            updateCart();
        }
    }

    loadCart();

    // Abrir y cerrar el modal del carrito
    const cartBtn = document.getElementById("cart-btn");
    const cartModal = document.getElementById("cart-modal");
    const closeBtn = document.querySelector(".close-btn");

    cartBtn.addEventListener("click", () => {
        cartModal.style.display = "block";
    });

    closeBtn.addEventListener("click", () => {
        cartModal.style.display = "none";
    });

    // También cerrar cuando se haga clic fuera del modal
    window.addEventListener("click", function(event) {
        if (event.target === cartModal) {
            cartModal.style.display = "none";
        }
    });

    function updateCartCount() {
        cartCount.textContent = cartItems.length; // Actualiza el contador del carrito
    }

    updateCartCount(); // Inicialmente, mostrar la cantidad correcta de productos en el ícono del carrito
});
