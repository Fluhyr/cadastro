/*
    Desenvolvido por Lucas Neves Fluhr,
    exceto por script do Verificador do CPF, catei de um mano mt foda por ai.

    ETAPAS:

[x]  1- se usuario estiver com caracteres (pelo menos 1) msg de erro e icone de erro
[x]  2- Email - verificador email
[x]  3- senha - min 6 caracteres
[x]  4- confirmar senha == senha
[x]  5- verificador CPF
[x]  6- verificador CNPJ
[x]  7- tirar o display none do cpf ou cnpj selector
[ ]  8-função Login
*/
//---------------------------------------------------------------------------------------------
//VERIFICADORES
    var verificacaoEmail = false;
    var verificacaoSenha = false;
    var verificacaoUsuario = false;
    var verificacaoCPF = false;
    var verificacaoCNPJ = false;
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
/* VERIFICADOR CPF */

function VerificadorCPF() {
    var cpfInput = document.getElementById("inputCPF");
    var strCPF = String(cpfInput.value).replace(/[^\d]/g, '');
    var isValid = true;
    

    if (strCPF.length !== 11) {
       isValid = false;
    }
    

    if ([
      '00000000000', '11111111111', '22222222222', '33333333333', '44444444444',
      '55555555555', '66666666666', '77777777777', '88888888888', '99999999999',
      ].indexOf(strCPF) !== -1) {
      isValid = false;
    }
  

    if (isValid) {
      var Soma = 0;
      for (var i=1; i<=9; i++) {
        Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
      }
      var Resto = (Soma * 10) % 11;
      if ((Resto == 10) || (Resto == 11)) Resto = 0;
      if (Resto != parseInt(strCPF.substring(9, 10)) ) isValid = false;
    }
  

    if (isValid) {
      var Soma = 0;
      for (var i = 1; i <= 10; i++) {
        Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
      }
      var Resto = (Soma * 10) % 11;
      if ((Resto == 10) || (Resto == 11)) Resto = 0;
      if (Resto != parseInt(strCPF.substring(10, 11) ) ) isValid = false;
      verificacaoCPF = true;
    }
    

    
    if (verificacaoCPF) {
      Object.assign(cpfInput.style, estiloAcerto);
      document.getElementById("erroCPF").style.display = 'none';
    } else {
      Object.assign(cpfInput.style, estiloErro);
      document.getElementById("erroCPF").style.display = 'block';
    }
}

//SUBSTITUIR CAMPO CPF PONTO E TRAÇO

document.getElementById('inputCPF').addEventListener('input', function (e) {
    let value = e.target.value;
    

    value = value.replace(/\D/g, "");
    

    if (value.length > 11) {
        value = value.slice(0, 11); 
    }
    

    if (value.length > 9) {
        value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    } else if (value.length > 6) {
        value = value.replace(/(\d{3})(\d{3})(\d{3})/, "$1.$2.$3");
    } else if (value.length > 3) {
        value = value.replace(/(\d{3})(\d{3})/, "$1.$2");
    } else if (value.length > 0) {
        value = value.replace(/(\d{3})/, "$1");
    }

    e.target.value = value;
});

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
/* VERIFICADOR CNPJ */


function VerificadorCNPJ() {

    var inputCNPJ = document.getElementById("inputCNPJ");

    if (inputCNPJ.value.length >= 1) {
        Object.assign(document.getElementById("inputCNPJ").style, estiloAcerto)
        document.getElementById("erroCNPJ").style.display = 'none';
        verificacaoCNPJ = 1;
    } else {
        Object.assign(document.getElementById("inputCNPJ").style, estiloErro)
        document.getElementById("erroCNPJ").style.display = 'block'
        verificacaoCNPJ = 0;
    }
}
//---------------------------------------------------------------------------------------------

/* VERIFICAÇÃO FINAL CADASTRO */
function Cadastrar() {

    VerificadorEmail();
    VerificadorSenha();
    VerificadorUsuario();
    VerificadorCPF();
    VerificadorCNPJ();

    if (verificacaoSenha == true && verificacaoUsuario == true && verificacaoEmail == true && (verificacaoCPF == true || verificacaoCNPJ == true)){
        document.getElementById('Popup').style.display = 'block';
    }

}
//---------------------------------------------------------------------------------------------