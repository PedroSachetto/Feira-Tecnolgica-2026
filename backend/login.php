<?php

session_start();

include "conexao.php";

$usuario = $_POST["usuario"];
$senha = $_POST["senha"];

$sql = "SELECT id, nome, usuario, senha
        FROM funcionarios
        WHERE usuario = ?";

$stmt = $conexao->prepare($sql);

$stmt->bind_param("s", $usuario);

$stmt->execute();

$stmt->store_result();

if ($stmt->num_rows == 1) {

    $stmt->bind_result($id, $nome, $usuarioBanco, $senhaBanco);

    $stmt->fetch();

    if (password_verify($senha, $senhaBanco)) {

        $_SESSION["funcionario_id"] = $id;
        $_SESSION["funcionario_nome"] = $nome;

        header("Location: painel.html");
        exit;

    }

}

header("Location: login.html?erro=1");
exit;

?>