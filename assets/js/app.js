/* ===================================================
   LINKA MOMENTOS
   Página pública de homenagens
=================================================== */


/* ===================================================
   DADOS DE TESTE

   Depois estes dados serão carregados pelo painel
   administrativo e pelo banco de dados.
=================================================== */

const homenagem = {

    id: "LKM-TESTE",

    tema: "padrao",

    titulo: "Uma homenagem especial",

    subtitulo:
        "Alguns momentos merecem ser guardados para sempre.",

    homenageado: "Para alguém muito especial",

    mensagem:
        "Esta homenagem foi preparada com muito carinho.\n\n" +
        "Cada foto, cada lembrança e cada palavra representam " +
        "momentos que permanecerão para sempre em nossos corações.",

    assinatura:
        "Com carinho,\nSua família",

    visual: {

        corPrimaria: "#7a4b2a",

        corSecundaria: "#d6a86a",

        corFundo: "#f7f2eb",

        efeito: "nenhum"

    },

    midias: {

        capa: "",

        fotos: [],

        videos: [],

        musicas: []

    }

};


/* ===================================================
   INICIALIZAÇÃO
=================================================== */

document.addEventListener(
    "DOMContentLoaded",
    iniciarPagina
);


function iniciarPagina() {

    aplicarConteudo(
        homenagem
    );

    aplicarTema(
        homenagem.visual
    );

    carregarCapa(
        homenagem.midias.capa
    );

    carregarGaleria(
        homenagem.midias.fotos
    );

    carregarVideos(
        homenagem.midias.videos
    );

}


/* ===================================================
   CONTEÚDO
=================================================== */

function aplicarConteudo(dados) {

    definirTexto(
        "titulo",
        dados.titulo
    );

    definirTexto(
        "subtitulo",
        dados.subtitulo
    );

    definirTexto(
        "homenageado",
        dados.homenageado
    );

    definirTexto(
        "mensagem",
        dados.mensagem
    );

    definirTexto(
        "assinatura",
        dados.assinatura
    );


    if (dados.titulo) {

        document.title =
            dados.titulo +
            " | LINKA Momentos";

    }

}


/* ===================================================
   TEMA VISUAL
=================================================== */

function aplicarTema(visual) {

    if (!visual) {
        return;
    }


    const raiz =
        document.documentElement;


    if (visual.corPrimaria) {

        raiz.style.setProperty(
            "--cor-principal",
            visual.corPrimaria
        );

    }


    if (visual.corSecundaria) {

        raiz.style.setProperty(
            "--cor-secundaria",
            visual.corSecundaria
        );

    }


    if (visual.corFundo) {

        raiz.style.setProperty(
            "--cor-fundo",
            visual.corFundo
        );

    }

}


/* ===================================================
   FOTO DE CAPA
=================================================== */

function carregarCapa(caminho) {

    const fotoCapa =
        document.getElementById(
            "fotoCapa"
        );


    if (!fotoCapa) {
        return;
    }


    if (!caminho) {

        fotoCapa.hidden = true;

        fotoCapa.removeAttribute(
            "src"
        );

        return;
    }


    fotoCapa.src = caminho;

    fotoCapa.hidden = false;

}


/* ===================================================
   GALERIA DE FOTOS
=================================================== */

function carregarGaleria(fotos) {

    const secaoGaleria =
        document.getElementById(
            "secaoGaleria"
        );

    const galeria =
        document.getElementById(
            "galeria"
        );


    if (
        !secaoGaleria ||
        !galeria
    ) {
        return;
    }


    galeria.innerHTML = "";


    if (
        !Array.isArray(fotos) ||
        fotos.length === 0
    ) {

        secaoGaleria.hidden = true;

        return;

    }


    fotos.forEach(
        function (foto, indice) {

            const imagem =
                document.createElement(
                    "img"
                );


            imagem.src = foto;

            imagem.alt =
                "Foto da homenagem " +
                (indice + 1);

            imagem.loading =
                "lazy";

            imagem.decoding =
                "async";


            galeria.appendChild(
                imagem
            );

        }
    );


    secaoGaleria.hidden = false;

}


/* ===================================================
   VÍDEOS
=================================================== */

function carregarVideos(videos) {

    const secaoVideo =
        document.getElementById(
            "secaoVideo"
        );

    const videoPrincipal =
        document.getElementById(
            "videoHomenagem"
        );


    if (
        !secaoVideo ||
        !videoPrincipal
    ) {
        return;
    }


    if (
        !Array.isArray(videos) ||
        videos.length === 0
    ) {

        secaoVideo.hidden = true;

        videoPrincipal.removeAttribute(
            "src"
        );

        return;

    }


    videoPrincipal.src =
        videos[0];

    videoPrincipal.load();

    secaoVideo.hidden = false;

}


/* ===================================================
   UTILITÁRIOS
=================================================== */

function definirTexto(
    elementoId,
    texto
) {

    const elemento =
        document.getElementById(
            elementoId
        );


    if (!elemento) {
        return;
    }


    if (!texto) {

        elemento.hidden = true;

        elemento.textContent = "";

        return;

    }


    elemento.textContent = texto;

    elemento.hidden = false;

}
