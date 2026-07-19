console.log("Portfolio carregado com sucesso!");
// Aguarda o HTML carregar para não dar erro de elemento nulo
document.addEventListener("DOMContentLoaded", () => {
  
  // Substitua 'meuFormulario' pelo ID real do seu <form> no HTML
  const formulario = document.getElementById("meuFormulario");

  formulario.addEventListener("submit", async (evento) => {
    evento.preventDefault(); // Impede a página de recarregar

    // Captura os dados digitados nos inputs do HTML de forma automática
    const dados = new FormData(formulario);
    const objetoDados = Object.fromEntries(dados);

    // Envia para o Formspree
    // IMPORTANTE: Mude o final da URL abaixo para o SEU ID do Formspree
    const resposta = await fetch("https://formspree.io/f/xykrwvev", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(objetoDados)
    });

    if (resposta.ok) {
      alert("Mensagem enviada com sucesso!");
      formulario.reset(); // Limpa os campos do formulário
    } else {
      alert("Erro ao enviar. Verifique os dados.");
    }
  });

});
