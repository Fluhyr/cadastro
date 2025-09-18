/*
    ETAPAS:

    1- se usuario estiver com caracteres (pelo menos 5) msg de erro e icone de erro
    2- Email - verificador email
    3- senha - min 6 caracteres
    4- confirmar senha == senha
    5- verificador CPF
    6- verificador CNPJ
x   7- tirar o display none do cpf ou cnpj selector
    8-função Login
*/

var verificacaoSenha = 1;

//---------------------------------------------------------------------------------------------
/* VERIFICAR SENHA */

function VerificadorSenha(){
    var senhaUsuario = document.getElementById("inputSenha");
    var confirmarSenha = document.getElementById("inputConfirmarsenha");

    if(senhaUsuario.value.length >= 6){
        if(senhaUsuario.value == confirmarSenha.value){
        verificacaoSenha = true;
        alert("senha igual")
        }else{
            alert("senha diferente")
        }
    }
    else{
        alert("Senha menor q 6 digitos")
    }
}
//---------------------------------------------------------------------------------------------
/* VERIFICADOR EMAIL */

var emailUsuario = document.getElementById("inputEmail")

function VerificadorEmail(emailUsuario){
    
    return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(emailUsuario)

}
    

    if(emailUsuario)








//---------------------------------------------------------------------------------------------
/* ETAPA 7 Verificador do SELECT */

document.getElementById('divCPF').style.display = 'none';
document.getElementById('divCNPJ').style.display = 'none';

document.getElementById('opcaocadastro').addEventListener('change', () => {
    const valorSelecionado = document.getElementById('opcaocadastro').value;

    //ocultday
    
    document.getElementById('divCPF').style.display = 'none';
    document.getElementById('divCNPJ').style.display = 'none';

    if (valorSelecionado === 'CPF') {
        document.getElementById('divCPF').style.display = 'block';
    }else if (valorSelecionado === 'CNPJ') {
        document.getElementById('divCNPJ').style.display = 'block';
    }
});

//---------------------------------------------------------------------------------------------

/* FECHAR POPUP */

document.getElementById('Box2').style.display = 'none';

function FecharPopup(){
    document.getElementById('Popup').style.display = 'none';
    document.getElementById('Box1').style.display = 'none';
    document.getElementById('Box2').style.display = 'block';
}

//---------------------------------------------------------------------------------------------

/* VERIFICAÇÃO FINAL CADASTRO */
function Cadastrar(){

    VerificadorSenha();
    
    
    if(verificacaoSenha == true){
        document.getElementById('Popup').style.display = 'block';
    }
    
}
//---------------------------------------------------------------------------------------------