/*
    ETAPAS:

    1- se usuario estiver com caracteres (pelo menos 5) msg de erro e icone de erro
    2- Email - verificador email
    3- senha - min 6 caracteres
    4- confirmar senha == senha
    5- verificador CPF
    6- verificador CNPJ
    7- tirar o display none do cpf ou cnpj selector

    --------------

    EXTRA

    pagina de login com BD
*/




//ETAPA 7 Verificador do SELECT---------------------------------------------------------------

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




/* Fechar Popup */

document.getElementById('Box2').style.display = 'none';

function FecharPopup(){
    document.getElementById('Popup').style.display = 'none';
    document.getElementById('Box1').style.display = 'none';
    document.getElementById('Box2').style.display = 'block';
}




/* VERIFICAÇÃO FINAL CADASTRO */
function Cadastrar(){
    verificacao = 1

    if(verificacao == 1){
        document.getElementById('Popup').style.display = 'block';
    }
    
}
//---------------------------------------------------------------------------------------------