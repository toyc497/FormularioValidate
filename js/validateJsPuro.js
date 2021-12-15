function emailValidate(){
    const email = document.getElementById("email").value;
    const msgEmail = document.querySelector(".msgEmail");
    let regexEmail = /\S+@\S+\.\S+/;
    if(email.length == 0){
        msgEmail.innerText = "Preencha o campo obrigatório";
    }else if(email.length < 10 || email.length > 40){
        msgEmail.innerText = "Tamanho inválido";
    }else if(regexEmail.test(email) == false){
        msgEmail.innerText = "E-mail inválido";
    }else{
        msgEmail.innerText = "";
    }
}

function nomeValidate(){
    const nome = document.getElementById("nome").value;
    const msgNome = document.querySelector(".msgNome");
    let regexNome = /[0-9]/;
    if(nome.length == 0 || nome.length > 40){
        msgNome.innerText = "Tamanho Inválido";
    }else if(regexNome.test(nome) == true){
        msgNome.innerText = "Nome não pode conter números";
    }else{
        msgNome.innerText = "";
    }
}

function cpfValidate(){
    const cpf = document.getElementById("cpf").value;
    const msgCPF = document.querySelector(".msgCPF");
    let regexCPF = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/;
    if(cpf.length != 11){
        msgCPF.innerText = "Tamanho Inválido";
    }else if(regexCPF.test(cpf) == true){
        msgCPF.innerText = "CPF Inválido";
    }else{
        msgCPF.innerText = "";
    }
}

function telefValidate(){
    const telefone = document.getElementById("telefone").value;
    const msgTelef = document.querySelector(".msgTelef");
    if(telefone.length != 11){
        msgTelef.innerText = "Telefone incorreto";
    }else{
        msgTelef.innerText = "";
    }
}

function senhaValidate(){
    const senha = document.getElementById("senha").value;
    const msgSenha = document.querySelector(".msgSenha");
    let regexSenha = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;
    if(regexSenha.test(senha) == false){
        msgSenha.innerText = "Senha inválida";
        alert("Senha deve conter 8 caractéres com pelo menos um número, letras maiúsculas e minúsculas e caracteres especiais");
    }else{
        msgSenha.innerText = "";
    }
}

function repeteSenhaValidate(){
    const senha = document.getElementById("senha").value;
    const repeteSenha = document.getElementById("repeteSenha").value;
    const msgRepSenha = document.querySelector(".msgRepSenha");
    if(repeteSenha != senha){
        msgRepSenha.innerText = "Senhas não coincidem";
    }else{
        msgRepSenha.innerText = "";
    }
}