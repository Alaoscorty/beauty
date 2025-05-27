
//script qui permet de gérer les cartes produits
document.addEventListener('DOMContentLoaded', function () {
  // Affichage/masquage des catégories
  const toggles = document.querySelectorAll('[id$="-toggle"]');

  toggles.forEach(toggle => {
    const products = toggle.parentElement.querySelector('[id$="-products"]');
    toggle.addEventListener('click', function () {
      products.classList.toggle('hidden');
    });
  });

  // Détails des produits
  const productData = {
    hydratante: {
      name: "Crème Hydratante Intense",
      description: "Une crème riche qui hydrate en profondeur, parfaite pour les peaux sèches.",
      price: "24.99 €",
      image: "https://via.placeholder.com/100"
    },
    serum: {
      name: "Sérum Anti-Âge Premium",
      description: "Ce sérum atténue les rides et redonne de l’élasticité à la peau.",
      price: "39.99 €",
      image: "https://via.placeholder.com/100"
    },
    masque: {
      name: "Masque Éclat Doré",
      description: "Un masque éclat avec des extraits de perle pour illuminer le teint.",
      price: "19.99 €",
      image: "https://via.placeholder.com/100"
    },
    nettoyant: {
      name: "Nettoyant Doux",
      description: "Un nettoyant doux à base d'eau florale, sans sulfates.",
      price: "14.99 €",
      image: "https://via.placeholder.com/100"
    }
  };

  // Gère le clic sur un produit
  document.querySelectorAll('.product-item').forEach(item => {
    item.addEventListener('click', function () {
      const key = item.getAttribute('data-product');
      const product = productData[key];
      const detailContainer = item.closest('#face-care-products').querySelector('#product-detail');

      // Crée une carte produit HTML
      if (product) {
        detailContainer.innerHTML = `
          <div class="bg-white border rounded-lg shadow-md p-4 flex items-center space-x-4">
            <img src="${product.image}" alt="${product.name}" class="w-24 h-24 object-cover rounded" />
            <div class="flex-1">
              <h4 class="text-lg font-semibold text-gray-800">${product.name}</h4>
              <p class="text-gray-600 text-sm my-2">${product.description}</p>
              <div class="flex items-center justify-between">
                <span class="text-green-600 font-bold">${product.price}</span>
                <button class="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition">Ajouter</button>
              </div>
            </div>
          </div>
        `;
        detailContainer.classList.remove('hidden');
      } else {
        detailContainer.innerHTML = "<p class='text-red-500'>Produit non trouvé.</p>";
        detailContainer.classList.remove('hidden');
      }
    });
  });
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

