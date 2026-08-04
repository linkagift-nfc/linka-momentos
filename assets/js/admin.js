/* ===================================================
   LINKA MOMENTOS
   Painel administrativo
=================================================== */


/* ===================================================
   CONFIGURAÇÕES
=================================================== */

const CONFIG_ADMIN = {

    chaveSessao:
        "linka_momentos_sessao",

    chaveHomenagens:
        "linka_momentos_homenagens",

    chaveUsuario:
        "linka_momentos_usuario",

    tempoAviso:
        3000,

    limiteFotos:
        20,

    limiteVideos:
        3,

    tamanhoMaximoFoto:
        12 * 1024 * 1024,

    tamanhoMaximoVideo:
        150 * 1024 * 1024,

    tamanhoMaximoMusica:
        20 * 1024 * 1024

};


/* ===================================================
   ESTADO
=================================================== */

const estadoAdmin = {

    telaAtual:
        "dashboard",

    etapaAtual:
        1,

    editandoId:
        "",

    avisoTimeout:
        null,

    arquivos: {

        capa:
            null,

        fotos:
            [],

        videos:
            [],

        musica:
            null

    },

    urlsTemporarias:
        []

};


/* ===================================================
   ELEMENTOS
=================================================== */

const elementosAdmin = {

    telaLogin:
        document.getElementById(
            "telaLogin"
        ),

    aplicacaoAdmin:
        document.getElementById(
            "aplicacaoAdmin"
        ),

    formLogin:
        document.getElementById(
            "formLogin"
        ),

    email:
        document.getElementById(
            "email"
        ),

    senha:
        document.getElementById(
            "senha"
        ),

    erroEmail:
        document.getElementById(
            "erroEmail"
        ),

    erroSenha:
        document.getElementById(
            "erroSenha"
        ),

    mensagemLogin:
        document.getElementById(
            "mensagemLogin"
        ),

    btnEntrar:
        document.getElementById(
            "btnEntrar"
        ),

    textoBtnEntrar:
        document.getElementById(
            "textoBtnEntrar"
        ),

    carregamentoBtnEntrar:
        document.getElementById(
            "carregamentoBtnEntrar"
        ),

    btnMostrarSenha:
        document.getElementById(
            "btnMostrarSenha"
        ),

    iconeSenha:
        document.getElementById(
            "iconeSenha"
        ),

    btnEsqueciSenha:
        document.getElementById(
            "btnEsqueciSenha"
        ),

    btnAbrirAtivacao:
        document.getElementById(
            "btnAbrirAtivacao"
        ),

    modalAtivacao:
        document.getElementById(
            "modalAtivacao"
        ),

    btnFecharAtivacao:
        document.getElementById(
            "btnFecharAtivacao"
        ),

    formAtivacao:
        document.getElementById(
            "formAtivacao"
        ),

    codigoAtivacao:
        document.getElementById(
            "codigoAtivacao"
        ),

    btnAjuda:
        document.getElementById(
            "btnAjuda"
        ),

    btnAjudaPainel:
        document.getElementById(
            "btnAjudaPainel"
        ),

    modalAjuda:
        document.getElementById(
            "modalAjuda"
        ),

    btnFecharAjuda:
        document.getElementById(
            "btnFecharAjuda"
        ),

    btnAtivarPelaAjuda:
        document.getElementById(
            "btnAtivarPelaAjuda"
        ),

    menuLateral:
        document.getElementById(
            "menuLateral"
        ),

    btnAbrirMenu:
        document.getElementById(
            "btnAbrirMenu"
        ),

    btnFecharMenu:
        document.getElementById(
            "btnFecharMenu"
        ),

    fundoMenu:
        document.getElementById(
            "fundoMenu"
        ),

    tituloTela:
        document.getElementById(
            "tituloTela"
        ),

    btnSair:
        document.getElementById(
            "btnSair"
        ),

    nomeUsuario:
        document.getElementById(
            "nomeUsuario"
        ),

    emailUsuario:
        document.getElementById(
            "emailUsuario"
        ),

    btnVisualizarPublica:
        document.getElementById(
            "btnVisualizarPublica"
        ),

    totalHomenagens:
        document.getElementById(
            "totalHomenagens"
        ),

    totalPublicadas:
        document.getElementById(
            "totalPublicadas"
        ),

    totalMidias:
        document.getElementById(
            "totalMidias"
        ),

    totalVisualizacoes:
        document.getElementById(
            "totalVisualizacoes"
        ),

    listaRecentes:
        document.getElementById(
            "listaRecentes"
        ),

    listaTodasHomenagens:
        document.getElementById(
            "listaTodasHomenagens"
        ),

    buscaHomenagens:
        document.getElementById(
            "buscaHomenagens"
        ),

    filtroStatus:
        document.getElementById(
            "filtroStatus"
        ),

    formHomenagem:
        document.getElementById(
            "formHomenagem"
        ),

    btnEtapaAnterior:
        document.getElementById(
            "btnEtapaAnterior"
        ),

    btnProximaEtapa:
        document.getElementById(
            "btnProximaEtapa"
        ),

    btnPublicarHomenagem:
        document.getElementById(
            "btnPublicarHomenagem"
        ),

    tituloHomenagem:
        document.getElementById(
            "tituloHomenagem"
        ),

    nomeHomenageado:
        document.getElementById(
            "nomeHomenageado"
        ),

    subtituloHomenagem:
        document.getElementById(
            "subtituloHomenagem"
        ),

    mensagemHomenagem:
        document.getElementById(
            "mensagemHomenagem"
        ),

    assinaturaHomenagem:
        document.getElementById(
            "assinaturaHomenagem"
        ),

    corPrincipal:
        document.getElementById(
            "corPrincipal"
        ),

    corSecundaria:
        document.getElementById(
            "corSecundaria"
        ),

    efeitoVisual:
        document.getElementById(
            "efeitoVisual"
        ),

    confirmarPublicacao:
        document.getElementById(
            "confirmarPublicacao"
        ),

    inputCapa:
        document.getElementById(
            "inputCapa"
        ),

    inputFotos:
        document.getElementById(
            "inputFotos"
        ),

    inputVideos:
        document.getElementById(
            "inputVideos"
        ),

    inputMusica:
        document.getElementById(
            "inputMusica"
        ),

    previewCapa:
        document.getElementById(
            "previewCapa"
        ),

    previewFotos:
        document.getElementById(
            "previewFotos"
        ),

    previewVideos:
        document.getElementById(
            "previewVideos"
        ),

    previewMusica:
        document.getElementById(
            "previewMusica"
        ),

    iframePreview:
        document.getElementById(
            "iframePreview"
        ),

    btnExpandirPreview:
        document.getElementById(
            "btnExpandirPreview"
        ),

    formConta:
        document.getElementById(
            "formConta"
        ),

    nomeConta:
        document.getElementById(
            "nomeConta"
        ),

    emailConta:
        document.getElementById(
            "emailConta"
        ),

    novaSenhaConta:
        document.getElementById(
            "novaSenhaConta"
        ),

    confirmarSenhaConta:
        document.getElementById(
            "confirmarSenhaConta"
        ),

    avisoAdmin:
        document.getElementById(
            "avisoAdmin"
        )

};


/* ===================================================
   INICIALIZAÇÃO
=================================================== */

document.addEventListener(
    "DOMContentLoaded",
    iniciarAdmin
);


function iniciarAdmin() {

    configurarEventos();

    verificarSessao();

    atualizarInterfaceUsuario();

    atualizarDashboard();

    configurarPreview();

}


/* ===================================================
   EVENTOS
=================================================== */

function configurarEventos() {

    elementosAdmin.formLogin
        ?.addEventListener(
            "submit",
            processarLogin
        );


    elementosAdmin.btnMostrarSenha
        ?.addEventListener(
            "click",
            alternarSenha
        );


    elementosAdmin.btnEsqueciSenha
        ?.addEventListener(
            "click",
            recuperarSenha
        );


    elementosAdmin.btnAbrirAtivacao
        ?.addEventListener(
            "click",
            abrirModalAtivacao
        );


    elementosAdmin.btnFecharAtivacao
        ?.addEventListener(
            "click",
            fecharModalAtivacao
        );


    elementosAdmin.formAtivacao
        ?.addEventListener(
            "submit",
            processarAtivacao
        );


    elementosAdmin.btnAjuda
        ?.addEventListener(
            "click",
            abrirModalAjuda
        );


    elementosAdmin.btnAjudaPainel
        ?.addEventListener(
            "click",
            abrirModalAjuda
        );


    elementosAdmin.btnFecharAjuda
        ?.addEventListener(
            "click",
            fecharModalAjuda
        );


    elementosAdmin.btnAtivarPelaAjuda
        ?.addEventListener(
            "click",
            function () {

                fecharModalAjuda();

                abrirModalAtivacao();

            }
        );


    elementosAdmin.modalAtivacao
        ?.addEventListener(
            "click",
            fecharModalPeloFundo
        );


    elementosAdmin.modalAjuda
        ?.addEventListener(
            "click",
            fecharModalPeloFundo
        );


    elementosAdmin.btnAbrirMenu
        ?.addEventListener(
            "click",
            abrirMenu
        );


    elementosAdmin.btnFecharMenu
        ?.addEventListener(
            "click",
            fecharMenu
        );


    elementosAdmin.fundoMenu
        ?.addEventListener(
            "click",
            fecharMenu
        );


    elementosAdmin.btnSair
        ?.addEventListener(
            "click",
            sairDaConta
        );


    elementosAdmin.btnVisualizarPublica
        ?.addEventListener(
            "click",
            visualizarPaginaPublica
        );


    document
        .querySelectorAll(
            "[data-tela]"
        )
        .forEach(
            function (botao) {

                botao.addEventListener(
                    "click",
                    function () {

                        abrirTela(
                            botao.dataset.tela
                        );

                    }
                );

            }
        );


    document
        .querySelectorAll(
            "[data-abrir-tela]"
        )
        .forEach(
            function (botao) {

                botao.addEventListener(
                    "click",
                    function () {

                        abrirTela(
                            botao.dataset
                                .abrirTela
                        );

                    }
                );

            }
        );


    document
        .querySelectorAll(
            ".etapa-editor"
        )
        .forEach(
            function (botao) {

                botao.addEventListener(
                    "click",
                    function () {

                        const etapa =
                            Number(
                                botao.dataset
                                    .etapa
                            );

                        irParaEtapa(
                            etapa
                        );

                    }
                );

            }
        );


    elementosAdmin.btnEtapaAnterior
        ?.addEventListener(
            "click",
            voltarEtapa
        );


    elementosAdmin.btnProximaEtapa
        ?.addEventListener(
            "click",
            avancarEtapa
        );


    elementosAdmin.formHomenagem
        ?.addEventListener(
            "submit",
            publicarHomenagem
        );


    elementosAdmin.inputCapa
        ?.addEventListener(
            "change",
            selecionarCapa
        );


    elementosAdmin.inputFotos
        ?.addEventListener(
            "change",
            selecionarFotos
        );


    elementosAdmin.inputVideos
        ?.addEventListener(
            "change",
            selecionarVideos
        );


    elementosAdmin.inputMusica
        ?.addEventListener(
            "change",
            selecionarMusica
        );


    elementosAdmin.buscaHomenagens
        ?.addEventListener(
            "input",
            listarHomenagens
        );


    elementosAdmin.filtroStatus
        ?.addEventListener(
            "change",
            listarHomenagens
        );


    elementosAdmin.formConta
        ?.addEventListener(
            "submit",
            salvarConta
        );


    elementosAdmin.btnExpandirPreview
        ?.addEventListener(
            "click",
            expandirPreview
        );


    [
        elementosAdmin.tituloHomenagem,
        elementosAdmin.nomeHomenageado,
        elementosAdmin.subtituloHomenagem,
        elementosAdmin.mensagemHomenagem,
        elementosAdmin.assinaturaHomenagem,
        elementosAdmin.corPrincipal,
        elementosAdmin.corSecundaria,
        elementosAdmin.efeitoVisual
    ]
        .forEach(
            function (campo) {

                campo?.addEventListener(
                    "input",
                    atualizarPreview
                );

                campo?.addEventListener(
                    "change",
                    atualizarPreview
                );

            }
        );


    document.addEventListener(
        "keydown",
        controlarTeclado
    );

}


/* ===================================================
   SESSÃO
=================================================== */

function verificarSessao() {

    const sessao =
        localStorage.getItem(
            CONFIG_ADMIN.chaveSessao
        );


    if (
        sessao === "ativa"
    ) {

        mostrarPainel();

        return;

    }


    mostrarLogin();

}


function mostrarLogin() {

    if (
        elementosAdmin.telaLogin
    ) {

        elementosAdmin.telaLogin.hidden =
            false;

    }


    if (
        elementosAdmin.aplicacaoAdmin
    ) {

        elementosAdmin.aplicacaoAdmin.hidden =
            true;

    }

}


function mostrarPainel() {

    if (
        elementosAdmin.telaLogin
    ) {

        elementosAdmin.telaLogin.hidden =
            true;

    }


    if (
        elementosAdmin.aplicacaoAdmin
    ) {

        elementosAdmin.aplicacaoAdmin.hidden =
            false;

    }


    abrirTela(
        "dashboard"
    );

}


/* ===================================================
   LOGIN
=================================================== */

async function processarLogin(
    evento
) {

    evento.preventDefault();


    limparMensagemLogin();


    const emailValido =
        validarEmailLogin();


    const senhaValida =
        validarSenhaLogin();


    if (
        !emailValido ||
        !senhaValida
    ) {

        return;

    }


    alterarCarregamentoLogin(
        true
    );


    await aguardar(
        700
    );


    const usuario = {

        nome:
            obterNomePeloEmail(
                elementosAdmin.email.value
            ),

        email:
            elementosAdmin.email.value
                .trim()
                .toLowerCase()

    };


    salvarUsuario(
        usuario
    );


    localStorage.setItem(
        CONFIG_ADMIN.chaveSessao,
        "ativa"
    );


    alterarCarregamentoLogin(
        false
    );


    atualizarInterfaceUsuario();

    mostrarPainel();

    mostrarAviso(
        "Acesso realizado com sucesso.",
        "sucesso"
    );

}


function validarEmailLogin() {

    const valor =
        elementosAdmin.email
            ?.value
            .trim() ||
        "";


    const formato =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!valor) {

        mostrarErroCampo(
            elementosAdmin.email,
            elementosAdmin.erroEmail,
            "Digite seu e-mail."
        );

        return false;

    }


    if (
        !formato.test(
            valor
        )
    ) {

        mostrarErroCampo(
            elementosAdmin.email,
            elementosAdmin.erroEmail,
            "Digite um e-mail válido."
        );

        return false;

    }


    limparErroCampo(
        elementosAdmin.email,
        elementosAdmin.erroEmail
    );


    return true;

}


function validarSenhaLogin() {

    const valor =
        elementosAdmin.senha
            ?.value ||
        "";


    if (!valor) {

        mostrarErroCampo(
            elementosAdmin.senha,
            elementosAdmin.erroSenha,
            "Digite sua senha."
        );

        return false;

    }


    if (
        valor.length < 6
    ) {

        mostrarErroCampo(
            elementosAdmin.senha,
            elementosAdmin.erroSenha,
            "A senha deve ter pelo menos 6 caracteres."
        );

        return false;

    }


    limparErroCampo(
        elementosAdmin.senha,
        elementosAdmin.erroSenha
    );


    return true;

}


function alternarSenha() {

    const campo =
        elementosAdmin.senha;


    if (!campo) {
        return;
    }


    const visivel =
        campo.type === "text";


    campo.type =
        visivel
            ? "password"
            : "text";


    if (
        elementosAdmin.iconeSenha
    ) {

        elementosAdmin
            .iconeSenha
            .textContent =
            visivel
                ? "Mostrar"
                : "Ocultar";

    }


    elementosAdmin.btnMostrarSenha
        ?.setAttribute(
            "aria-pressed",
            String(!visivel)
        );

}


function recuperarSenha() {

    mostrarMensagemLogin(
        "A recuperação por e-mail será ativada quando conectarmos o Apps Script.",
        "sucesso"
    );

}


/* ===================================================
   ATIVAÇÃO
=================================================== */

function abrirModalAtivacao() {

    abrirModal(
        elementosAdmin.modalAtivacao
    );


    elementosAdmin.codigoAtivacao
        ?.focus();

}


function fecharModalAtivacao() {

    fecharModal(
        elementosAdmin.modalAtivacao
    );

}


function processarAtivacao(
    evento
) {

    evento.preventDefault();


    const codigo =
        String(
            elementosAdmin.codigoAtivacao
                ?.value ||
            ""
        )
            .trim()
            .toUpperCase();


    if (
        codigo.length < 8
    ) {

        mostrarAviso(
            "Digite um código de ativação válido.",
            "erro"
        );

        return;

    }


    elementosAdmin.codigoAtivacao.value =
        codigo;


    fecharModalAtivacao();


    mostrarAviso(
        "Código reconhecido. O cadastro completo será conectado ao banco.",
        "sucesso"
    );

}


/* ===================================================
   NAVEGAÇÃO
=================================================== */

function abrirTela(
    nomeTela
) {

    if (!nomeTela) {
        return;
    }


    estadoAdmin.telaAtual =
        nomeTela;


    document
        .querySelectorAll(
            ".tela-admin"
        )
        .forEach(
            function (tela) {

                tela.hidden =
                    tela.id !==
                    "tela-" + nomeTela;

                tela.classList.toggle(
                    "ativa",
                    !tela.hidden
                );

            }
        );


    document
        .querySelectorAll(
            ".menu-item[data-tela]"
        )
        .forEach(
            function (item) {

                item.classList.toggle(
                    "ativo",
                    item.dataset.tela ===
                    nomeTela
                );

            }
        );


    atualizarTituloTela(
        nomeTela
    );


    if (
        nomeTela === "dashboard"
    ) {

        atualizarDashboard();

    }


    if (
        nomeTela === "homenagens"
    ) {

        listarHomenagens();

    }


    if (
        nomeTela === "nova" &&
        !estadoAdmin.editandoId
    ) {

        prepararNovaHomenagem();

    }


    fecharMenu();


    window.scrollTo(
        {
            top: 0,
            behavior: "smooth"
        }
    );

}


function atualizarTituloTela(
    tela
) {

    const titulos = {

        dashboard:
            "Visão geral",

        homenagens:
            "Minhas homenagens",

        nova:
            estadoAdmin.editandoId
                ? "Editar homenagem"
                : "Nova homenagem",

        midias:
            "Fotos e vídeos",

        temas:
            "Temas",

        conta:
            "Minha conta"

    };


    if (
        elementosAdmin.tituloTela
    ) {

        elementosAdmin.tituloTela
            .textContent =
            titulos[tela] ||
            "Painel";

    }

}


/* ===================================================
   MENU MOBILE
=================================================== */

function abrirMenu() {

    elementosAdmin.menuLateral
        ?.classList
        .add(
            "aberto"
        );


    if (
        elementosAdmin.fundoMenu
    ) {

        elementosAdmin.fundoMenu.hidden =
            false;

    }

}


function fecharMenu() {

    elementosAdmin.menuLateral
        ?.classList
        .remove(
            "aberto"
        );


    if (
        elementosAdmin.fundoMenu
    ) {

        elementosAdmin.fundoMenu.hidden =
            true;

    }

}


/* ===================================================
   WIZARD
=================================================== */

function irParaEtapa(
    etapa
) {

    if (
        etapa < 1 ||
        etapa > 5
    ) {

        return;

    }


    estadoAdmin.etapaAtual =
        etapa;


    document
        .querySelectorAll(
            ".conteudo-etapa"
        )
        .forEach(
            function (conteudo) {

                const numero =
                    Number(
                        conteudo.dataset
                            .conteudoEtapa
                    );


                conteudo.hidden =
                    numero !== etapa;

                conteudo.classList.toggle(
                    "ativo",
                    numero === etapa
                );

            }
        );


    document
        .querySelectorAll(
            ".etapa-editor"
        )
        .forEach(
            function (botao) {

                const numero =
                    Number(
                        botao.dataset
                            .etapa
                    );


                botao.classList.toggle(
                    "ativa",
                    numero === etapa
                );


                botao.classList.toggle(
                    "concluida",
                    numero < etapa
                );

            }
        );


    atualizarBotoesEtapa();

}


function avancarEtapa() {

    if (
        !validarEtapaAtual()
    ) {

        return;

    }


    if (
        estadoAdmin.etapaAtual < 5
    ) {

        irParaEtapa(
            estadoAdmin.etapaAtual + 1
        );

    }

}


function voltarEtapa() {

    if (
        estadoAdmin.etapaAtual > 1
    ) {

        irParaEtapa(
            estadoAdmin.etapaAtual - 1
        );

    }

}


function atualizarBotoesEtapa() {

    const etapa =
        estadoAdmin.etapaAtual;


    if (
        elementosAdmin.btnEtapaAnterior
    ) {

        elementosAdmin
            .btnEtapaAnterior
            .hidden =
            etapa === 1;

    }


    if (
        elementosAdmin.btnProximaEtapa
    ) {

        elementosAdmin
            .btnProximaEtapa
            .hidden =
            etapa === 5;

    }


    if (
        elementosAdmin.btnPublicarHomenagem
    ) {

        elementosAdmin
            .btnPublicarHomenagem
            .hidden =
            etapa !== 5;

    }

}


function validarEtapaAtual() {

    if (
        estadoAdmin.etapaAtual === 1
    ) {

        const ocasiao =
            obterOcasiaoSelecionada();


        if (!ocasiao) {

            mostrarAviso(
                "Escolha uma ocasião para continuar.",
                "erro"
            );

            return false;

        }

    }


    if (
        estadoAdmin.etapaAtual === 2
    ) {

        const titulo =
            elementosAdmin.tituloHomenagem
                ?.value
                .trim() ||
            "";


        const homenageado =
            elementosAdmin.nomeHomenageado
                ?.value
                .trim() ||
            "";


        const mensagem =
            elementosAdmin.mensagemHomenagem
                ?.value
                .trim() ||
            "";


        if (!titulo) {

            marcarCampoInvalido(
                elementosAdmin
                    .tituloHomenagem
            );

            mostrarAviso(
                "Digite o título da homenagem.",
                "erro"
            );

            return false;

        }


        if (!homenageado) {

            marcarCampoInvalido(
                elementosAdmin
                    .nomeHomenageado
            );

            mostrarAviso(
                "Digite o nome do homenageado.",
                "erro"
            );

            return false;

        }


        if (!mensagem) {

            marcarCampoInvalido(
                elementosAdmin
                    .mensagemHomenagem
            );

            mostrarAviso(
                "Escreva uma mensagem para a homenagem.",
                "erro"
            );

            return false;

        }

    }


    return true;

}


/* ===================================================
   HOMENAGENS
=================================================== */

function prepararNovaHomenagem() {

    limparFormularioHomenagem();

    estadoAdmin.editandoId =
        "";

    irParaEtapa(
        1
    );

    atualizarTituloTela(
        "nova"
    );

}


function publicarHomenagem(
    evento
) {

    evento.preventDefault();


    if (
        !elementosAdmin.confirmarPublicacao
            ?.checked
    ) {

        mostrarAviso(
            "Confirme que revisou as informações.",
            "erro"
        );

        return;

    }


    const dados =
        coletarDadosHomenagem();


    if (
        estadoAdmin.editandoId
    ) {

        dados.id =
            estadoAdmin.editandoId;

        atualizarHomenagemSalva(
            dados
        );

        mostrarAviso(
            "Homenagem atualizada com sucesso.",
            "sucesso"
        );

    } else {

        dados.id =
            gerarIdHomenagem();

        salvarNovaHomenagem(
            dados
        );

        mostrarAviso(
            "Homenagem publicada com sucesso.",
            "sucesso"
        );

    }


    estadoAdmin.editandoId =
        "";


    atualizarDashboard();

    listarHomenagens();

    abrirTela(
        "homenagens"
    );

}


function coletarDadosHomenagem() {

    return {

        id:
            "",

        ocasiao:
            obterOcasiaoSelecionada(),

        titulo:
            elementosAdmin.tituloHomenagem
                ?.value
                .trim() ||
            "",

        homenageado:
            elementosAdmin.nomeHomenageado
                ?.value
                .trim() ||
            "",

        subtitulo:
            elementosAdmin.subtituloHomenagem
                ?.value
                .trim() ||
            "",

        mensagem:
            elementosAdmin.mensagemHomenagem
                ?.value
                .trim() ||
            "",

        assinatura:
            elementosAdmin.assinaturaHomenagem
                ?.value
                .trim() ||
            "",

        corPrincipal:
            elementosAdmin.corPrincipal
                ?.value ||
            "#7a4b2a",

        corSecundaria:
            elementosAdmin.corSecundaria
                ?.value ||
            "#d6a86a",

        efeito:
            elementosAdmin.efeitoVisual
                ?.value ||
            "nenhum",

        status:
            "publicada",

        criadaEm:
            new Date()
                .toISOString(),

        atualizadaEm:
            new Date()
                .toISOString(),

        midias: {

            capa:
                obterResumoArquivo(
                    estadoAdmin.arquivos.capa
                ),

            fotos:
                estadoAdmin.arquivos.fotos
                    .map(
                        obterResumoArquivo
                    ),

            videos:
                estadoAdmin.arquivos.videos
                    .map(
                        obterResumoArquivo
                    ),

            musica:
                obterResumoArquivo(
                    estadoAdmin.arquivos.musica
                )

        },

        visualizacoes:
            0

    };

}


function salvarNovaHomenagem(
    homenagem
) {

    const lista =
        obterHomenagensSalvas();


    lista.unshift(
        homenagem
    );


    salvarListaHomenagens(
        lista
    );

}


function atualizarHomenagemSalva(
    homenagemAtualizada
) {

    const lista =
        obterHomenagensSalvas();


    const indice =
        lista.findIndex(
            function (item) {

                return item.id ===
                    homenagemAtualizada.id;

            }
        );


    if (
        indice === -1
    ) {

        return;

    }


    homenagemAtualizada.criadaEm =
        lista[indice].criadaEm;


    homenagemAtualizada.visualizacoes =
        lista[indice]
            .visualizacoes ||
        0;


    lista[indice] =
        homenagemAtualizada;


    salvarListaHomenagens(
        lista
    );

}


function obterHomenagensSalvas() {

    try {

        const dados =
            localStorage.getItem(
                CONFIG_ADMIN
                    .chaveHomenagens
            );


        if (!dados) {
            return [];
        }


        const lista =
            JSON.parse(
                dados
            );


        return Array.isArray(lista)
            ? lista
            : [];

    } catch (erro) {

        console.error(
            "Erro ao ler homenagens:",
            erro
        );


        return [];

    }

}


function salvarListaHomenagens(
    lista
) {

    localStorage.setItem(
        CONFIG_ADMIN.chaveHomenagens,
        JSON.stringify(lista)
    );

}


/* ===================================================
   LISTAGEM
=================================================== */

function listarHomenagens() {

    const lista =
        obterHomenagensSalvas();


    const busca =
        elementosAdmin.buscaHomenagens
            ?.value
            .trim()
            .toLowerCase() ||
        "";


    const status =
        elementosAdmin.filtroStatus
            ?.value ||
        "todas";


    const filtradas =
        lista.filter(
            function (item) {

                const correspondeBusca =
                    !busca ||
                    item.titulo
                        .toLowerCase()
                        .includes(busca) ||
                    item.homenageado
                        .toLowerCase()
                        .includes(busca) ||
                    item.id
                        .toLowerCase()
                        .includes(busca);


                const correspondeStatus =
                    status === "todas" ||
                    item.status === status;


                return (
                    correspondeBusca &&
                    correspondeStatus
                );

            }
        );


    renderizarListaHomenagens(
        elementosAdmin
            .listaTodasHomenagens,
        filtradas
    );

}


function renderizarListaHomenagens(
    container,
    lista,
    limite
) {

    if (!container) {
        return;
    }


    container.innerHTML =
        "";


    const itens =
        typeof limite === "number"
            ? lista.slice(0, limite)
            : lista;


    if (
        itens.length === 0
    ) {

        container.innerHTML = `
            <div class="estado-vazio">

                <span>
                    <i class="bi bi-heart"></i>
                </span>

                <h4>
                    Nenhuma homenagem encontrada
                </h4>

                <p>
                    As homenagens criadas aparecerão aqui.
                </p>

            </div>
        `;

        return;

    }


    itens.forEach(
        function (homenagem) {

            const card =
                criarCardHomenagem(
                    homenagem
                );


            container.appendChild(
                card
            );

        }
    );

}


function criarCardHomenagem(
    homenagem
) {

    const article =
        document.createElement(
            "article"
        );


    article.className =
        "card-homenagem";


    article.style.background =
        "#ffffff";

    article.style.border =
        "1px solid rgba(93, 62, 41, 0.13)";

    article.style.borderRadius =
        "20px";

    article.style.padding =
        "20px";

    article.style.boxShadow =
        "0 12px 35px rgba(57, 37, 24, 0.08)";


    const statusTexto =
        homenagem.status ===
        "publicada"
            ? "Publicada"
            : "Rascunho";


    article.innerHTML = `

        <div style="
            height: 8px;
            margin: -20px -20px 18px;
            background: linear-gradient(
                90deg,
                ${escaparHtml(homenagem.corPrincipal)},
                ${escaparHtml(homenagem.corSecundaria)}
            );
            border-radius: 20px 20px 0 0;
        "></div>

        <small style="
            display: inline-block;
            margin-bottom: 10px;
            font-weight: 700;
            color: ${escaparHtml(homenagem.corPrincipal)};
        ">
            ${escaparHtml(statusTexto)}
        </small>

        <h3 style="
            margin-bottom: 7px;
            font-family: 'Playfair Display', Georgia, serif;
            font-size: 24px;
            color: #7a4b2a;
        ">
            ${escaparHtml(homenagem.titulo)}
        </h3>

        <p style="
            margin-bottom: 8px;
            font-size: 13px;
            color: #786c63;
        ">
            Para ${escaparHtml(homenagem.homenageado)}
        </p>

        <small style="
            display: block;
            margin-bottom: 18px;
            color: #8d8179;
        ">
            ${escaparHtml(homenagem.id)}
        </small>

        <div style="
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        ">

            <button
                type="button"
                class="botao-secundario"
                data-acao="editar"
                data-id="${escaparHtml(homenagem.id)}">

                <i class="bi bi-pencil"></i>

                Editar

            </button>

            <button
                type="button"
                class="botao-secundario"
                data-acao="visualizar"
                data-id="${escaparHtml(homenagem.id)}">

                <i class="bi bi-eye"></i>

                Visualizar

            </button>

            <button
                type="button"
                class="botao-secundario"
                data-acao="status"
                data-id="${escaparHtml(homenagem.id)}">

                <i class="bi bi-toggle-on"></i>

                ${
                    homenagem.status ===
                    "publicada"
                        ? "Despublicar"
                        : "Publicar"
                }

            </button>

            <button
                type="button"
                class="botao-secundario"
                data-acao="excluir"
                data-id="${escaparHtml(homenagem.id)}">

                <i class="bi bi-trash"></i>

                Excluir

            </button>

        </div>
    `;


    article
        .querySelectorAll(
            "[data-acao]"
        )
        .forEach(
            function (botao) {

                botao.addEventListener(
                    "click",
                    function () {

                        executarAcaoHomenagem(
                            botao.dataset.acao,
                            botao.dataset.id
                        );

                    }
                );

            }
        );


    return article;

}


/* ===================================================
   AÇÕES DA HOMENAGEM
=================================================== */

function executarAcaoHomenagem(
    acao,
    id
) {

    if (
        acao === "editar"
    ) {

        editarHomenagem(
            id
        );

        return;

    }


    if (
        acao === "visualizar"
    ) {

        visualizarHomenagem(
            id
        );

        return;

    }


    if (
        acao === "status"
    ) {

        alternarStatusHomenagem(
            id
        );

        return;

    }


    if (
        acao === "excluir"
    ) {

        excluirHomenagem(
            id
        );

    }

}


function editarHomenagem(
    id
) {

    const homenagem =
        obterHomenagensSalvas()
            .find(
                function (item) {

                    return item.id === id;

                }
            );


    if (!homenagem) {

        mostrarAviso(
            "Homenagem não encontrada.",
            "erro"
        );

        return;

    }


    estadoAdmin.editandoId =
        id;


    preencherFormularioHomenagem(
        homenagem
    );


    abrirTela(
        "nova"
    );


    irParaEtapa(
        1
    );


    atualizarTituloTela(
        "nova"
    );


    mostrarAviso(
        "Edite os dados e publique novamente.",
        "sucesso"
    );

}


function visualizarHomenagem(
    id
) {

    const url =
        "../index.html?id=" +
        encodeURIComponent(id);


    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );

}


function alternarStatusHomenagem(
    id
) {

    const lista =
        obterHomenagensSalvas();


    const homenagem =
        lista.find(
            function (item) {

                return item.id === id;

            }
        );


    if (!homenagem) {
        return;
    }


    homenagem.status =
        homenagem.status ===
        "publicada"
            ? "rascunho"
            : "publicada";


    homenagem.atualizadaEm =
        new Date()
            .toISOString();


    salvarListaHomenagens(
        lista
    );


    atualizarDashboard();

    listarHomenagens();


    mostrarAviso(
        homenagem.status ===
        "publicada"
            ? "Homenagem publicada."
            : "Homenagem despublicada.",
        "sucesso"
    );

}


function excluirHomenagem(
    id
) {

    const confirmar =
        window.confirm(
            "Deseja realmente excluir esta homenagem?"
        );


    if (!confirmar) {
        return;
    }


    const lista =
        obterHomenagensSalvas()
            .filter(
                function (item) {

                    return item.id !== id;

                }
            );


    salvarListaHomenagens(
        lista
    );


    atualizarDashboard();

    listarHomenagens();


    mostrarAviso(
        "Homenagem excluída.",
        "sucesso"
    );

}


/* ===================================================
   DASHBOARD
=================================================== */

function atualizarDashboard() {

    const lista =
        obterHomenagensSalvas();


    const publicadas =
        lista.filter(
            function (item) {

                return item.status ===
                    "publicada";

            }
        );


    const totalMidias =
        lista.reduce(
            function (
                total,
                item
            ) {

                const midias =
                    item.midias ||
                    {};


                return total +
                    (
                        midias.capa
                            ? 1
                            : 0
                    ) +
                    (
                        Array.isArray(
                            midias.fotos
                        )
                            ? midias.fotos.length
                            : 0
                    ) +
                    (
                        Array.isArray(
                            midias.videos
                        )
                            ? midias.videos.length
                            : 0
                    ) +
                    (
                        midias.musica
                            ? 1
                            : 0
                    );

            },
            0
        );


    const visualizacoes =
        lista.reduce(
            function (
                total,
                item
            ) {

                return total +
                    Number(
                        item.visualizacoes ||
                        0
                    );

            },
            0
        );


    definirNumero(
        elementosAdmin.totalHomenagens,
        lista.length
    );


    definirNumero(
        elementosAdmin.totalPublicadas,
        publicadas.length
    );


    definirNumero(
        elementosAdmin.totalMidias,
        totalMidias
    );


    definirNumero(
        elementosAdmin.totalVisualizacoes,
        visualizacoes
    );


    renderizarListaHomenagens(
        elementosAdmin.listaRecentes,
        lista,
        3
    );

}


/* ===================================================
   UPLOADS E PRÉVIAS
=================================================== */

function selecionarCapa(
    evento
) {

    const arquivo =
        evento.target
            .files?.[0];


    if (!arquivo) {
        return;
    }


    if (
        !validarArquivoImagem(
            arquivo
        )
    ) {
        return;
    }


    estadoAdmin.arquivos.capa =
        arquivo;


    renderizarPreviewCapa();

    atualizarPreview();

}


function selecionarFotos(
    evento
) {

    const arquivos =
        Array.from(
            evento.target.files ||
            []
        );


    arquivos.forEach(
        function (arquivo) {

            if (
                estadoAdmin.arquivos
                    .fotos.length >=
                CONFIG_ADMIN.limiteFotos
            ) {

                return;

            }


            if (
                validarArquivoImagem(
                    arquivo,
                    false
                )
            ) {

                estadoAdmin.arquivos
                    .fotos
                    .push(
                        arquivo
                    );

            }

        }
    );


    if (
        arquivos.length >
        CONFIG_ADMIN.limiteFotos
    ) {

        mostrarAviso(
            "O limite é de 20 fotos.",
            "erro"
        );

    }


    renderizarPreviewFotos();

    atualizarPreview();


    evento.target.value =
        "";

}


function selecionarVideos(
    evento
) {

    const arquivos =
        Array.from(
            evento.target.files ||
            []
        );


    arquivos.forEach(
        function (arquivo) {

            if (
                estadoAdmin.arquivos
                    .videos.length >=
                CONFIG_ADMIN.limiteVideos
            ) {

                return;

            }


            if (
                validarArquivoVideo(
                    arquivo
                )
            ) {

                estadoAdmin.arquivos
                    .videos
                    .push(
                        arquivo
                    );

            }

        }
    );


    renderizarPreviewVideos();


    evento.target.value =
        "";

}


function selecionarMusica(
    evento
) {

    const arquivo =
        evento.target
            .files?.[0];


    if (!arquivo) {
        return;
    }


    if (
        !arquivo.type
            .startsWith(
                "audio/"
            )
    ) {

        mostrarAviso(
            "Selecione um arquivo de áudio.",
            "erro"
        );

        return;

    }


    if (
        arquivo.size >
        CONFIG_ADMIN
            .tamanhoMaximoMusica
    ) {

        mostrarAviso(
            "A música deve ter até 20 MB.",
            "erro"
        );

        return;

    }


    estadoAdmin.arquivos.musica =
        arquivo;


    renderizarPreviewMusica();


    evento.target.value =
        "";

}


function renderizarPreviewCapa() {

    const container =
        elementosAdmin.previewCapa;


    const arquivo =
        estadoAdmin.arquivos.capa;


    if (
        !container ||
        !arquivo
    ) {

        if (container) {

            container.hidden =
                true;

            container.innerHTML =
                "";

        }

        return;

    }


    const url =
        criarUrlTemporaria(
            arquivo
        );


    container.innerHTML = `

        <div class="item-preview">

            <img
                src="${url}"
                alt="Prévia da foto de capa">

            <button
                id="btnRemoverCapa"
                type="button"
                aria-label="Remover foto de capa">

                ×

            </button>

        </div>
    `;


    container.hidden =
        false;


    document
        .getElementById(
            "btnRemoverCapa"
        )
        ?.addEventListener(
            "click",
            function () {

                estadoAdmin.arquivos.capa =
                    null;

                renderizarPreviewCapa();

                atualizarPreview();

            }
        );

}


function renderizarPreviewFotos() {

    const container =
        elementosAdmin.previewFotos;


    if (!container) {
        return;
    }


    container.innerHTML =
        "";


    estadoAdmin.arquivos
        .fotos
        .forEach(
            function (
                arquivo,
                indice
            ) {

                const item =
                    document.createElement(
                        "div"
                    );


                item.className =
                    "item-preview";


                const url =
                    criarUrlTemporaria(
                        arquivo
                    );


                item.innerHTML = `

                    <img
                        src="${url}"
                        alt="Fotografia selecionada">

                    <button
                        type="button"
                        aria-label="Remover fotografia">

                        ×

                    </button>
                `;


                item.querySelector(
                    "button"
                )
                    .addEventListener(
                        "click",
                        function () {

                            estadoAdmin.arquivos
                                .fotos
                                .splice(
                                    indice,
                                    1
                                );

                            renderizarPreviewFotos();

                            atualizarPreview();

                        }
                    );


                container.appendChild(
                    item
                );

            }
        );

}


function renderizarPreviewVideos() {

    const container =
        elementosAdmin.previewVideos;


    if (!container) {
        return;
    }


    container.innerHTML =
        "";


    estadoAdmin.arquivos
        .videos
        .forEach(
            function (
                arquivo,
                indice
            ) {

                const item =
                    document.createElement(
                        "div"
                    );


                item.className =
                    "preview-video-item";


                item.innerHTML = `

                    <i class="bi bi-camera-video"></i>

                    <div style="flex: 1; min-width: 0;">

                        <strong style="
                            display: block;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        ">
                            ${escaparHtml(arquivo.name)}
                        </strong>

                        <small>
                            ${formatarTamanhoArquivo(arquivo.size)}
                        </small>

                    </div>

                    <button
                        type="button"
                        class="botao-icone"
                        aria-label="Remover vídeo">

                        <i class="bi bi-trash"></i>

                    </button>
                `;


                item.querySelector(
                    "button"
                )
                    .addEventListener(
                        "click",
                        function () {

                            estadoAdmin.arquivos
                                .videos
                                .splice(
                                    indice,
                                    1
                                );

                            renderizarPreviewVideos();

                        }
                    );


                container.appendChild(
                    item
                );

            }
        );

}


function renderizarPreviewMusica() {

    const container =
        elementosAdmin.previewMusica;


    const arquivo =
        estadoAdmin.arquivos.musica;


    if (
        !container ||
        !arquivo
    ) {

        if (container) {

            container.hidden =
                true;

            container.innerHTML =
                "";

        }

        return;

    }


    container.hidden =
        false;


    container.innerHTML = `

        <i class="bi bi-music-note-beamed"></i>

        <div style="flex: 1; min-width: 0;">

            <strong style="
                display: block;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            ">
                ${escaparHtml(arquivo.name)}
            </strong>

            <small>
                ${formatarTamanhoArquivo(arquivo.size)}
            </small>

        </div>

        <button
            id="btnRemoverMusica"
            type="button"
            class="botao-icone"
            aria-label="Remover música">

            <i class="bi bi-trash"></i>

        </button>
    `;


    document
        .getElementById(
            "btnRemoverMusica"
        )
        ?.addEventListener(
            "click",
            function () {

                estadoAdmin.arquivos.musica =
                    null;

                renderizarPreviewMusica();

            }
        );

}


/* ===================================================
   PREVIEW DA PÁGINA
=================================================== */

function configurarPreview() {

    elementosAdmin.iframePreview
        ?.addEventListener(
            "load",
            function () {

                window.setTimeout(
                    atualizarPreview,
                    500
                );

            }
        );

}


function atualizarPreview() {

    const iframe =
        elementosAdmin.iframePreview;


    if (!iframe) {
        return;
    }


    try {

        const documento =
            iframe.contentDocument ||
            iframe.contentWindow
                ?.document;


        if (!documento) {
            return;
        }


        definirTextoPreview(
            documento,
            "titulo",
            elementosAdmin.tituloHomenagem
                ?.value ||
            "Uma homenagem especial"
        );


        definirTextoPreview(
            documento,
            "subtitulo",
            elementosAdmin.subtituloHomenagem
                ?.value ||
            "Este momento foi preparado com carinho."
        );


        definirTextoPreview(
            documento,
            "homenageado",
            elementosAdmin.nomeHomenageado
                ?.value ||
            "Alguém muito especial"
        );


        definirTextoPreview(
            documento,
            "mensagem",
            elementosAdmin.mensagemHomenagem
                ?.value ||
            "A mensagem da homenagem aparecerá aqui."
        );


        definirTextoPreview(
            documento,
            "assinatura",
            elementosAdmin.assinaturaHomenagem
                ?.value ||
            "Com carinho"
        );


        const raiz =
            documento.documentElement;


        raiz.style.setProperty(
            "--cor-principal",
            elementosAdmin.corPrincipal
                ?.value ||
            "#7a4b2a"
        );


        raiz.style.setProperty(
            "--cor-secundaria",
            elementosAdmin.corSecundaria
                ?.value ||
            "#d6a86a"
        );


        atualizarCapaPreview(
            documento
        );


        atualizarGaleriaPreview(
            documento
        );

    } catch (erro) {

        console.warn(
            "A pré-visualização ainda não está disponível:",
            erro
        );

    }

}


function atualizarCapaPreview(
    documento
) {

    const capa =
        documento.getElementById(
            "fotoCapa"
        );


    if (!capa) {
        return;
    }


    if (
        estadoAdmin.arquivos.capa
    ) {

        capa.src =
            criarUrlTemporaria(
                estadoAdmin.arquivos.capa
            );

        capa.hidden =
            false;

    }

}


function atualizarGaleriaPreview(
    documento
) {

    const galeria =
        documento.getElementById(
            "galeria"
        );


    const secao =
        documento.getElementById(
            "secaoGaleria"
        );


    if (
        !galeria ||
        !secao
    ) {
        return;
    }


    galeria.innerHTML =
        "";


    if (
        estadoAdmin.arquivos
            .fotos.length === 0
    ) {

        secao.hidden =
            true;

        return;

    }


    estadoAdmin.arquivos
        .fotos
        .slice(
            0,
            6
        )
        .forEach(
            function (arquivo) {

                const botao =
                    documento.createElement(
                        "button"
                    );


                botao.className =
                    "galeria-item";

                botao.type =
                    "button";


                const imagem =
                    documento.createElement(
                        "img"
                    );


                imagem.src =
                    criarUrlTemporaria(
                        arquivo
                    );

                imagem.alt =
                    "Foto da homenagem";


                botao.appendChild(
                    imagem
                );


                galeria.appendChild(
                    botao
                );

            }
        );


    secao.hidden =
        false;

}


function expandirPreview() {

    if (
        !elementosAdmin.iframePreview
    ) {
        return;
    }


    const iframe =
        elementosAdmin.iframePreview;


    if (
        iframe.requestFullscreen
    ) {

        iframe.requestFullscreen();

        return;

    }


    mostrarAviso(
        "Seu navegador não permite ampliar esta prévia.",
        "erro"
    );

}


/* ===================================================
   CONTA
=================================================== */

function salvarConta(
    evento
) {

    evento.preventDefault();


    const nome =
        elementosAdmin.nomeConta
            ?.value
            .trim() ||
        "";


    const email =
        elementosAdmin.emailConta
            ?.value
            .trim()
            .toLowerCase() ||
        "";


    const novaSenha =
        elementosAdmin.novaSenhaConta
            ?.value ||
        "";


    const confirmarSenha =
        elementosAdmin.confirmarSenhaConta
            ?.value ||
        "";


    if (
        !nome ||
        !email
    ) {

        mostrarAviso(
            "Preencha seu nome e e-mail.",
            "erro"
        );

        return;

    }


    if (
        novaSenha &&
        novaSenha.length < 6
    ) {

        mostrarAviso(
            "A nova senha deve ter pelo menos 6 caracteres.",
            "erro"
        );

        return;

    }


    if (
        novaSenha !==
        confirmarSenha
    ) {

        mostrarAviso(
            "A confirmação da senha não corresponde.",
            "erro"
        );

        return;

    }


    salvarUsuario(
        {
            nome: nome,
            email: email
        }
    );


    elementosAdmin.novaSenhaConta.value =
        "";

    elementosAdmin.confirmarSenhaConta.value =
        "";


    atualizarInterfaceUsuario();


    mostrarAviso(
        "Dados atualizados com sucesso.",
        "sucesso"
    );

}


/* ===================================================
   USUÁRIO
=================================================== */

function salvarUsuario(
    usuario
) {

    localStorage.setItem(
        CONFIG_ADMIN.chaveUsuario,
        JSON.stringify(usuario)
    );

}


function obterUsuario() {

    try {

        const dados =
            localStorage.getItem(
                CONFIG_ADMIN.chaveUsuario
            );


        if (!dados) {

            return {

                nome:
                    "Cliente LINKA",

                email:
                    "cliente@email.com"

            };

        }


        return JSON.parse(
            dados
        );

    } catch (erro) {

        return {

            nome:
                "Cliente LINKA",

            email:
                "cliente@email.com"

        };

    }

}


function atualizarInterfaceUsuario() {

    const usuario =
        obterUsuario();


    definirTexto(
        elementosAdmin.nomeUsuario,
        usuario.nome
    );


    definirTexto(
        elementosAdmin.emailUsuario,
        usuario.email
    );


    if (
        elementosAdmin.nomeConta
    ) {

        elementosAdmin.nomeConta.value =
            usuario.nome;

    }


    if (
        elementosAdmin.emailConta
    ) {

        elementosAdmin.emailConta.value =
            usuario.email;

    }


    const avatar =
        document.querySelector(
            ".usuario-avatar"
        );


    if (avatar) {

        avatar.textContent =
            String(
                usuario.nome ||
                "L"
            )
                .trim()
                .charAt(0)
                .toUpperCase();

    }

}


/* ===================================================
   SAIR
=================================================== */

function sairDaConta() {

    const confirmar =
        window.confirm(
            "Deseja sair da sua conta?"
        );


    if (!confirmar) {
        return;
    }


    localStorage.removeItem(
        CONFIG_ADMIN.chaveSessao
    );


    fecharMenu();

    mostrarLogin();


    if (
        elementosAdmin.senha
    ) {

        elementosAdmin.senha.value =
            "";

    }

}


/* ===================================================
   PÁGINA PÚBLICA
=================================================== */

function visualizarPaginaPublica() {

    const lista =
        obterHomenagensSalvas();


    const publicada =
        lista.find(
            function (item) {

                return item.status ===
                    "publicada";

            }
        );


    const url =
        publicada
            ? "../index.html?id=" +
              encodeURIComponent(
                  publicada.id
              )
            : "../index.html";


    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );

}


/* ===================================================
   MODAIS
=================================================== */

function abrirModalAjuda() {

    abrirModal(
        elementosAdmin.modalAjuda
    );

}


function fecharModalAjuda() {

    fecharModal(
        elementosAdmin.modalAjuda
    );

}


function abrirModal(
    modal
) {

    if (!modal) {
        return;
    }


    modal.hidden =
        false;


    document.body.classList.add(
        "modal-aberto"
    );

}


function fecharModal(
    modal
) {

    if (!modal) {
        return;
    }


    modal.hidden =
        true;


    const algumAberto =
        Array.from(
            document.querySelectorAll(
                ".modal"
            )
        )
            .some(
                function (item) {

                    return item.hidden ===
                        false;

                }
            );


    if (!algumAberto) {

        document.body.classList.remove(
            "modal-aberto"
        );

    }

}


function fecharModalPeloFundo(
    evento
) {

    if (
        evento.target ===
        evento.currentTarget
    ) {

        fecharModal(
            evento.currentTarget
        );

    }

}


/* ===================================================
   LIMPEZA E EDIÇÃO
=================================================== */

function limparFormularioHomenagem() {

    elementosAdmin.formHomenagem
        ?.reset();


    estadoAdmin.arquivos = {

        capa:
            null,

        fotos:
            [],

        videos:
            [],

        musica:
            null

    };


    estadoAdmin.editandoId =
        "";


    renderizarPreviewCapa();

    renderizarPreviewFotos();

    renderizarPreviewVideos();

    renderizarPreviewMusica();


    if (
        elementosAdmin.corPrincipal
    ) {

        elementosAdmin.corPrincipal.value =
            "#7a4b2a";

    }


    if (
        elementosAdmin.corSecundaria
    ) {

        elementosAdmin.corSecundaria.value =
            "#d6a86a";

    }


    atualizarPreview();

}


function preencherFormularioHomenagem(
    homenagem
) {

    const opcao =
        document.querySelector(
            `input[name="ocasiao"][value="${CSS.escape(homenagem.ocasiao)}"]`
        );


    if (opcao) {

        opcao.checked =
            true;

    }


    atribuirValor(
        elementosAdmin.tituloHomenagem,
        homenagem.titulo
    );


    atribuirValor(
        elementosAdmin.nomeHomenageado,
        homenagem.homenageado
    );


    atribuirValor(
        elementosAdmin.subtituloHomenagem,
        homenagem.subtitulo
    );


    atribuirValor(
        elementosAdmin.mensagemHomenagem,
        homenagem.mensagem
    );


    atribuirValor(
        elementosAdmin.assinaturaHomenagem,
        homenagem.assinatura
    );


    atribuirValor(
        elementosAdmin.corPrincipal,
        homenagem.corPrincipal
    );


    atribuirValor(
        elementosAdmin.corSecundaria,
        homenagem.corSecundaria
    );


    atribuirValor(
        elementosAdmin.efeitoVisual,
        homenagem.efeito
    );


    if (
        elementosAdmin.confirmarPublicacao
    ) {

        elementosAdmin
            .confirmarPublicacao
            .checked =
            homenagem.status ===
            "publicada";

    }


    estadoAdmin.arquivos = {

        capa:
            null,

        fotos:
            [],

        videos:
            [],

        musica:
            null

    };


    renderizarPreviewCapa();

    renderizarPreviewFotos();

    renderizarPreviewVideos();

    renderizarPreviewMusica();

    atualizarPreview();

}


/* ===================================================
   VALIDAÇÃO DE ARQUIVOS
=================================================== */

function validarArquivoImagem(
    arquivo,
    mostrarMensagem = true
) {

    if (
        !arquivo.type
            .startsWith(
                "image/"
            )
    ) {

        if (mostrarMensagem) {

            mostrarAviso(
                "Selecione um arquivo de imagem.",
                "erro"
            );

        }

        return false;

    }


    if (
        arquivo.size >
        CONFIG_ADMIN
            .tamanhoMaximoFoto
    ) {

        if (mostrarMensagem) {

            mostrarAviso(
                "Cada foto deve ter até 12 MB.",
                "erro"
            );

        }

        return false;

    }


    return true;

}


function validarArquivoVideo(
    arquivo
) {

    if (
        !arquivo.type
            .startsWith(
                "video/"
            )
    ) {

        mostrarAviso(
            "Selecione um arquivo de vídeo.",
            "erro"
        );

        return false;

    }


    if (
        arquivo.size >
        CONFIG_ADMIN
            .tamanhoMaximoVideo
    ) {

        mostrarAviso(
            "Cada vídeo deve ter até 150 MB.",
            "erro"
        );

        return false;

    }


    return true;

}


/* ===================================================
   TECLADO
=================================================== */

function controlarTeclado(
    evento
) {

    if (
        evento.key !== "Escape"
    ) {
        return;
    }


    if (
        elementosAdmin.modalAtivacao
            ?.hidden === false
    ) {

        fecharModalAtivacao();

        return;

    }


    if (
        elementosAdmin.modalAjuda
            ?.hidden === false
    ) {

        fecharModalAjuda();

        return;

    }


    fecharMenu();

}


/* ===================================================
   AVISOS
=================================================== */

function mostrarAviso(
    mensagem,
    tipo = ""
) {

    const aviso =
        elementosAdmin.avisoAdmin;


    if (!aviso) {
        return;
    }


    window.clearTimeout(
        estadoAdmin.avisoTimeout
    );


    aviso.textContent =
        mensagem;


    aviso.className =
        "aviso-admin";


    if (tipo) {

        aviso.classList.add(
            tipo
        );

    }


    aviso.hidden =
        false;


    estadoAdmin.avisoTimeout =
        window.setTimeout(
            function () {

                aviso.hidden =
                    true;

            },
            CONFIG_ADMIN.tempoAviso
        );

}


/* ===================================================
   UTILITÁRIOS
=================================================== */

function obterOcasiaoSelecionada() {

    return document.querySelector(
        'input[name="ocasiao"]:checked'
    )?.value || "";

}


function gerarIdHomenagem() {

    const caracteres =
        "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";


    let codigo =
        "LKM-";


    for (
        let indice = 0;
        indice < 6;
        indice++
    ) {

        codigo +=
            caracteres.charAt(
                Math.floor(
                    Math.random() *
                    caracteres.length
                )
            );

    }


    return codigo;

}


function criarUrlTemporaria(
    arquivo
) {

    if (
        !arquivo ||
        !(arquivo instanceof Blob)
    ) {

        return "";

    }


    const url =
        URL.createObjectURL(
            arquivo
        );


    estadoAdmin.urlsTemporarias
        .push(
            url
        );


    return url;

}


function obterResumoArquivo(
    arquivo
) {

    if (!arquivo) {
        return null;
    }


    return {

        nome:
            arquivo.name,

        tipo:
            arquivo.type,

        tamanho:
            arquivo.size

    };

}


function formatarTamanhoArquivo(
    bytes
) {

    if (
        bytes < 1024
    ) {

        return bytes + " B";

    }


    if (
        bytes <
        1024 * 1024
    ) {

        return (
            bytes / 1024
        ).toFixed(1) +
        " KB";

    }


    return (
        bytes /
        (
            1024 * 1024
        )
    ).toFixed(1) +
    " MB";

}


function definirTextoPreview(
    documento,
    id,
    texto
) {

    const elemento =
        documento.getElementById(
            id
        );


    if (!elemento) {
        return;
    }


    elemento.textContent =
        texto;

    elemento.hidden =
        !texto;

}


function definirTexto(
    elemento,
    texto
) {

    if (!elemento) {
        return;
    }


    elemento.textContent =
        texto || "";

}


function definirNumero(
    elemento,
    numero
) {

    if (!elemento) {
        return;
    }


    elemento.textContent =
        String(numero);

}


function atribuirValor(
    elemento,
    valor
) {

    if (!elemento) {
        return;
    }


    elemento.value =
        valor || "";

}


function marcarCampoInvalido(
    campo
) {

    campo?.classList.add(
        "invalido"
    );


    campo?.focus();


    window.setTimeout(
        function () {

            campo?.classList.remove(
                "invalido"
            );

        },
        2500
    );

}


function mostrarErroCampo(
    campo,
    elementoErro,
    mensagem
) {

    campo?.classList.add(
        "invalido"
    );


    if (
        elementoErro
    ) {

        elementoErro.textContent =
            mensagem;

        elementoErro.hidden =
            false;

    }

}


function limparErroCampo(
    campo,
    elementoErro
) {

    campo?.classList.remove(
        "invalido"
    );


    if (
        elementoErro
    ) {

        elementoErro.textContent =
            "";

        elementoErro.hidden =
            true;

    }

}


function mostrarMensagemLogin(
    mensagem,
    tipo = "erro"
) {

    const elemento =
        elementosAdmin.mensagemLogin;


    if (!elemento) {
        return;
    }


    elemento.textContent =
        mensagem;

    elemento.hidden =
        false;

    elemento.classList.toggle(
        "sucesso",
        tipo === "sucesso"
    );

}


function limparMensagemLogin() {

    const elemento =
        elementosAdmin.mensagemLogin;


    if (!elemento) {
        return;
    }


    elemento.hidden =
        true;

    elemento.textContent =
        "";

    elemento.classList.remove(
        "sucesso"
    );

}


function alterarCarregamentoLogin(
    carregando
) {

    if (
        elementosAdmin.btnEntrar
    ) {

        elementosAdmin.btnEntrar.disabled =
            carregando;

    }


    if (
        elementosAdmin.textoBtnEntrar
    ) {

        elementosAdmin
            .textoBtnEntrar
            .hidden =
            carregando;

    }


    if (
        elementosAdmin.carregamentoBtnEntrar
    ) {

        elementosAdmin
            .carregamentoBtnEntrar
            .hidden =
            !carregando;

    }

}


function obterNomePeloEmail(
    email
) {

    const parte =
        String(email)
            .split("@")[0]
            .replace(
                /[._-]+/g,
                " "
            )
            .trim();


    if (!parte) {

        return "Cliente LINKA";

    }


    return parte
        .split(" ")
        .map(
            function (palavra) {

                return palavra
                    .charAt(0)
                    .toUpperCase() +
                    palavra
                        .slice(1)
                        .toLowerCase();

            }
        )
        .join(" ");

}


function escaparHtml(
    texto
) {

    return String(
        texto ??
        ""
    )
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );

}


function aguardar(
    tempo
) {

    return new Promise(
        function (resolver) {

            window.setTimeout(
                resolver,
                tempo
            );

        }
    );

}
