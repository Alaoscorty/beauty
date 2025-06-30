// Attendre que la page soit complètement chargée
document.addEventListener("DOMContentLoaded", function() {
  // Récupérer le bouton
  const signUpButton = document.getElementById("SignUp");
  // Récupérer les deux formulaires
  const loginForm = document.getElementById("loginForm");
  const signInForm = document.getElementById("signInForm");

  // Attacher l'événement click
  signUpButton.addEventListener("click", function() {
    // Masquer le formulaire de connexion
    loginForm.style.display = "none";
    // Afficher le formulaire d'inscription
    signInForm.style.display = "block";
  });
});