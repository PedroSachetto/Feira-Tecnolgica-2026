const parametros = new URLSearchParams(window.location.search);

if (parametros.get("erro") === "1") {

    document.getElementById("erro").innerHTML = `
        <div class="erro">
            Usuário ou senha incorretos.
        </div>
    `;

}