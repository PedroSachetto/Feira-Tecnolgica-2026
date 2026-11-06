<?php

session_start();

header("Content-Type: application/json");

if (isset($_SESSION["funcionario_id"])) {

    echo json_encode([
        "logado" => true,
        "nome" => $_SESSION["funcionario_nome"]
    ]);

} else {

    echo json_encode([
        "logado" => false
    ]);

}

?>