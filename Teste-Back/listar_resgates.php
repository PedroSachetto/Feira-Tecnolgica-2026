<?php

session_start();

header("Content-Type: application/json");

if (!isset($_SESSION["funcionario_id"])) {

    http_response_code(401);

    echo json_encode([
        "erro" => "Não autorizado"
    ]);

    exit;
}

include "conexao.php";

$sql = "SELECT * FROM chamados ORDER BY id DESC";

$resultado = $conexao->query($sql);

$chamados = [];

while ($chamado = $resultado->fetch_assoc()) {

    $chamados[] = $chamado;

}

echo json_encode($chamados);

$conexao->close();

?>