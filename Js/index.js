function mandaZap(mensagem) {
    let texto = mensagem.firstElementChild.innerText;
    let num = prompt("Digite o número a quem deseja enviar: ");
    let mensagemZap = `https://api.whatsapp.com/send?phone=55${num}&text=${texto}`;

    window.open(mensagemZap);
}