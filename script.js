function entrar() {
    const user = document.getElementById("user").value;
    const senha = document.getElementById("senha").value;

    const Ruser = "admin";
    const Rsenha = "admin";

    if (user === Ruser && senha === Rsenha) {
        window.location.href = "cad_contatos.html";
    } else {
        alert("Usuário ou senha incorretos");
    }
}
