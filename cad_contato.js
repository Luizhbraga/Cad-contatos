
let contatos = [];
let posicao = 0;
let incluindo = false;
let editando = false;

function iniciar() {
    
    mostrarContato();
    desabilitarCampos();
}


function mostrarContato() {
    if (contatos.length > 0) {
        document.getElementById("nome").value = contatos[posicao].nome;
        document.getElementById("sobrenome").value = contatos[posicao].sobrenome;
        document.getElementById("endereco").value = contatos[posicao].endereco;
        document.getElementById("telefone").value = contatos[posicao].telefone;
    } else {
        limparCampos();
    }
}

function limparCampos() {
    document.getElementById("nome").value = "";
    document.getElementById("sobrenome").value = "";
    document.getElementById("endereco").value = "";
    document.getElementById("telefone").value = "";
}

function desabilitarCampos() {
    document.getElementById("nome").disabled = true;
    document.getElementById("sobrenome").disabled = true;
    document.getElementById("endereco").disabled = true;
    document.getElementById("telefone").disabled = true;
}

function habilitarCampos() {
    document.getElementById("nome").disabled = false;
    document.getElementById("sobrenome").disabled = false;
    document.getElementById("endereco").disabled = false;
    document.getElementById("telefone").disabled = false;
}

function incluir() {
    incluindo = true;
    editando = false;
    limparCampos();
    habilitarCampos();
    document.getElementById("nome").focus();
}

function editar() {
    if (contatos.length > 0) {
        editando = true;
        incluindo = false;
        habilitarCampos();
        document.getElementById("nome").focus();
    } else {
        alert("Não há contatos para editar!");
    }
}

function salvar() {
   
    const nome = document.getElementById("nome").value;
    const sobrenome = document.getElementById("sobrenome").value;
    const endereco = document.getElementById("endereco").value;
    const telefone = document.getElementById("telefone").value;
    
    if (nome == "" || sobrenome == "" || endereco == "" || telefone == "") {
        alert("Todos os campos são obrigatórios!");
        return;
    }
    
    const novoContato = {
        nome: nome,
        sobrenome: sobrenome,
        endereco: endereco,
        telefone: telefone
    };
    
    if (incluindo) {
    
        contatos.push(novoContato);
        posicao = contatos.length - 1;
        alert("Contato incluído com sucesso!");
    } else if (editando) {
    
        contatos[posicao] = novoContato;
        alert("Contato atualizado com sucesso!");
    }
    
    incluindo = false;
    editando = false;
    desabilitarCampos();
    mostrarContato();
}

function cancelar() {
    if (incluindo || editando) {
        incluindo = false;
        editando = false;
        desabilitarCampos();
        mostrarContato();
    }
}


function excluir() {
    if (contatos.length > 0) {
        const confirma = confirm("Tem certeza que deseja excluir este contato?");
        if (confirma) {
            contatos.splice(posicao, 1);
            
            if (contatos.length == 0) {
                posicao = 0;
                limparCampos();
            } else {
                if (posicao >= contatos.length) {
                    posicao = contatos.length - 1;
                }
                mostrarContato();
            }
            alert("Contato excluído com sucesso!");
        }
    } else {
        alert("Não há contatos para excluir!");
    }
}

function primeiro() {
    if (contatos.length > 0) {
        posicao = 0;
        mostrarContato();
    }
}

function anterior() {
    if (contatos.length > 0 && posicao > 0) {
        posicao = posicao - 1;
        mostrarContato();
    }
}

function proximo() {
    if (contatos.length > 0 && posicao < contatos.length - 1) {
        posicao = posicao + 1;
        mostrarContato();
    }
}

function ultimo() {
    if (contatos.length > 0) {
        posicao = contatos.length - 1;
        mostrarContato();
    }
}

window.onload = iniciar;

