function abrirModal(animal) {
    const modal = document.getElementById("modal");
    const titulo = document.getElementById("modal-titulo");
    const texto = document.getElementById("modal-texto");
    const imagem = document.getElementById("modal-imagem");

    const animais = {
        gamba: {
            titulo: "Saruê / Gambá-de-orelha-preta",
            imagem: "img/animais/gamba.png",
            texto: `
                <strong>O que fazer:</strong><br><br>
                • Mantenha distância e não tente tocar no animal.<br>
                • Não tente capturá-lo ou espantá-lo.<br>
                • Mantenha cães e gatos afastados.<br>
                • Não ofereça comida.<br>
                • Deixe uma rota de saída para o animal.<br>
                • Se estiver ferido ou preso, procure ajuda especializada.
            `
        },

        onca: {
            titulo: "Onça-parda",
            imagem: "img/animais/onca.png",
            texto: `
                <strong>O que fazer:</strong><br><br>
                • Mantenha distância e não tente se aproximar.<br>
                • Não tente tocar, capturar ou perseguir o animal.<br>
                • Mantenha crianças e animais domésticos afastados.<br>
                • Não ofereça comida nem tente atraí-la.<br>
                • Dê espaço para que o animal possa sair do local.<br>
                • Se estiver em uma área urbana ou houver risco, procure ajuda especializada.
            `
        },

        sagui: {
            titulo: "Sagui",
            imagem: "img/animais/sagui.png",
            texto: `
                <strong>O que fazer:</strong><br><br>
                • Não tente pegar ou alimentar o animal.<br>
                • Mantenha distância.<br>
                • Evite assustá-lo ou cercá-lo.<br>
                • Mantenha cães e gatos afastados.<br>
                • Não tente capturá-lo.<br>
                • Caso esteja ferido ou em perigo, procure ajuda especializada.
            `
        },

        capivara: {
            titulo: "Capivara",
            imagem: "img/animais/capivara.png",
            texto: `
                <strong>O que fazer:</strong><br><br>
                • Mantenha uma distância segura.<br>
                • Não tente tocar ou alimentar o animal.<br>
                • Não encurrale a capivara.<br>
                • Mantenha cães e outros animais afastados.<br>
                • Não tente capturá-la.<br>
                • Caso esteja ferida ou em perigo, procure ajuda especializada.
            `
        },

        tamandua: {
            titulo: "Tamanduá-mirim",
            imagem: "img/animais/tamandua.png",
            texto: `
                <strong>O que fazer:</strong><br><br>
                • Mantenha distância.<br>
                • Não tente tocar ou capturar o animal.<br>
                • Evite cercá-lo ou assustá-lo.<br>
                • Mantenha cães e gatos afastados.<br>
                • Deixe o animal seguir seu caminho.<br>
                • Se estiver ferido, procure ajuda especializada.
            `
        },

        quati: {
            titulo: "Quati",
            imagem: "img/animais/quati.png",
            texto: `
                <strong>O que fazer:</strong><br><br>
                • Não tente tocar ou alimentar o animal.<br>
                • Mantenha distância.<br>
                • Não se aproxime de filhotes.<br>
                • Mantenha cães e gatos afastados.<br>
                • Evite deixar alimentos e lixo expostos.<br>
                • Procure ajuda especializada se o animal estiver ferido.
            `
        },

        esquilo: {
            titulo: "Esquilo / Caxinguelê",
            imagem: "img/animais/esquilo.png",
            texto: `
                <strong>O que fazer:</strong><br><br>
                • Observe o animal de longe.<br>
                • Não tente pegá-lo ou alimentá-lo.<br>
                • Evite assustá-lo.<br>
                • Mantenha cães e gatos afastados.<br>
                • Não tente capturá-lo.<br>
                • Procure ajuda caso esteja ferido.
            `
        },

        morcego: {
            titulo: "Morcego",
            imagem: "img/animais/morcego.png",
            texto: `
                <strong>O que fazer:</strong><br><br>
                • Não toque no morcego, principalmente se estiver no chão.<br>
                • Afaste crianças e animais domésticos.<br>
                • Evite contato direto com o animal.<br>
                • Não tente capturá-lo com as mãos.<br>
                • Se houver contato direto, procure atendimento de saúde.<br>
                • Para remoção, procure o serviço responsável.
            `
        },

        tucano: {
            titulo: "Tucano-de-bico-verde",
            imagem: "img/animais/tucano.png",
            texto: `
                <strong>O que fazer:</strong><br><br>
                • Não tente pegar ou alimentar o tucano.<br>
                • Mantenha distância.<br>
                • Evite assustá-lo ou cercá-lo.<br>
                • Mantenha cães e gatos afastados.<br>
                • Não tente prendê-lo.<br>
                • Caso esteja ferido, procure ajuda especializada.
            `
        },

        jacu: {
            titulo: "Jacu",
            imagem: "img/animais/jacu.png",
            texto: `
                <strong>O que fazer:</strong><br><br>
                • Observe de longe.<br>
                • Não tente capturar ou alimentar a ave.<br>
                • Evite assustá-la.<br>
                • Mantenha cães e gatos afastados.<br>
                • Deixe o animal seguir seu caminho.<br>
                • Se estiver ferido, procure ajuda especializada.
            `
        },

        picapau: {
            titulo: "Pica-pau",
            imagem: "img/animais/picapau.png",
            texto: `
                <strong>O que fazer:</strong><br><br>
                • Não tente tocar ou capturar a ave.<br>
                • Mantenha distância.<br>
                • Evite barulhos e movimentos bruscos.<br>
                • Não ofereça alimentos.<br>
                • Mantenha animais domésticos afastados.<br>
                • Se estiver ferido, procure ajuda especializada.
            `
        },

        saracura: {
            titulo: "Saracura-do-mato",
            imagem: "img/animais/saracura.png",
            texto: `
                <strong>O que fazer:</strong><br><br>
                • Mantenha distância.<br>
                • Não tente pegar ou alimentar a ave.<br>
                • Evite assustá-la.<br>
                • Mantenha cães e gatos afastados.<br>
                • Deixe uma rota de fuga.<br>
                • Procure ajuda especializada caso esteja ferida.
            `
        },

        coruja: {
            titulo: "Coruja",
            imagem: "img/animais/coruja.png",
            texto: `
                <strong>O que fazer:</strong><br><br>
                • Não tente tocar ou capturar a ave.<br>
                • Mantenha distância.<br>
                • Evite barulho e movimentos bruscos.<br>
                • Mantenha animais domésticos afastados.<br>
                • Não tente retirar a ave do local à força.<br>
                • Se estiver ferida, procure ajuda especializada.
            `
        },

        corujaigreja: {
            titulo: "Coruja",
            imagem: "img/animais/curujaigreja.png",
            texto: `
                <strong>O que fazer:</strong><br><br>
                • Não tente tocar ou capturar a ave.<br>
                • Mantenha distância.<br>
                • Evite barulho e movimentos bruscos.<br>
                • Mantenha animais domésticos afastados.<br>
                • Não tente retirar a ave do local à força.<br>
                • Se estiver ferida, procure ajuda especializada.
            `
        },

        gaviao: {
            titulo: "Gavião-carijó",
            imagem: "img/animais/gaviao.png",
            texto: `
                <strong>O que fazer:</strong><br><br>
                • Não tente tocar ou capturar a ave.<br>
                • Mantenha distância segura.<br>
                • Evite assustá-la.<br>
                • Mantenha crianças e animais afastados.<br>
                • Não ofereça alimentos.<br>
                • Se estiver ferida, procure ajuda especializada.
            `
        },

        sabia: {
            titulo: "Sabiá-laranjeira",
            imagem: "img/animais/sabia.png",
            texto: `
                <strong>O que fazer:</strong><br><br>
                • Não tente pegar ou alimentar a ave.<br>
                • Mantenha distância.<br>
                • Evite assustá-la.<br>
                • Mantenha gatos e cães afastados.<br>
                • Deixe a ave seguir seu caminho.<br>
                • Se estiver ferida, procure ajuda especializada.
            `
        },

        bemtevi: {
            titulo: "Bem-te-vi",
            imagem: "img/animais/bemtevi.png",
            texto: `
                <strong>O que fazer:</strong><br><br>
                • Observe de longe.<br>
                • Não tente capturar ou alimentar a ave.<br>
                • Evite assustá-la.<br>
                • Mantenha animais domésticos afastados.<br>
                • Não mexa em ninhos ou filhotes.<br>
                • Procure ajuda especializada caso esteja ferida.
            `
        },

        teiu: {
            titulo: "Lagarto Teiú",
            imagem: "img/animais/teiu.png",
            texto: `
                <strong>O que fazer:</strong><br><br>
                • Mantenha distância.<br>
                • Não tente pegar ou encurralar o animal.<br>
                • Mantenha cães e gatos afastados.<br>
                • Não ofereça comida.<br>
                • Deixe uma rota de fuga.<br>
                • Procure ajuda especializada se estiver ferido.
            `
        },

        coral: {
            titulo: "Cobra-coral",
            imagem: "img/animais/coral.png",
            texto: `
                <strong>O que fazer:</strong><br><br>
                • Mantenha distância segura.<br>
                • Não tente tocar ou capturar a cobra.<br>
                • Afaste crianças e animais domésticos.<br>
                • Não tente matar o animal.<br>
                • Não tente identificar a cobra de perto.<br>
                • Entre em contato com o órgão responsável pelo resgate.
            `
        },

        jararaca: {
            titulo: "Jararaca",
            imagem: "img/animais/jararaca.png",
            texto: `
                <strong>O que fazer:</strong><br><br>
                • Afaste-se imediatamente.<br>
                • Não tente tocar ou capturar a cobra.<br>
                • Afaste crianças e animais domésticos.<br>
                • Não tente matar o animal.<br>
                • Mantenha uma distância segura.<br>
                • Entre em contato com o órgão responsável pelo resgate.
            `
        },

        cobrapio: {
            titulo: "Cobra-cipó",
            imagem: "img/animais/cobra-cipo.png",
            texto: `
                <strong>O que fazer:</strong><br><br>
                • Não tente pegar a cobra.<br>
                • Mantenha distância.<br>
                • Evite assustá-la ou cercá-la.<br>
                • Mantenha crianças e animais afastados.<br>
                • Não tente matar o animal.<br>
                • Procure ajuda especializada se necessário.
            `
        },

        caninana: {
            titulo: "Caninana",
            imagem: "img/animais/caninana.png",
            texto: `
                <strong>O que fazer:</strong><br><br>
                • Mantenha distância.<br>
                • Não tente capturar ou matar a cobra.<br>
                • Evite cercá-la.<br>
                • Mantenha crianças e animais domésticos afastados.<br>
                • Deixe uma rota de fuga.<br>
                • Procure ajuda especializada caso seja necessário.
            `
        },

        dormideira: {
            titulo: "Dormideira",
            imagem: "img/animais/dormideira.png",
            texto: `
                <strong>O que fazer:</strong><br><br>
                • Não tente tocar ou capturar a cobra.<br>
                • Mantenha distância.<br>
                • Evite assustá-la.<br>
                • Mantenha crianças e animais afastados.<br>
                • Não tente matar o animal.<br>
                • Procure ajuda especializada se estiver em local de risco.
            `
        },

        sapo: {
            titulo: "Sapo-cururu",
            imagem: "img/animais/sapo.png",
            texto: `
                <strong>O que fazer:</strong><br><br>
                • Evite tocar no animal.<br>
                • Mantenha cães e gatos afastados.<br>
                • Não ofereça alimentos.<br>
                • Evite assustá-lo.<br>
                • Deixe o sapo seguir seu caminho.<br>
                • Procure ajuda caso esteja ferido.
            `
        },

        ra: {
            titulo: "Rã",
            imagem: "img/animais/ra.png",
            texto: `
                <strong>O que fazer:</strong><br><br>
                • Evite tocar no animal.<br>
                • Mantenha distância.<br>
                • Não tente capturá-lo.<br>
                • Mantenha animais domésticos afastados.<br>
                • Deixe o animal seguir seu caminho.<br>
                • Procure ajuda se estiver ferido.
            `
        },

        perereca: {
            titulo: "Perereca",
            imagem: "img/animais/perereca.png",
            texto: `
                <strong>O que fazer:</strong><br><br>
                • Evite tocar no animal.<br>
                • Não tente capturá-lo.<br>
                • Mantenha cães e gatos afastados.<br>
                • Evite assustá-lo.<br>
                • Deixe o animal seguir seu caminho.<br>
                • Procure ajuda especializada se estiver ferido.
            `
        },

        cagado: {
            titulo: "Cágado-de-barbicha",
            imagem: "img/animais/cagado.png",
            texto: `
                <strong>O que fazer:</strong><br><br>
                • Não tente pegar o animal.<br>
                • Mantenha distância.<br>
                • Evite levá-lo para outro local.<br>
                • Mantenha cães e gatos afastados.<br>
                • Não ofereça alimentos.<br>
                • Se estiver ferido, procure ajuda especializada.
            `
        },

        escorpiao: {
            titulo: "Escorpião-amarelo",
            imagem: "img/animais/escorpiao.png",
            texto: `
                <strong>O que fazer:</strong><br><br>
                • Não toque no escorpião.<br>
                • Afaste crianças e animais domésticos.<br>
                • Não tente capturá-lo com as mãos.<br>
                • Mantenha distância segura.<br>
                • Procure o serviço responsável pelo controle do animal.<br>
                • Em caso de picada, procure atendimento médico imediatamente.
            `
        },

        armadeira: {
            titulo: "Aranha-armadeira",
            imagem: "img/animais/armadeira.png",
            texto: `
                <strong>O que fazer:</strong><br><br>
                • Não tente tocar ou capturar a aranha.<br>
                • Mantenha distância.<br>
                • Afaste crianças e animais domésticos.<br>
                • Evite movimentos bruscos próximos ao animal.<br>
                • Procure ajuda especializada para a remoção.<br>
                • Em caso de picada, procure atendimento médico.
            `
        },

        marrom: {
            titulo: "Aranha-marrom",
            imagem: "img/animais/marrom.png",
            texto: `
                <strong>O que fazer:</strong><br><br>
                • Não toque na aranha.<br>
                • Não tente capturá-la com as mãos.<br>
                • Afaste crianças e animais domésticos.<br>
                • Tenha cuidado ao mexer em caixas, roupas e objetos guardados.<br>
                • Procure ajuda especializada.<br>
                • Em caso de picada, procure atendimento médico.
            `
        },

        caranguejeira: {
            titulo: "Aranha-caranguejeira",
            imagem: "img/animais/caranguejeira.png",
            texto: `
                <strong>O que fazer:</strong><br><br>
                • Mantenha distância.<br>
                • Não tente pegar ou provocar a aranha.<br>
                • Afaste crianças e animais domésticos.<br>
                • Não tente matar o animal.<br>
                • Deixe uma rota de fuga.<br>
                • Procure ajuda especializada caso seja necessário.
            `
        }
    };

    const dados = animais[animal];

    if (!dados) {
        console.error("Animal não encontrado:", animal);
        return;
    }

    titulo.textContent = dados.titulo;
    texto.innerHTML = dados.texto;

    imagem.src = dados.imagem;
    imagem.alt = dados.titulo;

    modal.style.display = "flex";
}


function fecharModal() {
    const modal = document.getElementById("modal");

    modal.style.display = "none";
}


window.onclick = function (event) {
    const modal = document.getElementById("modal");

    if (event.target === modal) {
        modal.style.display = "none";
    }
};