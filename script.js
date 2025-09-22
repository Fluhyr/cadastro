/*
    ETAPAS:

x   1- se usuario estiver com caracteres (pelo menos 1) msg de erro e icone de erro
    2- Email - verificador email
x   3- senha - min 6 caracteres
x   4- confirmar senha == senha
    5- verificador CPF
    6- verificador CNPJ
x   7- tirar o display none do cpf ou cnpj selector
    8-função Login
*/
//---------------------------------------------------------------------------------------------
//VERIFICADORES
    var verificacaoEmail = false
    var verificacaoSenha = false
    var verificacaoUsuario = false
//---------------------------------------------------------------------------------------------
//ESTILO DO INPUT QUANDO VERIFICAÇÃO FALSA E VERDADEIRA

var estiloErro = {
    backgroundImage: 'url(content/erro.png)',
    backgroundSize: '16px',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'rgba(194, 34, 34, 0.164)',
    backgroundPosition: '290px'
}
var estiloAcerto = {
    backgroundImage: 'none',
    backgroundColor: 'rgb(238, 238, 238)',
}

//---------------------------------------------------------------------------------------------
/* VERIFICAR SENHA */

function VerificadorSenha() {

    var senhaUsuario = document.getElementById("inputSenha");
    var confirmarSenha = document.getElementById("inputConfirmarsenha");

    if (senhaUsuario.value.length >= 6) {
        if (senhaUsuario.value == confirmarSenha.value) {
            //Acerto tamanho e senha = confirmar
            verificacaoSenha = true;
            Object.assign(document.getElementById("inputSenha").style, estiloAcerto);
            Object.assign(document.getElementById("inputConfirmarsenha").style, estiloAcerto);
            document.getElementById("erroConfirmarsenha").style.display = 'none';
            document.getElementById("erroSenha").style.display = 'none';
        } else {
            //senha != confirmar
            Object.assign(document.getElementById("inputSenha").style, estiloErro);
            Object.assign(document.getElementById("inputConfirmarsenha").style, estiloErro);
            document.getElementById("erroConfirmarsenha").style.display = 'block';
        }
    } else {
        //ERRO tudo
        Object.assign(document.getElementById("inputSenha").style, estiloErro);
        document.getElementById("erroSenha").style.display = 'block';
        verificacaoSenha = false;
    }
}
//---------------------------------------------------------------------------------------------
/* VERIFICAR USUÁRIO */

function VerificadorUsuario() {

    var inputUsuario = document.getElementById("inputUsuario");

    if (inputUsuario.value.length >= 1) {
        //Encontra o requerimento
        Object.assign(document.getElementById("inputUsuario").style, estiloAcerto)
        document.getElementById("erroUsuario").style.display = 'none';
        verificacaoUsuario = 1;
    } else {
        //msg de ERRO
        Object.assign(document.getElementById("inputUsuario").style, estiloErro)
        document.getElementById("erroUsuario").style.display = 'block'
        verificacaoUsuario = 0;
    }
}
//---------------------------------------------------------------------------------------------
/* VERIFICADOR EMAIL */

function VerificadorEmail(){

    var emailUsuario = document.getElementById("inputEmail");
    var emailUsuarioValue = emailUsuario.value;

    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        
    if (regex.test(emailUsuarioValue)){
        //ACERTO
        Object.assign(document.getElementById("inputEmail").style, estiloAcerto)
        document.getElementById("erroEmail").style.display = 'none';
        verificacaoEmail = 1;
    }else{
        //ERRO
        Object.assign(document.getElementById("inputEmail").style, estiloErro)
        document.getElementById("erroEmail").style.display = 'block';
        verificacaoEmail = 0;
    }
}

//---------------------------------------------------------------------------------------------
/* MOSTRAR APENAS 1 OPCAO SELECT - CPF CNPJ */

document.getElementById('divCPF').style.display = 'none';
document.getElementById('divCNPJ').style.display = 'none';

document.getElementById('opcaocadastro').addEventListener('change', () => {
    const valorSelecionado = document.getElementById('opcaocadastro').value;

    //ocultday (la ele)

    document.getElementById('divCPF').style.display = 'none';
    document.getElementById('divCNPJ').style.display = 'none';

    if (valorSelecionado === 'CPF') {
        document.getElementById('divCPF').style.display = 'block';
    } else if (valorSelecionado === 'CNPJ') {
        document.getElementById('divCNPJ').style.display = 'block';
    }
});

//---------------------------------------------------------------------------------------------

/* FECHAR POPUP DE CADASTRO FEITO */

document.getElementById('Box2').style.display = 'none';

function FecharPopup() {
    document.getElementById('Popup').style.display = 'none';
    document.getElementById('Box1').style.display = 'none';
    document.getElementById('Box2').style.display = 'block';
}

//---------------------------------------------------------------------------------------------

/* VERIFICAÇÃO FINAL CADASTRO */
function Cadastrar() {

    VerificadorEmail();
    VerificadorSenha();
    VerificadorUsuario();

    if (verificacaoSenha == true && verificacaoUsuarioUsuario == true && verificacaoEmail == true){
        document.getElementById('Popup').style.display = 'block';
    }

}
//---------------------------------------------------------------------------------------------