 //navegação entre seções
 document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      document.querySelectorAll('.content-section').forEach(section => section.style.display = 'none');
      target.style.display = 'block';
  });
});
// Inicialmente, apenas a seção de informações será exibida
document.getElementById('informacoes').style.display = 'block';

//login
function handleLogin(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;

  // Validação simples de email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
      alert("Por favor, insira um email válido.");
      return;
  }

  // Redirecionar para a página do AVA se o email for válido
  window.location.href = 'projeto.html';
}