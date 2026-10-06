// Pegamos os elementos do HTML pelo id
const formulario = document.getElementById("formulario");
const campoNome = document.getElementById("nome");
const campoEmail = document.getElementById("email");
const mensagem = document.getElementById("mensagem");

// Quando o formulário for enviado
formulario.addEventListener("submit", function (evento) {
  evento.preventDefault(); // impede a página de recarregar

  const nome = campoNome.value.trim();
  const email = campoEmail.value.trim();

  // Validação simples
  if (nome === "" || email === "") {
    mensagem.textContent = "Preencha seu nome e e-mail.";
    mensagem.style.color = "red";
    return;
  }

  if (!email.includes("@")) {
    mensagem.textContent = "Digite um e-mail válido.";
    mensagem.style.color = "red";
    return;
  }

  // Tudo certo: mostra mensagem de sucesso e limpa os campos
  mensagem.textContent = "Obrigado, " + nome + "! Entraremos em contato.";
  mensagem.style.color = "green";
  formulario.reset();
});

// Coloca o ano atual no rodapé
document.getElementById("ano").textContent = new Date().getFullYear();