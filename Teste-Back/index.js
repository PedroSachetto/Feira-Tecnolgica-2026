const parametros = new URLSearchParams(window.location.search);

if (parametros.get("sucesso") === "1") {

    document.getElementById("mensagem").innerHTML = `
        <div class="sucesso">
            Chamado enviado com sucesso!
        </div>
    `;

}