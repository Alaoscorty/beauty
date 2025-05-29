
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
  Huilesatinee: {
    name: "Huile Satinée",
    description: "Une huile qui nourrit la peau en profondeur et laisse un fini soyeux.",
    price: "10 000 FCFA",
    image: "https://i.pinimg.com/736x/1b/89/2c/1b892c0fdecd59cfc133af80e014318c.jpg"
  },
  Hydratanteintense: {
    name: "Crème Hydratante Intense",
    description: "Crème riche conçue pour hydrater intensément les peaux sèches.",
    price: "15000 FCFA",
    image: "https://i.pinimg.com/736x/60/0e/54/600e540b2886cb7195511c6d8b1eb7c0.jpg"
  },
  Masqueeclat: {
    name: "Masque Éclat Doré",
    description: "Masque illuminant à base d'extraits naturels pour un teint radieux.",
    price: "3000 FCFA",
    image: "https://i.pinimg.com/736x/5f/06/bf/5f06bf55271c7489b8a375c8aef2adb9.jpg"
  },
  nettoyant: {
    name: "Nettoyant Doux",
    description: "Nettoyant visage sans sulfate adapté aux peaux sensibles.",
    price: "5000 FCFA",
    image: "https://i.pinimg.com/736x/6f/c0/3e/6fc03ee4ee8f56d73c27a3eda2ae3462.jpg"
  },
  Laitcorps: {
    name: "Lait Corps Nourrissant",
    description: "Hydrate et adoucit la peau du corps grâce à une formule enrichie.",
    price: "2500 FCFA",
    image: "https://i.pinimg.com/736x/75/97/64/7597645b096ef404252c1fc7d74cbd3b.jpg"
  },
  Gommagesucre: {
    name: "Gommage Sucre & Café",
    description: "Exfolie en douceur pour une peau lisse et tonifiée.",
    price: "7500 FCFA",
    image: "https://i.pinimg.com/736x/03/35/36/033536ea8eff5c3aa2d7d49d57042c07.jpg"
  },
  Mainreparatrice: {
    name: "Crème Mains Réparatrice",
    description: "Apaise et répare les mains sèches et abîmées.",
    price: "4000 FCFA",
    image: "https://i.pinimg.com/736x/1f/5d/41/1f5d414f0b4b118d194eeea0acacdf81.jpg"
  },
  Shampooingfortifiant: {
    name: "Shampooing Fortifiant",
    description: "Renforce la fibre capillaire et limite la casse.",
    price: "10 000 FCFA",
    image: "https://i.pinimg.com/736x/07/fb/0c/07fb0cb4b1c84996252afa3acb04cccd.jpg"
  },
  Masquereparateur: {
    name: "Masque Réparateur Intense",
    description: "Soin profond pour cheveux abîmés ou traités chimiquement.",
    price: "11 500 FCFA",
    image: "https://i.pinimg.com/736x/00/17/09/001709e19d7113a6a83b4532270ea497.jpg"
  },
  Huilecapillaire: {
    name: "Huile Capillaire Brillance",
    description: "Apporte éclat et douceur sans alourdir les cheveux.",
    price: "9500 FCFA",
    image: "https://i.pinimg.com/736x/2a/45/ad/2a45ad3d16c2c0f042ed60c3510d2c6a.jpg"
  },
  serum: {
    name: "Sérum Anti-Frisottis",
    description: "Lisse les cheveux rebelles et protège contre l’humidité.",
    price: "12 000 FCFA",
    image: "https://i.pinimg.com/736x/c8/0b/d9/c80bd9504d441301ae349138a354f4c6.jpg"
  },
  Capillairebrillance: {
    name: "Huile Capillaire Brillance",
    description: "Idéale pour sublimer la chevelure avec une brillance naturelle.",
    price: "9500 FCFA",
    image: "https://i.pinimg.com/736x/8d/fb/67/8dfb67f324f61bf2ca9335c9f162f107.jpg"
  },
  Frisottis: {
    name: "Sérum Anti-Frisottis",
    description: "Contrôle les frisottis et adoucit la texture capillaire.",
    price: "12 000 FCFA",
    image: "https://i.pinimg.com/736x/c6/4c/b6/c64cb632db7f82cb6d21e423b5fd7455.jpg"
  },
  Aloevera: {
    name: "Gel Aloe Vera Pur",
    description: "Apaise et hydrate la peau avec 99% d'aloe vera bio.",
    price: "6000 FCFA",
    image: "https://i.pinimg.com/736x/c3/b8/e0/c3b8e0d12daf660c1691682482868afc.jpg"
  },
  Jojoba: {
    name: "Huile de Jojoba Bio",
    description: "Régule le sébum et hydrate sans graisser.",
    price: "7000 FCFA",
    image: "https://i.pinimg.com/736x/4b/5b/c9/4b5bc90a26687361c70c2174f1765485.jpg"
  },
  Argileverte: {
    name: "Argile Verte Detox",
    description: "Purifie les peaux grasses et mixtes, effet matifiant immédiat.",
    price: "5500 FCFA",
    image: "https://i.pinimg.com/736x/b4/b6/bd/b4b6bdd0025e8a17b427664a56be4d9c.jpg"
  },
  Eauderose: {
    name: "Eau Florale de Rose",
    description: "Tonifie et rafraîchit le visage en douceur.",
    price: "5000 FCFA",
    image: "https://i.pinimg.com/736x/78/f7/ec/78f7ecd842617b8f53112d3b5225ca91.jpg"
  },
  hydratante: {
    name: "Crème Hydratante Intense",
    description: "Une crème riche qui hydrate en profondeur, parfaite pour les peaux sèches.",
    price: "8000 FCFA",
    image: "https://i.pinimg.com/736x/38/c2/78/38c278274026ddd250664a9af7bf2735.jpg"
  },
  masque: {
    name: "Masque Éclat Doré",
    description: "Un masque éclat avec des extraits de perle pour illuminer le teint.",
    price: "4000 FCFA",
    image: "https://i.pinimg.com/736x/bf/f3/58/bff358931791e7b8acc8f486fc02358e.jpg"
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

            <div class="product-card bg-white rounded-lg overflow-hidden shadow-md transition duration-300">
                <img src="${product.image}" alt="image produit" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h4 class="font-bold text-lg text-gray-800 mb-2">${product.name}</h4>
                    <p class="text-gray-600 text-sm my-2">${product.description}</p>
                    <p class="text-pink-500 font-bold mb-2">${product.price}</p>
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

