verificarLogin();


function verificarLogin() {

    fetch("verificar_sessao.php")

        .then(resposta => resposta.json())

        .then(dados => {

            if (dados.logado == false) {

                window.location.href = "login.html";

                return;

            }

            document.getElementById("funcionario").innerText =
                "Funcionário: " + dados.nome;

            carregarChamados();

        });

}


function carregarChamados() {

    fetch("listar_resgates.php")

        .then(resposta => {

            if (resposta.status == 401) {

                window.location.href = "login.html";

            }

            return resposta.json();

        })

        .then(chamados => {

            const lista =
                document.getElementById("listaChamados");

            lista.innerHTML = "";


            if (chamados.length == 0) {

                lista.innerHTML = `
                    <div class="sem-chamados">

                        <h2>
                            Nenhum chamado encontrado.
                        </h2>

                        <p>
                            Quando alguém solicitar um resgate,
                            ele aparecerá aqui.
                        </p>

                    </div>
                `;

                return;

            }


            chamados.forEach(chamado => {

                const card =
                    document.createElement("div");

                card.className = "chamado";


                card.innerHTML = `

                    <div class="chamado-topo">

                        <h2>
                            Chamado #${chamado.id}
                        </h2>

                        <span class="urgencia">
                            ${chamado.urgencia}
                        </span>

                    </div>


                    <p>
                        <strong>Nome:</strong>
                        ${chamado.nome}
                    </p>

                    <p>
                        <strong>Telefone:</strong>
                        ${chamado.telefone}
                    </p>

                    <p>
                        <strong>Animal:</strong>
                        ${chamado.animal}
                    </p>

                    <img 
                        src="${chamado.foto}" 
                        class="foto-chamado"
                    >

                    <div class="linha"></div>

                    <p>
                        <strong>Descrição:</strong><br>
                        ${chamado.descricao}
                    </p>

                    <p>
                        <strong>Endereço:</strong>
                        ${chamado.endereco}
                    </p>

                    <p>
                        <strong>Bairro:</strong>
                        ${chamado.bairro}
                    </p>

                    <p>
                        <strong>Status:</strong>
                        ${chamado.status}
                    </p>

                    <p>
                        <strong>Data:</strong>
                        ${chamado.data_chamado}
                    </p>


                    <button
                        class="botao-apagar"
                        onclick="apagarChamado(${chamado.id})">

                        Apagar chamado

                    </button>

                `;


                lista.appendChild(card);

            });

        });

}


function apagarChamado(id) {

    const confirmar = confirm(
        "Tem certeza que deseja apagar este chamado?"
    );


    if (confirmar == false) {

        return;

    }


    const dados = new FormData();

    dados.append("id", id);


    fetch("apagar_resgate.php", {

        method: "POST",

        body: dados

    })

        .then(resposta => resposta.text())

        .then(resultado => {

            alert(resultado);

            carregarChamados();

        });

}