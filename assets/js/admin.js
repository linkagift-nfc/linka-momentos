/* ===================================================
   LINKA MOMENTOS
   Área administrativa
=================================================== */


/* ===================================================
   ELEMENTOS
=================================================== */

const elementos = {

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

    mensagemLogin:
        document.getElementById(
            "mensagemLogin"
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

    btnAjuda:
        document.getElementById(
            "btnAjuda"
        ),

    modalAjuda:
        document.getElementById(
            "modalAjuda"
        ),

    btnFecharAjuda:
        document.getElementById(
            "btnFecharAjuda"
        )

};


/* ===================================================
   INICIALIZAÇÃO
=================================================== */

document.addEventListener(
    "DOMContentLoaded",
    iniciarPagina
);


function iniciarPagina() {

    configurarEventos();

}


/* ===================================================
   EVENTOS
=================================================== */

function configurarEventos() {

    elementos.formLogin
        ?.addEventListener(
            "submit",
            enviarLogin
        );


    elementos.btnMostrarSenha
        ?.addEventListener(
            "click",
            alternarVisibilidadeSenha
        );


    elementos.btnAjuda
        ?.addEventListener(
            "click",
            abrirModalAjuda
        );


    elementos.btnFecharAjuda
        ?.addEventListener(
            "click",
            fecharModalAjuda
        );


    elementos.modalAjuda
        ?.addEventListener(
            "click",
            function (evento) {

                if (
                    evento.target ===
                    elementos.modalAjuda
                ) {

                    fecharModalAjuda();

                }

            }
        );


    elementos.btnEsqueciSenha
        ?.addEventListener(
            "click",
            informarRecuperacaoSenha
        );


    elementos.email
        ?.addEventListener(
            "input",
            limparErroEmail
        );


    elementos.senha
        ?.addEventListener(
            "input",
            limparErroSenha
        );


    document.addEventListener(
        "keydown",
        controlarTeclado
    );

}


/* ===================================================
   LOGIN
=================================================== */

async function enviarLogin(
    evento
) {

    evento.preventDefault();


    limparMensagemLogin();


    const emailValido =
        validarEmail();


    const senhaValida =
        validarSenha();


    if (
        !emailValido ||
        !senhaValida
    ) {

        return;

    }


    alterarEstadoBotao(
        true
    );


    try {

        await aguardar(
            900
        );


        mostrarMensagemLogin(
            "A conexão com o sistema de login será adicionada na próxima etapa.",
            "sucesso"
        );

    } catch (erro) {

        console.error(
            "Erro ao processar login:",
            erro
        );


        mostrarMensagemLogin(
            "Não foi possível processar o acesso. Tente novamente."
        );

    } finally {

        alterarEstadoBotao(
            false
        );

    }

}


/* ===================================================
   VALIDAÇÃO DO E-MAIL
=================================================== */

function validarEmail() {

    const valor =
        elementos.email
            ?.value
            .trim() ||
        "";


    if (!valor) {

        mostrarErroCampo(
            elementos.email,
            elementos.erroEmail,
            "Digite seu e-mail."
        );

        return false;

    }


    const formatoEmail =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (
        !formatoEmail.test(
            valor
        )
    ) {

        mostrarErroCampo(
            elementos.email,
            elementos.erroEmail,
            "Digite um e-mail válido."
        );

        return false;

    }


    limparErroEmail();

    return true;

}


/* ===================================================
   VALIDAÇÃO DA SENHA
=================================================== */

function validarSenha() {

    const valor =
        elementos.senha
            ?.value ||
        "";


    if (!valor) {

        mostrarErroCampo(
            elementos.senha,
            elementos.erroSenha,
            "Digite sua senha."
        );

        return false;

    }


    if (
        valor.length < 6
    ) {

        mostrarErroCampo(
            elementos.senha,
            elementos.erroSenha,
            "A senha deve ter pelo menos 6 caracteres."
        );

        return false;

    }


    limparErroSenha();

    return true;

}


/* ===================================================
   MOSTRAR OU OCULTAR SENHA
=================================================== */

function alternarVisibilidadeSenha() {

    if (
        !elementos.senha ||
        !elementos.btnMostrarSenha
    ) {

        return;

    }


    const senhaVisivel =
        elementos.senha.type ===
        "text";


    elementos.senha.type =
        senhaVisivel
            ? "password"
            : "text";


    elementos.btnMostrarSenha
        .setAttribute(
            "aria-pressed",
            String(
                !senhaVisivel
            )
        );


    elementos.btnMostrarSenha
        .setAttribute(
            "aria-label",
            senhaVisivel
                ? "Mostrar senha"
                : "Ocultar senha"
        );


    if (
        elementos.iconeSenha
    ) {

        elementos.iconeSenha
            .textContent =
            senhaVisivel
                ? "Mostrar"
                : "Ocultar";

    }

}


/* ===================================================
   MODAL DE AJUDA
=================================================== */

function abrirModalAjuda() {

    if (
        !elementos.modalAjuda
    ) {

        return;

    }


    elementos.modalAjuda.hidden =
        false;


    elementos.btnFecharAjuda
        ?.focus();

}


function fecharModalAjuda() {

    if (
        !elementos.modalAjuda
    ) {

        return;

    }


    elementos.modalAjuda.hidden =
        true;


    elementos.btnAjuda
        ?.focus();

}


/* ===================================================
   RECUPERAÇÃO DE SENHA
=================================================== */

function informarRecuperacaoSenha() {

    mostrarMensagemLogin(
        "A recuperação de senha será conectada ao sistema de contas na próxima etapa.",
        "sucesso"
    );

}


/* ===================================================
   ESTADO DO BOTÃO
=================================================== */

function alterarEstadoBotao(
    carregando
) {

    if (
        elementos.btnEntrar
    ) {

        elementos.btnEntrar.disabled =
            carregando;

    }


    if (
        elementos.textoBtnEntrar
    ) {

        elementos.textoBtnEntrar.hidden =
            carregando;

    }


    if (
        elementos.carregamentoBtnEntrar
    ) {

        elementos.carregamentoBtnEntrar.hidden =
            !carregando;

    }

}


/* ===================================================
   MENSAGENS DOS CAMPOS
=================================================== */

function mostrarErroCampo(
    campo,
    elementoErro,
    mensagem
) {

    campo
        ?.classList
        .add(
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


function limparErroEmail() {

    elementos.email
        ?.classList
        .remove(
            "invalido"
        );


    if (
        elementos.erroEmail
    ) {

        elementos.erroEmail.textContent =
            "";

        elementos.erroEmail.hidden =
            true;

    }

}


function limparErroSenha() {

    elementos.senha
        ?.classList
        .remove(
            "invalido"
        );


    if (
        elementos.erroSenha
    ) {

        elementos.erroSenha.textContent =
            "";

        elementos.erroSenha.hidden =
            true;

    }

}


/* ===================================================
   MENSAGEM GERAL
=================================================== */

function mostrarMensagemLogin(
    mensagem,
    tipo = "erro"
) {

    if (
        !elementos.mensagemLogin
    ) {

        return;

    }


    elementos.mensagemLogin.textContent =
        mensagem;


    elementos.mensagemLogin
        .classList
        .toggle(
            "sucesso",
            tipo === "sucesso"
        );


    elementos.mensagemLogin.hidden =
        false;

}


function limparMensagemLogin() {

    if (
        !elementos.mensagemLogin
    ) {

        return;

    }


    elementos.mensagemLogin.textContent =
        "";

    elementos.mensagemLogin.hidden =
        true;

    elementos.mensagemLogin
        .classList
        .remove(
            "sucesso"
        );

}


/* ===================================================
   TECLADO
=================================================== */

function controlarTeclado(
    evento
) {

    if (
        evento.key === "Escape" &&
        elementos.modalAjuda?.hidden ===
        false
    ) {

        fecharModalAjuda();

    }

}


/* ===================================================
   UTILITÁRIOS
=================================================== */

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
