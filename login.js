// Função que será chamada quando o formulário de login for enviado
function login(event) {
    // Impede que a página recarregue ao enviar o formulário
    event.preventDefault();
  
    // Pega o valor do campo de e-mail, removendo espaços extras
    const email = document.getElementById("email").value.trim();
  
    // Pega o valor do campo de senha, removendo espaços extras
    const senha = document.getElementById("senha").value.trim();
  
    // Expressão regular para validar o formato do e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("E-mail inválido!"); // Mostra alerta se e-mail estiver incorreto
      return;
    }
  
    // Recupera os dados do usuário salvos no sessionStorage durante o cadastro
    const usuarioSalvo = JSON.parse(sessionStorage.getItem("usuario"));
  
    // Verifica se existe algum usuário cadastrado
    if (!usuarioSalvo) {
      alert("Nenhum usuário cadastrado!"); // Alerta se não houver dados
      return;
    }
  
    // Compara os dados informados com os dados salvos no sessionStorage
    if (email === usuarioSalvo.email && senha === usuarioSalvo.senha) {
      // Se email e senha estiverem corretos, login é aceito
      alert("Login realizado com sucesso!");
  
      // Salva os dados novamente (opcional, mas você está mantendo a consistência)
      sessionStorage.setItem("usuario", JSON.stringify(usuarioSalvo));
      sessionStorage.setItem("nomeUsuario", usuarioSalvo.nome);
      sessionStorage.setItem("logado", "true"); // Marca que o usuário está logado
  
      // Redireciona o usuário para a página inicial
      window.location.href = "index.html";
    } else {
      // Se e-mail ou senha estiverem errados, mostra erro
      alert("E-mail ou senha incorretos.");
    }
  }
  
  // Aguarda o carregamento completo do HTML da página
  document.addEventListener("DOMContentLoaded", function () {
    // Seleciona o formulário de login pelo ID
    const form = document.getElementById("formLogin");
  
    // Adiciona o evento de submit, associando à função de login
    form.addEventListener("submit", login);
  });
  