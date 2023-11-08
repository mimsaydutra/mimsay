function atualiza() {
  var formulario = document.getElementById("login");
  var usuario = document.getElementById("usuario").value;
  var senha = document.getElementById("senha").value;
  var button = document.getElementById("loginb");
  if (usuario === "" || senha === "") {
    alert("Usuario ou senha vazios, por favor insira as credenciais corretas.");
  } else {
    formulario.parentNode.removeChild(formulario);
    var logado = `<p> Olá ${usuario}, seja bem vindo!<p>`;
    document.getElementById("login_div").innerHTML += logado;
    loginb.innerHTML = `<button type="submit" class="btn btn-secondary" onclick="atualiza()" id = "loginb">
        <a href =  "tela_Download.html"> Página de Download do Arquivo</a>
      </button>`;
  }
}
