// Sélection des éléments du DOM
const modal = document.getElementById('modal');
const modalClose = document.querySelector('.modal-close');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalPrice = document.getElementById('modal-price');
const addToCartBtn = document.getElementById('add-to-cart-btn');
const cartIcon = document.getElementById('cart-icon');
const cart = document.querySelector('.cart');
const cartCloseBtn = document.getElementById('cart-close');
const productGrid = document.querySelector('.product-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const totalElement = document.querySelector('.total-price');
const cartContent = document.querySelector('.cart-content');
const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

// Données de produits (simulées)
const products = [
    { id: 1, title: 'HP Laptop 15-fd0022nk (886K7EA)', price: 479, description: 'L’ordinateur portable HP 15,6 pouces facilite la connexion et la collaboration, doté de la puissance, des performances et de la vitesse dont vous avez besoin pour venir à bout de votre journée. Windows 11 Édition Familiale unilingue Intel® Core™ i5 1335U, 8 Go DDR4 512 Go Disque SSD,15.6" FHD, Autonomie de la batterie: Jusqu à 7 heures et 45 minutes', img: 'c08510803.png', category: 'pc' },
    { id: 2, title: 'TP-Link Routeur WiFi 6', price: 64, description: 'TP-Link Routeur WiFi 6 , Routeur WiFi AX 3000 Mbps bi-bande, WiFi 6, 5 ports Gigabit, 4 antennes à haute performance, OneMesh, WPA3, Contrôle parental, Antivirus intégré, Archer AX58', img: '61IZAt3G3vL._AC_UL480_QL65_.jpg', category: 'accessoires' },
    { id: 3, title: 'GeForce RTX™ 4070 Ti WINDFORCE OC 12G', price: 374.99, description: 'GIGABYTE GeForce RTX 4070 WINDFORCE OC 12GB Carte graphique - 12GB DDRX6 21Gbps, PCI-E 4.0, DisplayPort 1.4, HDMI 2.1a, NVIDIA DLSS 3, Ada Lovelace Arch GV-N4070WF3OC-12GD', img: '1000.webp', category: 'accessoires' },
    { id: 4, title: 'ASUS Zenbook S 13 Flip OLED UP5302ZA-LX235W 13.3 Pouces 2.8K Laptop', price: 699.9, description: 'ASUS Zenbook S 13 Flip OLED UP5302ZA-LX235W 13.3 Pouces 2.8K Laptop (Intel Core i5-1240P, 16GB RAM, 512GB SSD, Windows 11 Home) – Clavier AZERTY', img: 'asus-um5302-zenbook-s-13-422164.jpg', category: 'pc' },
    { id: 5, title: 'Acer Swift 3 SF314-59-56W5 Ordinateur Portable Ultrafin 14 FHD IPS, PC Portable', price: 695, description: 'Acer Swift 3 SF314-59-56W5 Ordinateur Portable Ultrafin 14 FHD IPS, PC Portable (Intel Core i5-1135G7, RAM 8Go, SSD 512 Go, Intel Iris Xe Graphics, Windows 10) Clavier AZERTY (Français), Laptop Gris', img: '71CcP14oJFL._AC_UL960_FMwebp_QL65_.webp', category: 'pc' },
    { id: 1, title: 'Hitman World of Assassination for Playstation 5', price: 59.99, description: 'Hitman World of Assassination rassemble le meilleur des trois jeux Hitman : Hitman, Hitman 2, et Hitman 3. Dans ce jeu, vous incarnez l’Agent 47, un tueur à gages professionnel. ', img: 'OIP (1).jpeg', category: 'Gaming' },
    { id: 1, title: 'S.S T.V 32" LED HD SATELLITE R- UA32H4270' , price: 100 , description: 'Resolution 1366x768 pixels Refresh rate 60Hz 2 HDMI ports 1 USB port 1 analog audio input.', img: 'a116e77d2abc61d3af6b254b3ed475f6.jpg', category: 'accessoires' },
    { id: 1, title: 'Laptops 2023 New Touch Sn Laptop 14.1-Inch W11 ', price: 329.93, description: 'Laptops 2023 New Touch Sn Laptop 14.1-Inch W11 System Foldable Hd Business Office Drop Delivery Computers Networking Ots87', img: '80f3416b-a46f-4085-86af-14b46f034cb5.webp', category: 'pc' },
    { id: 1, title: 'ASUS Chromebook Plus CX3402CBA-PQ0104', price: 449, description: '- Ordinateur Portable 14" Full HD (Intel Core i3, RAM 8 Go, 128 Go UFS, ChromeOS) - Clavier AZERTY FR', img: '61DQktlQXhL._AC_UL480_QL65_.jpg', category: 'pc' },
    { id: 1, title: 'Lenovo - Ideapad 3 17ITL6 82H900U8FR', price: 499, description: 'clavier AZERTY, processeur Intel i3-1115G4 3,0 GHz, 8 Go de RAM, 512 Go de SSD, Windows 11 (17,3"), gris', img: '61moODMumNL._AC_UL480_QL65_.jpg', category: 'pc' },
    { id: 1, title: 'farcry 6', price: 59.9, description: 'Far Cry 6 se déroule sur l île fictive de Yara, inspirée par Cuba, où les joueurs incarnent Dani Rojas, un ou une guérillero local qui lutte contre le régime oppressif du dictateur Antón Castillo, interprété par l acteur Giancarlo Esposito. Castillo cherche à restaurer l ancienne gloire de Yara en utilisant des méthodes brutales, tout en préparant son fils, Diego, à lui succéder.', img: 'OIP (2).jpeg', category: 'Gaming' },
    { id: 1, title: 'Dragon Ball Xenoverse 2', price: 49.99 , description: 'Dans Dragon Ball Xenoverse 2, les joueurs créent leur propre personnage et voyagent dans le temps pour protéger l histoire de l univers Dragon Ball. Le joueur incarne un Patrouilleur du Temps qui travaille pour la Patrouille du Temps, sous la direction de Trunks et du Kai Suprême du Temps, afin d empêcher les altérations dans la ligne temporelle causées par les forces du mal.', img: 'OIP.jpeg', category: 'Gaming' },
    { id: 1, title: 'Acer Aspire 5 A514-55-71H1 Ordinateur Portable 14', price: 999, description: 'Acer Aspire 5 A514-55-71H1 Ordinateur Portable 14 Full HD IPS, PC Portable (Intel Core i7-1255U, RAM 16 Go, SSD 512 Go, Intel Iris Xe Graphics, Windows 11) - Clavier AZERTY (Français), Laptop Gris', img: '71exQqT-dwL._AC_UL480_FMwebp_QL65_.webp', category: 'pc' },
    { id: 1, title: 'ASUS ChromeBook CX1500CKA-EJ0256 Ordinateur Portable 15 FHD', price: 369, description: 'ASUS ChromeBook CX1500CKA-EJ0256 Ordinateur Portable 15 FHD (Intel Celeron N4500, RAM 8 Go DDR4, SSD PCIE 128 Go, ChromeOS) Clavier AZERTY Français', img: '910I4kbYFHS._AC_SX425_.jpg', category: 'pc' },
    { id: 1, title: 'Asus VivoBook E410KA-EK291W Ordinateur Portable 14', price: 349, description: 'Asus VivoBook E410KA-EK291W Ordinateur Portable 14 Full HD (Intel Pentium N6000, 8Go de RAM, Stockage 128Go, Windows 11 Home S) Clavier AZERTY Français', img: '71LXYdhtD3L._AC_UL480_FMwebp_QL65_.webp', category: 'pc' },
    { id: 1, title: 'Lenovo IdeaPad Slim 3 Chromebook 14M868 - Ordinateur Portable 14', price:  279, description: 'Lenovo IdeaPad Slim 3 Chromebook 14M868 - Ordinateur Portable 14 FHD (MediaTek Kompanio 520, RAM 8Go, SSD 128Go, Arm Mali-G52 2EE MC2 GPU, Chrome OS) Clavier AZERTY Français - Gris', img: '61aglwZ1SBL._AC_UL480_FMwebp_QL65_.webp', category: 'pc' },
    { id: 1, title: 'JLab JBuds Ergonomic Souris Ergonomique sans Fil Rechargeable', price: 20, description: 'JLab JBuds Ergonomic Souris Ergonomique sans Fil Rechargeable Verticale Silencieuse, Souris sans Fil Bluetooth ou Récepteur USB, Souris Ordinateur Portable, PC de Bureau, Tablette, Windows/Mac', img: '71MCgWZDkfL._AC_SR480,570_.jpg', category: 'accessoires' },
    { id: 1, title: 'inphic Souris sans Fil ', price: 17, description: 'inphic Souris sans Fil Rechargeable, Mini Optique sans Silence Click, Ultra Mince 1600 DPI pour Ordinateur Portable, PC, Ordinateur, Mac (Argent Clair)', img: '510mVPnZLEL._AC_SR480,570_.jpg', category: 'accessoires' },
    { id: 1, title: ' Souris Ergonomique Sans Fil HOTLIFE', price: 24, description: 'Souris Sans Fil Rechargeable, Souris Ergonomique Sans Fil avec BT 5.1+2.4G Deux Modes, Souris Sans Fil Bluetooth avec Récepteur USB Souris Rétroéclairée de 7 Couleurs Compatible avec PC/Laptop/Windowsi', img: '51egaM1+jwL._AC_SR480,570_.jpg', category: 'accessoires' },
    { id: 1, title: 'iClever Clavier Bluetooth', price: 99, description: 'iClever Clavier Bluetooth, Clavier sans Fil Rechargeable Connecter 1 à 3 appareils AZERTY Mac iPad air Pro Tablette Ordinateur PC iPhone iOS Android Windows Ultra-Mince', img: '61mNlm00x+L._AC_SX679_.jpg', category: 'accessoires' },
    { id: 1, title: 'Roccat Magma', price: 29, description: 'Roccat Magma - USB-A Clavier de jeu à membrane RGB (FR Layout), noir', img: '71qDyBGxkbS.__AC_SX300_SY300_QL70_ML2_.jpg', category: 'accessoires' },
    { id: 1, title: 'KOORUI 24 Ecran PC Gaming Incurvé', price: 129, description: 'KOORUI 24 Ecran PC Gaming Incurvé, Moniteur PC Dalle VA, Résolution FHD (1080P), 165Hz, DCI-P3 90%, Lunette Ultra-Mince, Inclinaison réglable, Prend en Charge HDMI/DP', img: '71YdxZ6LwcL._AC_SX425_.jpg', category: 'accessoires' },
    { id: 1, title: 'KOORUI Ecran PC Gaming 27', price: 199, description: 'KOORUI Ecran PC Gaming 27 144hz, Résolution WQHD (2560 x 1440), 1MS, Display Port & 2X HDMI, Adaptive Sync, Noir', img: '715APeXKTlL.__AC_SX300_SY300_QL70_ML2_.jpg', category: 'Gaming' },
    { id: 1, title: 'Dell G15 5530 Intel Core i7 PC Portable Gaming 15.6 ', price: 739, description: 'Dell G15 5530 Intel Core i7 PC Portable Gaming 15.6 FHD | Dark Shadow Grey - 16 Go de RAM, SSD 512 Go, NVIDIA GeForce RTX 4060, Win 11 Home, Clavier AZERTY Français', img: '71TBYu6xhkL._AC_SX425_.jpg', category: 'Gaming' },
    { id: 1, title: 'Corsair Vengeance RGB PRO', price: 47, description: 'Corsair Vengeance RGB PRO - Kit de Mémorie Enthousiaste (16Go (2x8Go), DDR4, 3200MHz, C16, XMP 2.0) - Noir', img: '71e6YWJio-L.__AC_SY300_SX300_QL70_ML2_.jpg', category: 'Gaming' },
    { id: 1, title: 'Corsair Vengeance LPX', price: 81, description: 'Corsair Vengeance LPX CMK32GX4M2E3200C16 Module de mémoire 32 Go DDR4 3200 MHz, noir', img: '41CQ0jxWYPL._AC_SX425_.jpg', category: 'Gaming' },
    { id: 1, title: 'Apple iPhone 15 Pro (256 Go) Titane Blanc', price: 1389, description: 'TAILLÉ DANS LE TITANE – L’iPhone 15 Pro présente un design en titane de qualité aérospatiale, à la fois léger et résistant, et un dos en verre mat texturé. Sa face avant Ceramic Shield est plus résistante que le verre de n’importe quel smartphone. Et il résiste aux éclaboussures, à l’eau et à la poussière.ÉCRAN AVANCÉ – L’écran Super Retina XDR 6,1 avec ProMotion pousse les taux de rafraîchissement à 120 Hz pour livrer des performances graphiques exceptionnelles lorsque c’est nécessaire. Dynamic Island vous permet de garder un œil sur vos alertes et Activités en direct. Et l’écran toujours activé reste visible en permanence, même verrouillé. Vous pouvez le consulter d’un simple coup d’œil, sans avoir besoin de le toucher', img: '81nHfLrIogL._AC_CR0,0,0,0_SX615_SY462_.jpg', category: 'mobile' },
    { id: 1, title: 'Smartphone', price: 300, description: 'Un smartphone dernier cri', img: 'smartphone.jpg', category: 'mobile' },
    { id: 1, title: 'Smartphone', price: 300, description: 'Un smartphone dernier cri', img: 'smartphone.jpg', category: 'mobile' },
    { id: 1, title: 'Smartphone', price: 300, description: 'Un smartphone dernier cri', img: 'smartphone.jpg', category: 'mobile' },
    { id: 1, title: 'Smartphone', price: 300, description: 'Un smartphone dernier cri', img: 'smartphone.jpg', category: 'mobile' },
    { id: 1, title: 'Smartphone', price: 300, description: 'Un smartphone dernier cri', img: 'smartphone.jpg', category: 'mobile' },
    { id: 1, title: 'Smartphone', price: 300, description: 'Un smartphone dernier cri', img: 'smartphone.jpg', category: 'mobile' },
    { id: 1, title: 'Smartphone', price: 300, description: 'Un smartphone dernier cri', img: 'smartphone.jpg', category: 'mobile' },
    { id: 1, title: 'Smartphone', price: 300, description: 'Un smartphone dernier cri', img: 'smartphone.jpg', category: 'mobile' },
    { id: 1, title: 'Smartphone', price: 300, description: 'Un smartphone dernier cri', img: 'smartphone.jpg', category: 'mobile' },
    { id: 1, title: 'Smartphone', price: 300, description: 'Un smartphone dernier cri', img: 'smartphone.jpg', category: 'mobile' },
    { id: 1, title: 'Smartphone', price: 300, description: 'Un smartphone dernier cri', img: 'smartphone.jpg', category: 'mobile' },
    { id: 1, title: 'Smartphone', price: 300, description: 'Un smartphone dernier cri', img: 'smartphone.jpg', category: 'mobile' },
    { id: 1, title: 'Smartphone', price: 300, description: 'Un smartphone dernier cri', img: 'smartphone.jpg', category: 'mobile' },
    { id: 1, title: 'Smartphone', price: 300, description: 'Un smartphone dernier cri', img: 'smartphone.jpg', category: 'mobile' },
    { id: 1, title: 'Smartphone', price: 300, description: 'Un smartphone dernier cri', img: 'smartphone.jpg', category: 'mobile' },
    { id: 1, title: 'Smartphone', price: 300, description: 'Un smartphone dernier cri', img: 'smartphone.jpg', category: 'mobile' },
    { id: 1, title: 'Smartphone', price: 300, description: 'Un smartphone dernier cri', img: 'smartphone.jpg', category: 'mobile' },
    { id: 1, title: 'Smartphone', price: 300, description: 'Un smartphone dernier cri', img: 'smartphone.jpg', category: 'mobile' }
];



// Génération dynamique des produits
function generateProducts(products) {
    productGrid.innerHTML = '';
    products.forEach(product => {
        const card = createProductCard(product);
        productGrid.appendChild(card);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.dataset.title = product.title;
    card.dataset.price = `${product.price}€`;
    card.dataset.description = product.description;
    card.dataset.img = product.img;
    card.dataset.category = product.category;

    card.innerHTML = `
        <img src="${product.img}" alt="${product.title}" class="product-img">
        <h3 class="product-title">${product.title}</h3>
        <p class="product-price">${product.price}€</p>
    `;

    card.addEventListener('click', () => showModal(product));
    return card;
}

// Affichage de la fenêtre modale
function showModal(product) {
    modal.style.display = 'block';
    modalImg.src = product.img;
    modalImg.alt = product.title;
    modalTitle.textContent = product.title;
    modalDescription.textContent = product.description;
    modalPrice.textContent = `${product.price}€`;

    // Remplacez l'écouteur pour éviter les ajouts multiples
    addToCartBtn.onclick = () => addToCart(product);
}

// Fermeture de la fenêtre modale
modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
    addToCartBtn.onclick = null;
});

// Ajout d'un produit au panier
function addToCart(product) {
    const cartItem = createCartItem(product);
    cartContent.appendChild(cartItem);
    updateTotal();
}

function createCartItem(product) {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-box');
    cartItem.innerHTML = `
        <img src="${product.img}" alt="${product.title}" class="cart-img">
        <div class="detail-box">
            <p class="cart-product-title">${product.title}</p>
            <p class="cart-price">${product.price}€</p>
            <input type="number" class="cart-quantity" value="1" min="1">
        </div>
        <button class="cart-remove" ><i class="fa-solid fa-xmark"></i></button>
    `;

    cartItem.querySelector('.cart-remove').addEventListener('click', removeCartItem);
    cartItem.querySelector('.cart-quantity').addEventListener('input', updateTotal);
    return cartItem;
}

// Suppression d'un produit du panier
function removeCartItem(event) {
    const itemToRemove = event.target.closest('.cart-box');
    itemToRemove.remove();
    updateTotal();
}

// Mise à jour du total du panier
function updateTotal() {
    const cartItems = cartContent.querySelectorAll('.cart-box');
    let total = 0;
    cartItems.forEach(item => {
        const priceString = item.querySelector('.cart-price').textContent;
        const price = parseFloat(priceString.replace('€', ''));
        const quantity = parseInt(item.querySelector('.cart-quantity').value);
        total += price * quantity;
    });
    totalElement.textContent = `${total.toFixed(2)}€`;
}

// Ouverture/fermeture du panier
cartIcon.addEventListener('click', () => {
    cart.classList.add('active');
});

cartCloseBtn.addEventListener('click', () => {
    cart.classList.remove('active');
});
// systeme de payement 
document.addEventListener('DOMContentLoaded', () => {
    const btnBuy = document.getElementById('btn-buy');
    const totalPriceElement = document.querySelector('.total-price');

    btnBuy.addEventListener('click', () => {
        const totalPrice = totalPriceElement.textContent.replace('€', '').trim();
        const phoneNumber = '+243840980735'; // Replace with the phone number for the WhatsApp payment

        const message = `Bonjour, je souhaite effectuer un paiement pour un montant total de ${totalPrice}€. Merci de me fournir les instructions pour le paiement.`;
        const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

        window.location.href = whatsappURL;
    });
});


// Filtrage des produits par catégorie
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.category;
        const filteredProducts = category === 'all' ? products : products.filter(product => product.category === category);
        generateProducts(filteredProducts);
    });
});

// Pagination du carousel (simulé avec images statiques)
let currentIndex = 0;
const carouselImages = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg'
];

function showCarouselImage(index) {
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
    showCarouselImage(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselImages.length;
    showCarouselImage(currentIndex);
});

// Initialisation de la page avec tous les produits
generateProducts(products);

document.addEventListener('DOMContentLoaded', function () {
    ;document.getElementById('search-btn').addEventListener('click', function() {
        var searchBar = document.getElementById('search-bar');
        searchBar.classList.toggle('active');
        if (searchBar.classList.contains('active')) {
            searchBar.focus();
        }
      });
    const cartesProduits = document.querySelectorAll('.carte');

    searchBar.addEventListener('keyup', function (event) {
        const recherche = event.target.value.toLowerCase().trim();

        cartesProduits.forEach(carte => {
            const titre = carte.querySelector('.titre').textContent.toLowerCase();

            if (titre.includes(recherche)) {
                carte.style.display = 'block';
            } else {
                carte.style.display = 'none';
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const searchBar = document.getElementById('search-bar');
    const cartesProduits = document.querySelectorAll('.product-card');

    searchBar.addEventListener('keyup', function (event) {
        const recherche = event.target.value.toLowerCase().trim();

        cartesProduits.forEach(carte => {
            const titre = carte.querySelector('.product-title').textContent.toLowerCase();

            if (titre.includes(recherche)) {
                carte.style.display = 'block';
            } else {
                carte.style.display = 'none';
            }
        });
    });
});
