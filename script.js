 // Affiche/masque les produits de la catégorie Soins Visage au clic
document.getElementById('face-care-category').addEventListener('click', function(e) {
    // Évite d'ouvrir le lien si on clique sur un lien à l'intérieur
    if (e.target.tagName.toLowerCase() === 'a') return;
    const products = document.getElementById('face-care-products');
    products.classList.toggle('hidden');
});
//script qui permet de gérer le formulaire

document.getElementById('whatsapp-reservation-form').addEventListener('submit', function(e) {
e.preventDefault();
    const name = document.getElementById('res-name').value.trim();
    const phone = document.getElementById('res-phone').value.trim();
    const service = document.getElementById('res-service').value;
    const date = document.getElementById('res-date').value;
    const message = document.getElementById('res-message').value.trim();

    let text = `Bonjour, je souhaite réserver un service :%0A`;
    text += `Nom : ${name}%0A`;
    text += `Téléphone : ${phone}%0A`;
    text += `Service : ${service}%0A`;
    text += `Date souhaitée : ${date}%0A`;
    if(message) text += `Message : ${message}%0A`;
    const whatsappNumber = "22951563219";
    const url = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(url, '_blank');
});

// Recherche produits
const searchInput = document.querySelector('#search-bar input[type="text"]');
const searchBtnSubmit = document.getElementById('search-submit');
const noResultDiv = document.getElementById('search-no-result');

// Vérification que les éléments existent
if (!searchInput || !searchBtnSubmit || !noResultDiv) {
    console.error('Un ou plusieurs éléments de la barre de recherche sont introuvables dans le DOM.');
}

// Liste des produits (noms en minuscules)
const products = [
    "crème hydratante intense"
];
if (searchBtnSubmit) {
    searchBtnSubmit.addEventListener('click', function(e) {
        e.preventDefault();
        if (!searchInput) return;
        const query = searchInput.value.trim().toLowerCase();
        if (noResultDiv) noResultDiv.classList.add('hidden');
        if (!query) return;

        // Recherche dans la liste des produits
        const found = products.find(name => name.includes(query));
        if (found) {
            // Scroll vers la section produits et surligne le produit trouvé
            const productCards = document.querySelectorAll('#products .product-card');
            let scrolled = false;
            productCards.forEach(card => {
                const title = card.querySelector('h3').textContent.trim().toLowerCase();
                card.classList.remove('ring-4', 'ring-pink-400');
                if (title.includes(query) && !scrolled) {
                    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    card.classList.add('ring-4', 'ring-pink-400');
                    scrolled = true;
                    setTimeout(() => card.classList.remove('ring-4', 'ring-pink-400'), 2000);
                }
            });
        } else {
            if (noResultDiv) noResultDiv.classList.remove('hidden');
        }
    });
}

// Cacher le message d'erreur quand on tape
if (searchInput && noResultDiv) {
    searchInput.addEventListener('input', () => {
        noResultDiv.classList.add('hidden');
    });
}
// Cacher le message d'erreur quand on tape
searchInput.addEventListener('input', () => {
    noResultDiv.classList.add('hidden');
});
