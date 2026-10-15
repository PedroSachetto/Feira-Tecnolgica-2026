```php
<?php

include "conexao.php";

$nome = $_POST["nome"];
$telefone = $_POST["telefone"];
$animal = $_POST["animal"];
$descricao = $_POST["descricao"];
$endereco = $_POST["endereco"];
$bairro = $_POST["bairro"];
$urgencia = $_POST["urgencia"];

if (isset($_FILES["foto"]) && $_FILES["foto"]["error"] == 0) {

    $nomeFoto = time() . "_" . $_FILES["foto"]["name"];

    $caminho = "uploads/" . $nomeFoto;

    move_uploaded_file(
        $_FILES["foto"]["tmp_name"],
        $caminho
    );

} else {

    $caminho = "";

}

$sql = "INSERT INTO chamados
(nome, telefone, animal, descricao, endereco, bairro, urgencia, foto)
VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

$stmt = $conexao->prepare($sql);

$stmt->bind_param(
    "ssssssss",
    $nome,
    $telefone,
    $animal,
    $descricao,
    $endereco,
    $bairro,
    $urgencia,
    $caminho
);

if ($stmt->execute()) {

    header("Location: index.html?sucesso=1");
    exit;

} else {

    echo "Erro ao salvar o chamado.";

}

$stmt->close();
$conexao->close();

?>
```
