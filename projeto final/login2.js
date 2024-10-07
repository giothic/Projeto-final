const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () => {
    container.classList.add("sign-up-mode");
    });

sign_in_btn.addEventListener('click', () => {
    container.classList.remove("sign-up-mode");
    });

const toggleButton = document.getElementById("toggle-dark-mode");
    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
            if (document.body.classList.contains("dark-mode")) {
                toggleButton.textContent = "Modo Claro";
            } else {
                toggleButton.textContent = "Modo Noturno";
            }
        });

// Função de login
const signInForm = document.getElementById("sign-in-form");
        signInForm.addEventListener("submit", handleLogin);

function handleLogin(event) {
    event.preventDefault(); // Impede o envio do formulário
    const matricula = document.getElementById('matricula').value; // Captura a matrícula

// Validação simples da matrícula
    if (!matricula) {
        alert("Por favor, insira uma matrícula válida.");
    return;
    }

// Redirecionar para a página do AVA se a matrícula for válida
    window.location.href = 'projeto.html'; // Altere para o caminho correto
}