<?php
header('Content-Type: application/json');

$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['email']) || !isset($data['password']) || !isset($data['name'])) {
    echo json_encode(["success" => false, "message" => "Données manquantes."]);
    exit;
}

$email = strtolower(trim($data['email']));
$password = $data['password'];
$name = trim($data['name']);

// Charger les utilisateurs existants
$usersFile = 'users.json';
$users = file_exists($usersFile) ? json_decode(file_get_contents($usersFile), true) : [];

// Vérifier si l'utilisateur existe déjà
foreach ($users as $user) {
    if ($user['email'] === $email) {
        echo json_encode(["success" => false, "message" => "Email déjà utilisé."]);
        exit;
    }
}

// Ajouter le nouvel utilisateur
$users[] = [
    "name" => $name,
    "email" => $email,
    "password" => password_hash($password, PASSWORD_DEFAULT) // Hachage sécurisé
];

// Sauvegarder
file_put_contents($usersFile, json_encode($users, JSON_PRETTY_PRINT));

echo json_encode(["success" => true, "message" => "Compte créé avec succès."]);
