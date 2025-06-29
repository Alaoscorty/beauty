
  const signUpButton = document.getElementById('signUpForm');
  const signInButton = document.getElementById('signInForm');
  const container = document.getElementById('container');

  // Utilitaires : localStorage pour stocker les utilisateurs en mode hors ligne
  function getLocalUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
  }

  function saveLocalUser(user) {
    const users = getLocalUsers();
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  }

  function userExists(email) {
    const users = getLocalUsers();
    return users.find(user => user.email === email);
  }

  // Formulaire d'inscription
  document.getElementById('signUpForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const name = document.getElementById('nameSignUp').value.trim();
    const email = document.getElementById('emailSignUp').value.trim();
    const password = document.getElementById('passwordSignUp').value;

    if (!name || !email || !password) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    if (userExists(email)) {
      alert("Un compte avec cet email existe déjà.");
      return;
    }

    const user = { name, email, password };

    if (navigator.onLine) {
      try {
        // 🔄 Remplace cette URL par ton endpoint API réel
        const response = await fetch('http://localhost/backend/signup.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(user)
        });

        const result = await response.json();
        if (result.success) {
          alert("Compte créé avec succès !");
          window.location.href = "compteuser/html/dashboard.html";
        } else {
          alert("Erreur lors de l'inscription (serveur).");
        }
      } catch (err) {
        console.warn("Serveur inaccessible, inscription locale.");
        saveLocalUser(user);
        alert("Inscription locale réussie !");
        window.location.href = "compteuser/html/dashboard.html";
      }
    } else {
      // Mode hors ligne
      saveLocalUser(user);
      alert("Inscription hors ligne réussie !");
      window.location.href = "compteuser/html/dashboard.html";
    }
  });

  // Formulaire de connexion
  document.getElementById('signInForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const email = document.getElementById('emailSignIn').value.trim();
    const password = document.getElementById('passwordSignIn').value;

    if (!email || !password) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    if (navigator.onLine) {
      try {
        // 🔄 Remplace cette URL par ton endpoint API réel
        const response = await fetch('http://localhost/backend/login.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        });

        const result = await response.json();
        if (result.success) {
          alert("Connexion réussie !");
          window.location.href = "compteuser/html/dashboard.html";
        } else {
          alert("Email ou mot de passe incorrect (serveur).");
        }
      } catch (err) {
        console.warn("Erreur serveur. Tentative en local...");
        const user = userExists(email);
        if (user && user.password === password) {
          alert("Connexion locale réussie !");
          window.location.href = "compteuser/html/dashboard.html";
        } else {
          alert("Identifiants invalides.");
        }
      }
    } else {
      // Mode hors ligne
      const user = userExists(email);
      if (user && user.password === password) {
        alert("Connexion hors ligne réussie !");
        window.location.href = "compteuser/html/dashboard.html";
      } else {
        alert("Identifiants incorrects ou utilisateur non enregistré localement.");
      }
    }
  });
