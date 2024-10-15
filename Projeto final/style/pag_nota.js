function calcularNotas() {
    // Coletando as notas
    const notas = [
        parseFloat(document.getElementById("nota1").value) || 0,
        parseFloat(document.getElementById("nota2").value) || 0,
        parseFloat(document.getElementById("nota3").value) || 0,
        parseFloat(document.getElementById("nota4").value) || 0,
        parseFloat(document.getElementById("nota5").value) || 0,
        parseFloat(document.getElementById("nota6").value) || 0
    ];

    const media = notas.reduce((a, b) => a + b, 0) / notas.length;

    const resultBody = document.getElementById("resultBody");
    resultBody.innerHTML = ""; // Limpa os resultados anteriores

    // Mostrando resultados
    notas.forEach((nota, index) => {
        const status = nota >= 6 ? "Aprovado" : "Reprovado";
        resultBody.innerHTML += `
            <tr>
                <td>Disciplina ${index + 1}</td>
                <td>${nota.toFixed(1)}</td>
                <td>${status}</td>
            </tr>
        `;
    });

    // Adicionando a média final
    resultBody.innerHTML += `
        <tr>
            <td><strong>Média Geral</strong></td>
            <td><strong>${media.toFixed(1)}</strong></td>
            <td>${media >= 6 ? "Aprovado" : "Reprovado"}</td>
        </tr>
    `;
}

function zerarNotas() {
    document.getElementById("gradeForm").reset(); // Reseta o formulário
    document.getElementById("resultBody").innerHTML = ""; // Limpa os resultados
}