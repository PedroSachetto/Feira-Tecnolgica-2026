<?php

session_start();

if (!isset($_SESSION["funcionario_id"])) {

    http_response_code(401);

    echo "Não autorizado.";

    exit;
}

include "conexao.php";

$id = $_POST["id"];

$sql = "DELETE FROM chamados WHERE id = ?";

$stmt = $conexao->prepare($sql);

$stmt->bind_param("i", $id);

if ($stmt->execute()) {

    echo "Chamado apagado com sucesso.";

} else {

    echo "Erro ao apagar chamado.";

}

$stmt->close();

$conexao->close();

?>