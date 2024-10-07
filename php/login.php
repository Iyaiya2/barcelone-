<?php
session_start();

$file_path = 'users.json';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    if (file_exists($file_path)) {
        $json_data = file_get_contents($file_path);
        $users = json_decode($json_data, true);
    } else {
        die("No users found.");
    }

    // Vérifier les informations d'identification
    foreach ($users as $user) {
        if ($user['username'] === $username && password_verify($password, $user['password'])) {
            $_SESSION['username'] = $username;
            echo "Connection successful!";
            exit();
        }
    }

    echo "Incorrect username or password.";
}
?>
