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