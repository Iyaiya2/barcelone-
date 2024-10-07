<?php
// Chemin vers le fichier JSON
$file_path = 'users.json';

// Récupérer les données du formulaire
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);  // Hacher le mot de passe

    // Lire le fichier JSON
    if (file_exists($file_path)) {
        $json_data = file_get_contents($file_path);
        $users = json_decode($json_data, true);
    } else {
        $users = [];
    }

    // Vérifier si l'utilisateur existe déjà
    foreach ($users as $user) {
        if ($user['username'] === $username || $user['email'] === $email) {
            die("Nom d'utilisateur ou email déjà pris.");
        }
    }

    // Ajouter le nouvel utilisateur au tableau
    $new_user = [
        "username" => $username,
        "email" => $email,
        "password" => $password
    ];
    $users[] = $new_user;

    // Sauvegarder dans le fichier JSON
    file_put_contents($file_path, json_encode($users, JSON_PRETTY_PRINT));

    echo "Inscription réussie!";
}
?>
