<?php

$servidor = "localhost";
$usuario = "root";
$senha = "";
$banco = "resgate_animais";

$conexao = new mysqli($servidor, $usuario, $senha, $banco);

if ($conexao->connect_error) {
    die("Erro ao conectar com o banco: " . $conexao->connect_error);
}

$conexao->set_charset("utf8mb4");

?>