// Função que será executada ao tentar enviar o formulário
function cadastrar(event) {
    // Impede o comportamento padrão do formulário (recarregar a página)
    event.preventDefault();
  
    // Pega o valor do campo "nome", remove espaços extras
    const nome = document.getElementById("nome").value.trim();
  
    // Pega o valor do campo "contato", remove espaços extras
    const contato = document.getElementById("contato").value.trim();
  
    // Pega o valor do campo "email", remove espaços extras
    const email = document.getElementById("email").value.trim();
  
    // Pega o valor do campo "senha"
    const senha = document.getElementById("senha").value;
  
    // Verifica se algum campo está vazio
    if (!nome || !contato || !email || !senha) {
      alert("Preencha todos os campos!");
      return; // Para a função
    }
  
    // Regex que valida o formato do e-mail (exemplo@dominio.com)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("E-mail inválido!");
      return;
    }
  
    // Verifica se a senha tem no mínimo 6 caracteres
    if (senha.length < 6) {
      alert("A senha deve ter no mínimo 6 caracteres.");
      return;
    }
  
    // Cria um objeto com os dados do usuário
    const usuario = { nome, contato, email, senha };
  
    // Salva os dados no sessionStorage com a chave "usuario"
    sessionStorage.setItem("usuario", JSON.stringify(usuario));
  
    // Também salva o nome do usuário separadamente
    sessionStorage.setItem("nomeUsuario", nome);
  
    // Mostra mensagem de sucesso
    alert("Cadastro realizado com sucesso!");
  
    // Redireciona para a página de login
    window.location.href = "login.html";
  }
  
  // Espera o carregamento completo do DOM (HTML da página)
  document.addEventListener("DOMContentLoaded", function () {
    // Seleciona o formulário pelo id "formCadastro"
    const form = document.getElementById("formCadastro");
  
    // Adiciona o evento de submit no formulário, chamando a função cadastrar
    form.addEventListener("submit", cadastrar);
  });
  