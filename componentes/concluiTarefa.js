const BotaoConclui = () => {
    const botaoConclui = document.createElement('button');

    botaoConclui.classList.add('check-button');
    botaoConclui.innerText = "Concluir";
    botaoConclui.addEventListener('click', concluirTarefa);

    return botaoConclui;
}

const concluirTarefa = (evento) =>{ //evento para saber qual elemento clicou
    const botaoConclui = evento.target;

    const tarefaCompleta = botaoConclui.parentElement;

    tarefaCompleta.classList.toggle('done');
}

export default BotaoConclui;