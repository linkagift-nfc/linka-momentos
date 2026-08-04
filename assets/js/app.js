/* ===================================================
   LINKA MOMENTOS
   Página pública de homenagens digitais
=================================================== */


/* ===================================================
   CONFIGURAÇÕES
=================================================== */

const CONFIGURACOES = {

    tempoMinimoAbertura: 1800,

    tempoAviso: 3000,

    quantidadeMaximaParticulas: 18,

    arquivoDados: function (id) {

        return "dados/" +
            encodeURIComponent(id) +
            ".json";

    }

};


/* ===================================================
   DADOS DE TESTE

   Estes dados serão usados enquanto o painel
   administrativo e o banco ainda não estiverem
   conectados.
=================================================== */

const HOMENAGEM_TESTE = {

    id: "LKM-TESTE",

    ativa: true,

    tema: "padrao",

    categoria: "Uma lembrança especial",

    titulo: "Momentos que ficam para sempre",

    subtitulo:
        "Uma homenagem criada com carinho para recordar histórias, sentimentos e pessoas especiais.",

    textoAbertura:
        "Preparando uma homenagem especial...",

    textoBotaoIniciar:
        "Abrir homenagem",

    chamadaHomenageado:
        "Esta homenagem é para",

    homenageado:
        "Alguém muito especial",

    mensagem:
        "Algumas pessoas tornam a nossa história mais bonita apenas por fazerem parte dela.\n\n" +
        "Esta homenagem reúne lembranças, palavras e sentimentos que merecem ser guardados para sempre.",

    assinatura:
        "Com muito carinho,\nSua família",

    secoes: {

        videos: {

            chamada:
                "Aperte o play",

            titulo:
                "Uma mensagem em vídeo",

            descricao:
                "Assista a esta homenagem preparada especialmente para você."

        },

        galeria: {

            chamada:
                "Memórias especiais",

            titulo:
                "Nossos momentos",

            descricao:
                "Cada imagem guarda um pedacinho desta história."

        }

    },

    visual: {

        corPrincipal:
            "#7a4b2a",

        corSecundaria:
            "#d6a86a",

        corFundo:
            "#f7f2eb",

        corFundoClaro:
            "#fffaf5",

        efeito:
            "coracoes"

    },

    midias: {

        capa: "",

        fotos: [],

        videos: [],

        musica: ""

    },

    recursos: {

        mostrarCompartilhamento:
            true,

        mostrarMarca:
            true,

        iniciarComBotao:
            false

    }

};


/* ===================================================
   ESTADO DA APLICAÇÃO
=================================================== */

const estado = {

    homenagem: null,

    fotos: [],

    fotoAtual: 0,

    musicaAtiva: false,

    avisoTimeout: null,

    particulasTimeout: null

};


/* ===================================================
   ELEMENTOS DA PÁGINA
=================================================== */

const elementos = {

    telaAbertura:
        document.getElementById(
            "telaAbertura"
        ),

    textoAbertura:
        document.getElementById(
            "textoAbertura"
        ),

    estadoCarregamento:
        document.getElementById(
            "estadoCarregamento"
        ),

    estadoErro:
        document.getElementById(
            "estadoErro"
        ),

    tituloErro:
        document.getElementById(
            "tituloErro"
        ),

    mensagemErro:
        document.getElementById(
            "mensagemErro"
        ),

    btnTentarNovamente:
        document.getElementById(
            "btnTentarNovamente"
        ),

    paginaHomenagem:
        document.getElementById(
            "paginaHomenagem"
        ),

    conteudoHomenagem:
        document.getElementById(
            "conteudoHomenagem"
        ),

    fotoCapa:
        document.getElementById(
            "fotoCapa"
        ),

    categoriaHomenagem:
        document.getElementById(
            "categoriaHomenagem"
        ),

    titulo:
        document.getElementById(
            "titulo"
        ),

    subtitulo:
        document.getElementById(
            "subtitulo"
        ),

    btnIniciarExperiencia:
        document.getElementById(
            "btnIniciarExperiencia"
        ),

    textoBotaoIniciar:
        document.getElementById(
            "textoBotaoIniciar"
        ),

    chamadaHomenageado:
        document.getElementById(
            "chamadaHomenageado"
        ),

    homenageado:
        document.getElementById(
            "homenageado"
        ),

    mensagem:
        document.getElementById(
            "mensagem"
        ),

    secaoMensagem:
        document.getElementById(
            "secaoMensagem"
        ),

    secaoVideos:
        document.getElementById(
            "secaoVideos"
        ),

    subtituloVideos:
        document.getElementById(
            "subtituloVideos"
        ),

    tituloVideos:
        document.getElementById(
            "tituloVideos"
        ),

    descricaoVideos:
        document.getElementById(
            "descricaoVideos"
        ),

    listaVideos:
        document.getElementById(
            "listaVideos"
        ),

    secaoGaleria:
        document.getElementById(
            "secaoGaleria"
        ),

    subtituloGaleria:
        document.getElementById(
            "subtituloGaleria"
        ),

    tituloGaleria:
        document.getElementById(
            "tituloGaleria"
        ),

    descricaoGaleria:
        document.getElementById(
            "descricaoGaleria"
        ),

    galeria:
        document.getElementById(
            "galeria"
        ),

    secaoAssinatura:
        document.getElementById(
            "secaoAssinatura"
        ),

    assinatura:
        document.getElementById(
            "assinatura"
        ),

    secaoCompartilhar:
        document.getElementById(
            "secaoCompartilhar"
        ),

    btnCompartilhar:
        document.getElementById(
            "btnCompartilhar"
        ),

    visualizadorFotos:
        document.getElementById(
            "visualizadorFotos"
        ),

    fotoAmpliada:
        document.getElementById(
            "fotoAmpliada"
        ),

    legendaFoto:
        document.getElementById(
            "legendaFoto"
        ),

    btnFecharFoto:
        document.getElementById(
            "btnFecharFoto"
        ),

    btnFotoAnterior:
        document.getElementById(
            "btnFotoAnterior"
        ),

    btnProximaFoto:
        document.getElementById(
            "btnProximaFoto"
        ),

    btnMusica:
        document.getElementById(
            "btnMusica"
        ),

    iconeMusica:
        document.getElementById(
            "iconeMusica"
        ),

    audioHomenagem:
        document.getElementById(
            "audioHomenagem"
        ),

    camadaEfeitos:
        document.getElementById(
            "camadaEfeitos"
        ),

    aviso:
        document.getElementById(
            "aviso"
        )

};


/* ===================================================
   INICIALIZAÇÃO
=================================================== */

document.addEventListener(
    "DOMContentLoaded",
    iniciarAplicacao
);


function iniciarAplicacao() {

    configurarEventos();

    carregarHomenagem();

}


/* ===================================================
   EVENTOS
=================================================== */

function configurarEventos() {

    elementos.btnTentarNovamente
        ?.addEventListener(
            "click",
            carregarHomenagem
        );


    elementos.btnIniciarExperiencia
        ?.addEventListener(
            "click",
            iniciarExperiencia
        );


    elementos.btnCompartilhar
        ?.addEventListener(
            "click",
            compartilharHomenagem
        );


    elementos.btnMusica
        ?.addEventListener(
            "click",
            alternarMusica
        );


    elementos.btnFecharFoto
        ?.addEventListener(
            "click",
            fecharVisualizador
        );


    elementos.btnFotoAnterior
        ?.addEventListener(
            "click",
            mostrarFotoAnterior
        );


    elementos.btnProximaFoto
        ?.addEventListener(
            "click",
            mostrarProximaFoto
        );


    elementos.visualizadorFotos
        ?.addEventListener(
            "click",
            function (evento) {

                if (
                    evento.target ===
                    elementos.visualizadorFotos
                ) {

                    fecharVisualizador();

                }

            }
        );


    document.addEventListener(
        "keydown",
        controlarTeclado
    );

}


/* ===================================================
   CARREGAMENTO DA HOMENAGEM
=================================================== */

async function carregarHomenagem() {

    const inicio =
        Date.now();


    mostrarTelaAbertura();

    ocultarEstadoErro();

    ocultarPagina();


    try {

        const id =
            obterIdHomenagem();


        let homenagem;


        if (!id) {

            homenagem =
                HOMENAGEM_TESTE;

        } else {

            homenagem =
                await buscarDadosHomenagem(
                    id
                );

        }


        validarHomenagem(
            homenagem
        );


        estado.homenagem =
            homenagem;


        montarPagina(
            homenagem
        );


        const tempoDecorrido =
            Date.now() - inicio;

        const espera =
            Math.max(
                0,
                CONFIGURACOES
                    .tempoMinimoAbertura -
                tempoDecorrido
            );


        window.setTimeout(
            function () {

                exibirPagina();

            },
            espera
        );

    } catch (erro) {

        console.error(
            "Erro ao carregar homenagem:",
            erro
        );


        const tempoDecorrido =
            Date.now() - inicio;

        const espera =
            Math.max(
                0,
                CONFIGURACOES
                    .tempoMinimoAbertura -
                tempoDecorrido
            );


        window.setTimeout(
            function () {

                mostrarErro(
                    erro.message ||
                    "Não foi possível carregar esta homenagem."
                );

            },
            espera
        );

    }

}


/* ===================================================
   IDENTIFICAÇÃO PELO LINK
=================================================== */

function obterIdHomenagem() {

    const parametros =
        new URLSearchParams(
            window.location.search
        );


    const id =
        parametros.get(
            "id"
        );


    if (!id) {
        return "";
    }


    return id
        .trim()
        .toUpperCase();

}


/* ===================================================
   BUSCAR ARQUIVO JSON

   Exemplo:
   ?id=LKM-ABC123

   O sistema procurará:
   dados/LKM-ABC123.json
=================================================== */

async function buscarDadosHomenagem(id) {

    const caminho =
        CONFIGURACOES
            .arquivoDados(
                id
            );


    const resposta =
        await fetch(
            caminho,
            {
                cache: "no-store"
            }
        );


    if (!resposta.ok) {

        if (
            resposta.status === 404
        ) {

            throw new Error(
                "Esta homenagem não foi encontrada."
            );

        }


        throw new Error(
            "Não foi possível acessar os dados da homenagem."
        );

    }


    const dados =
        await resposta.json();


    return dados;

}


/* ===================================================
   VALIDAÇÃO
=================================================== */

function validarHomenagem(
    homenagem
) {

    if (
        !homenagem ||
        typeof homenagem !== "object"
    ) {

        throw new Error(
            "Os dados da homenagem são inválidos."
        );

    }


    if (
        homenagem.ativa === false
    ) {

        throw new Error(
            "Esta homenagem está temporariamente indisponível."
        );

    }


    if (
        !homenagem.titulo
    ) {

        throw new Error(
            "A homenagem não possui um título."
        );

    }

}


/* ===================================================
   MONTAGEM DA PÁGINA
=================================================== */

function montarPagina(
    homenagem
) {

    aplicarTema(
        homenagem.visual
    );

    aplicarTextos(
        homenagem
    );

    carregarCapa(
        homenagem.midias?.capa
    );

    carregarVideos(
        homenagem.midias?.videos
    );

    carregarGaleria(
        homenagem.midias?.fotos
    );

    carregarMusica(
        homenagem.midias?.musica
    );

    configurarRecursos(
        homenagem.recursos
    );

    aplicarEfeito(
        homenagem.visual?.efeito
    );

    atualizarMetadados(
        homenagem
    );

}


/* ===================================================
   TEXTOS
=================================================== */

function aplicarTextos(
    homenagem
) {

    definirTexto(
        elementos.textoAbertura,
        homenagem.textoAbertura ||
        "Preparando uma homenagem especial..."
    );


    definirTexto(
        elementos.categoriaHomenagem,
        homenagem.categoria
    );


    definirTexto(
        elementos.titulo,
        homenagem.titulo
    );


    definirTexto(
        elementos.subtitulo,
        homenagem.subtitulo
    );


    definirTexto(
        elementos.textoBotaoIniciar,
        homenagem.textoBotaoIniciar ||
        "Abrir homenagem"
    );


    definirTexto(
        elementos.chamadaHomenageado,
        homenagem.chamadaHomenageado ||
        "Esta homenagem é para"
    );


    definirTexto(
        elementos.homenageado,
        homenagem.homenageado
    );


    definirTexto(
        elementos.mensagem,
        homenagem.mensagem
    );


    definirTexto(
        elementos.assinatura,
        homenagem.assinatura
    );


    configurarSecaoMensagem(
        homenagem
    );


    const videos =
        homenagem.secoes?.videos ||
        {};


    definirTexto(
        elementos.subtituloVideos,
        videos.chamada ||
        "Aperte o play"
    );


    definirTexto(
        elementos.tituloVideos,
        videos.titulo ||
        "Uma mensagem em vídeo"
    );


    definirTexto(
        elementos.descricaoVideos,
        videos.descricao
    );


    const galeria =
        homenagem.secoes?.galeria ||
        {};


    definirTexto(
        elementos.subtituloGaleria,
        galeria.chamada ||
        "Memórias especiais"
    );


    definirTexto(
        elementos.tituloGaleria,
        galeria.titulo ||
        "Nossos momentos"
    );


    definirTexto(
        elementos.descricaoGaleria,
        galeria.descricao
    );

}


/* ===================================================
   TEMA VISUAL
=================================================== */

function aplicarTema(
    visual = {}
) {

    const raiz =
        document.documentElement;


    aplicarVariavelCss(
        raiz,
        "--cor-principal",
        visual.corPrincipal
    );


    aplicarVariavelCss(
        raiz,
        "--cor-secundaria",
        visual.corSecundaria
    );


    aplicarVariavelCss(
        raiz,
        "--cor-fundo",
        visual.corFundo
    );


    aplicarVariavelCss(
        raiz,
        "--cor-fundo-claro",
        visual.corFundoClaro
    );


    const corTema =
        visual.corPrincipal ||
        "#7a4b2a";


    const metaTema =
        document.querySelector(
            'meta[name="theme-color"]'
        );


    if (metaTema) {

        metaTema.setAttribute(
            "content",
            corTema
        );

    }

}


/* ===================================================
   FOTO DE CAPA
=================================================== */

function carregarCapa(
    caminho
) {

    if (
        !elementos.fotoCapa
    ) {
        return;
    }


    if (!caminho) {

        elementos.fotoCapa.hidden =
            true;

        elementos.fotoCapa
            .removeAttribute(
                "src"
            );

        return;

    }


    elementos.fotoCapa.src =
        caminho;

    elementos.fotoCapa.hidden =
        false;


    elementos.fotoCapa.onerror =
        function () {

            elementos.fotoCapa.hidden =
                true;

            console.warn(
                "Não foi possível carregar a foto de capa."
            );

        };

}


/* ===================================================
   VÍDEOS
=================================================== */

function carregarVideos(
    videos
) {

    if (
        !elementos.listaVideos ||
        !elementos.secaoVideos
    ) {
        return;
    }


    elementos.listaVideos.innerHTML =
        "";


    const lista =
        normalizarListaMidias(
            videos
        );


    if (
        lista.length === 0
    ) {

        elementos.secaoVideos.hidden =
            true;

        return;

    }


    lista.forEach(
        function (
            item,
            indice
        ) {

            const dados =
                normalizarMidia(
                    item
                );


            if (!dados.url) {
                return;
            }


            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "video-card";


            const video =
                document.createElement(
                    "video"
                );


            video.controls =
                true;

            video.playsInline =
                true;

            video.preload =
                "metadata";

            video.src =
                dados.url;


            if (dados.capa) {

                video.poster =
                    dados.capa;

            }


            video.setAttribute(
                "aria-label",
                dados.titulo ||
                "Vídeo da homenagem " +
                (indice + 1)
            );


            video.addEventListener(
                "play",
                pausarMusicaDuranteVideo
            );


            card.appendChild(
                video
            );


            elementos.listaVideos
                .appendChild(
                    card
                );

        }
    );


    elementos.secaoVideos.hidden =
        elementos.listaVideos
            .children.length === 0;

}


/* ===================================================
   GALERIA
=================================================== */

function carregarGaleria(
    fotos
) {

    if (
        !elementos.galeria ||
        !elementos.secaoGaleria
    ) {
        return;
    }


    elementos.galeria.innerHTML =
        "";

    estado.fotos = [];


    const lista =
        normalizarListaMidias(
            fotos
        );


    lista.forEach(
        function (
            item,
            indice
        ) {

            const dados =
                normalizarMidia(
                    item
                );


            if (!dados.url) {
                return;
            }


            estado.fotos.push(
                dados
            );


            const botao =
                document.createElement(
                    "button"
                );


            botao.type =
                "button";

            botao.className =
                "galeria-item";

            botao.setAttribute(
                "aria-label",
                dados.legenda ||
                "Abrir fotografia " +
                (indice + 1)
            );


            const imagem =
                document.createElement(
                    "img"
                );


            imagem.src =
                dados.url;

            imagem.alt =
                dados.legenda ||
                "Fotografia da homenagem";

            imagem.loading =
                "lazy";

            imagem.decoding =
                "async";


            botao.appendChild(
                imagem
            );


            botao.addEventListener(
                "click",
                function () {

                    abrirVisualizador(
                        estado.fotos
                            .indexOf(
                                dados
                            )
                    );

                }
            );


            elementos.galeria
                .appendChild(
                    botao
                );

        }
    );


    elementos.secaoGaleria.hidden =
        estado.fotos.length === 0;

}


/* ===================================================
   VISUALIZADOR DE FOTOS
=================================================== */

function abrirVisualizador(
    indice
) {

    if (
        estado.fotos.length === 0 ||
        !elementos.visualizadorFotos
    ) {
        return;
    }


    estado.fotoAtual =
        ajustarIndiceFoto(
            indice
        );


    atualizarFotoAmpliada();


    elementos.visualizadorFotos.hidden =
        false;

    document.body.classList.add(
        "visualizador-aberto"
    );


    elementos.btnFecharFoto
        ?.focus();

}


function fecharVisualizador() {

    if (
        !elementos.visualizadorFotos
    ) {
        return;
    }


    elementos.visualizadorFotos.hidden =
        true;

    document.body.classList.remove(
        "visualizador-aberto"
    );

}


function mostrarFotoAnterior() {

    estado.fotoAtual =
        ajustarIndiceFoto(
            estado.fotoAtual - 1
        );


    atualizarFotoAmpliada();

}


function mostrarProximaFoto() {

    estado.fotoAtual =
        ajustarIndiceFoto(
            estado.fotoAtual + 1
        );


    atualizarFotoAmpliada();

}


function atualizarFotoAmpliada() {

    const foto =
        estado.fotos[
            estado.fotoAtual
        ];


    if (
        !foto ||
        !elementos.fotoAmpliada
    ) {
        return;
    }


    elementos.fotoAmpliada.src =
        foto.url;

    elementos.fotoAmpliada.alt =
        foto.legenda ||
        "Fotografia ampliada";


    definirTexto(
        elementos.legendaFoto,
        foto.legenda
    );


    const variasFotos =
        estado.fotos.length > 1;


    if (
        elementos.btnFotoAnterior
    ) {

        elementos.btnFotoAnterior.hidden =
            !variasFotos;

    }


    if (
        elementos.btnProximaFoto
    ) {

        elementos.btnProximaFoto.hidden =
            !variasFotos;

    }

}


function ajustarIndiceFoto(
    indice
) {

    const total =
        estado.fotos.length;


    if (total === 0) {
        return 0;
    }


    if (indice < 0) {

        return total - 1;

    }


    if (indice >= total) {

        return 0;

    }


    return indice;

}


/* ===================================================
   MÚSICA
=================================================== */

function carregarMusica(
    musica
) {

    if (
        !elementos.audioHomenagem ||
        !elementos.btnMusica
    ) {
        return;
    }


    const dados =
        normalizarMidia(
            musica
        );


    if (!dados.url) {

        elementos.btnMusica.hidden =
            true;

        elementos.audioHomenagem
            .removeAttribute(
                "src"
            );

        return;

    }


    elementos.audioHomenagem.src =
        dados.url;

    elementos.audioHomenagem.loop =
        true;

    elementos.audioHomenagem.volume =
        0.45;

    elementos.btnMusica.hidden =
        false;

    atualizarBotaoMusica();

}


/* ===================================================
   CONTROLE DA MÚSICA
=================================================== */

async function alternarMusica() {

    if (
        !elementos.audioHomenagem
    ) {
        return;
    }


    try {

        if (
            elementos.audioHomenagem
                .paused
        ) {

            await elementos
                .audioHomenagem
                .play();

            estado.musicaAtiva =
                true;

            mostrarAviso(
                "Música ativada"
            );

        } else {

            elementos.audioHomenagem
                .pause();

            estado.musicaAtiva =
                false;

            mostrarAviso(
                "Música pausada"
            );

        }


        atualizarBotaoMusica();

    } catch (erro) {

        console.error(
            "Não foi possível iniciar a música:",
            erro
        );


        mostrarAviso(
            "Toque novamente para ativar a música"
        );

    }

}


function pausarMusicaDuranteVideo() {

    if (
        !elementos.audioHomenagem ||
        elementos.audioHomenagem.paused
    ) {
        return;
    }


    elementos.audioHomenagem.pause();

    estado.musicaAtiva =
        false;

    atualizarBotaoMusica();

}


function atualizarBotaoMusica() {

    if (
        !elementos.btnMusica
    ) {
        return;
    }


    elementos.btnMusica
        .classList.toggle(
            "ativa",
            estado.musicaAtiva
        );


    elementos.btnMusica
        .setAttribute(
            "aria-pressed",
            String(
                estado.musicaAtiva
            )
        );


    elementos.btnMusica
        .setAttribute(
            "aria-label",
            estado.musicaAtiva
                ? "Pausar música"
                : "Ativar música"
        );


    if (
        elementos.iconeMusica
    ) {

        elementos.iconeMusica.textContent =
            estado.musicaAtiva
                ? "♫"
                : "♪";

    }

}


/* ===================================================
   BOTÃO DE ABERTURA DA EXPERIÊNCIA
=================================================== */

function iniciarExperiencia() {

    elementos.conteudoHomenagem
        ?.scrollIntoView(
            {
                behavior: "smooth",
                block: "start"
            }
        );


    if (
        elementos.audioHomenagem?.src &&
        elementos.audioHomenagem.paused
    ) {

        alternarMusica();

    }

}


/* ===================================================
   COMPARTILHAMENTO
=================================================== */

async function compartilharHomenagem() {

    const homenagem =
        estado.homenagem ||
        {};


    const dadosCompartilhamento = {

        title:
            homenagem.titulo ||
            "LINKA Momentos",

        text:
            homenagem.subtitulo ||
            "Veja esta homenagem especial.",

        url:
            window.location.href

    };


    try {

        if (
            navigator.share
        ) {

            await navigator.share(
                dadosCompartilhamento
            );

            return;

        }


        await navigator.clipboard
            .writeText(
                window.location.href
            );


        mostrarAviso(
            "Link copiado"
        );

    } catch (erro) {

        if (
            erro?.name ===
            "AbortError"
        ) {
            return;
        }


        console.error(
            "Erro ao compartilhar:",
            erro
        );


        mostrarAviso(
            "Não foi possível compartilhar"
        );

    }

}


/* ===================================================
   EFEITOS VISUAIS
=================================================== */

function aplicarEfeito(
    efeito
) {

    limparEfeitos();


    const tipo =
        String(
            efeito ||
            "nenhum"
        )
            .trim()
            .toLowerCase();


    if (
        tipo === "nenhum" ||
        tipo === "sem efeito"
    ) {
        return;
    }


    gerarParticulas(
        tipo
    );

}


function gerarParticulas(
    tipo
) {

    if (
        !elementos.camadaEfeitos
    ) {
        return;
    }


    const simbolos = {

        coracoes:
            ["♡", "♥"],

        petalas:
            ["❀", "✿"],

        estrelas:
            ["★", "✦", "✧"],

        confetes:
            ["●", "■", "▲"],

        neve:
            ["❄", "❅", "❆"]

    };


    const conjunto =
        simbolos[tipo] ||
        simbolos.estrelas;


    let criadas = 0;


    function criarParticula() {

        if (
            criadas >=
            CONFIGURACOES
                .quantidadeMaximaParticulas
        ) {
            return;
        }


        const particula =
            document.createElement(
                "span"
            );


        particula.className =
            "efeito-particula";


        particula.textContent =
            conjunto[
                Math.floor(
                    Math.random() *
                    conjunto.length
                )
            ];


        particula.style.left =
            Math.random() *
            100 +
            "%";


        particula.style.fontSize =
            12 +
            Math.random() *
            18 +
            "px";


        particula.style.animationDuration =
            7 +
            Math.random() *
            7 +
            "s";


        particula.style.animationDelay =
            Math.random() *
            2 +
            "s";


        elementos.camadaEfeitos
            .appendChild(
                particula
            );


        criadas++;


        particula.addEventListener(
            "animationend",
            function () {

                particula.remove();

                criadas--;

            }
        );


        estado.particulasTimeout =
            window.setTimeout(
                criarParticula,
                900 +
                Math.random() *
                1200
            );

    }


    criarParticula();

}


/* ===================================================
   RECURSOS OPCIONAIS
=================================================== */

function configurarRecursos(
    recursos = {}
) {

    const mostrarCompartilhamento =
        recursos
            .mostrarCompartilhamento !==
        false;


    if (
        elementos.secaoCompartilhar
    ) {

        elementos.secaoCompartilhar.hidden =
            !mostrarCompartilhamento;

    }


    const iniciarComBotao =
        recursos.iniciarComBotao ===
        true;


    if (
        elementos.btnIniciarExperiencia
    ) {

        elementos.btnIniciarExperiencia.hidden =
            !iniciarComBotao;

    }

}


/* ===================================================
   ESTADO DA SEÇÃO DE MENSAGEM
=================================================== */

function configurarSecaoMensagem(
    homenagem
) {

    if (
        !elementos.secaoMensagem
    ) {
        return;
    }


    const possuiConteudo =
        Boolean(
            homenagem.homenageado ||
            homenagem.mensagem
        );


    elementos.secaoMensagem.hidden =
        !possuiConteudo;

}


/* ===================================================
   METADADOS
=================================================== */

function atualizarMetadados(
    homenagem
) {

    document.title =
        homenagem.titulo +
        " | LINKA Momentos";


    const descricao =
        homenagem.subtitulo ||
        homenagem.mensagem ||
        "Uma homenagem especial criada com carinho.";


    const metaDescricao =
        document.querySelector(
            'meta[name="description"]'
        );


    if (
        metaDescricao
    ) {

        metaDescricao.setAttribute(
            "content",
            limitarTexto(
                descricao,
                155
            )
        );

    }

}


/* ===================================================
   TELAS E ESTADOS
=================================================== */

function mostrarTelaAbertura() {

    if (
        !elementos.telaAbertura
    ) {
        return;
    }


    elementos.telaAbertura.hidden =
        false;

    elementos.telaAbertura
        .classList.remove(
            "oculta"
        );

}


function ocultarTelaAbertura() {

    if (
        !elementos.telaAbertura
    ) {
        return;
    }


    elementos.telaAbertura
        .classList.add(
            "oculta"
        );


    window.setTimeout(
        function () {

            elementos.telaAbertura.hidden =
                true;

        },
        750
    );

}


function exibirPagina() {

    ocultarEstadoErro();

    ocultarTelaAbertura();


    if (
        elementos.paginaHomenagem
    ) {

        elementos.paginaHomenagem.hidden =
            false;

    }

}


function ocultarPagina() {

    if (
        elementos.paginaHomenagem
    ) {

        elementos.paginaHomenagem.hidden =
            true;

    }

}


function mostrarErro(
    mensagem
) {

    ocultarTelaAbertura();

    ocultarPagina();


    definirTexto(
        elementos.tituloErro,
        "Homenagem não encontrada"
    );


    definirTexto(
        elementos.mensagemErro,
        mensagem
    );


    if (
        elementos.estadoErro
    ) {

        elementos.estadoErro.hidden =
            false;

    }

}


function ocultarEstadoErro() {

    if (
        elementos.estadoErro
    ) {

        elementos.estadoErro.hidden =
            true;

    }

}


/* ===================================================
   AVISOS
=================================================== */

function mostrarAviso(
    mensagem
) {

    if (
        !elementos.aviso
    ) {
        return;
    }


    window.clearTimeout(
        estado.avisoTimeout
    );


    elementos.aviso.textContent =
        mensagem;

    elementos.aviso.hidden =
        false;


    estado.avisoTimeout =
        window.setTimeout(
            function () {

                elementos.aviso.hidden =
                    true;

            },
            CONFIGURACOES.tempoAviso
        );

}


/* ===================================================
   CONTROLE PELO TECLADO
=================================================== */

function controlarTeclado(
    evento
) {

    if (
        elementos.visualizadorFotos
            ?.hidden !== false
    ) {
        return;
    }


    if (
        evento.key === "Escape"
    ) {

        fecharVisualizador();

    }


    if (
        evento.key === "ArrowLeft"
    ) {

        mostrarFotoAnterior();

    }


    if (
        evento.key === "ArrowRight"
    ) {

        mostrarProximaFoto();

    }

}


/* ===================================================
   UTILITÁRIOS DE MÍDIA
=================================================== */

function normalizarListaMidias(
    valor
) {

    if (
        !valor
    ) {
        return [];
    }


    if (
        Array.isArray(valor)
    ) {
        return valor;
    }


    return [valor];

}


function normalizarMidia(
    item
) {

    if (
        typeof item === "string"
    ) {

        return {

            url: item,

            legenda: "",

            titulo: "",

            capa: ""

        };

    }


    if (
        item &&
        typeof item === "object"
    ) {

        return {

            url:
                item.url ||
                item.src ||
                "",

            legenda:
                item.legenda ||
                item.descricao ||
                "",

            titulo:
                item.titulo ||
                "",

            capa:
                item.capa ||
                item.poster ||
                ""

        };

    }


    return {

        url: "",

        legenda: "",

        titulo: "",

        capa: ""

    };

}


/* ===================================================
   UTILITÁRIOS GERAIS
=================================================== */

function definirTexto(
    elemento,
    texto
) {

    if (!elemento) {
        return;
    }


    const valor =
        texto === null ||
        texto === undefined
            ? ""
            : String(texto).trim();


    elemento.textContent =
        valor;

    elemento.hidden =
        valor.length === 0;

}


function aplicarVariavelCss(
    raiz,
    nome,
    valor
) {

    if (
        !valor
    ) {
        return;
    }


    raiz.style.setProperty(
        nome,
        valor
    );

}


function limitarTexto(
    texto,
    limite
) {

    const valor =
        String(texto)
            .replace(
                /\s+/g,
                " "
            )
            .trim();


    if (
        valor.length <= limite
    ) {

        return valor;

    }


    return valor
        .slice(
            0,
            limite - 1
        )
        .trim() +
        "…";

}


function limparEfeitos() {

    window.clearTimeout(
        estado.particulasTimeout
    );


    if (
        elementos.camadaEfeitos
    ) {

        elementos.camadaEfeitos.innerHTML =
            "";

    }

}
