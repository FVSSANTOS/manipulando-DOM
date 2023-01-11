const criarTarefa = (evento) => {

    evento.preventDefault();

    const lista = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;

    const tarefa = document.createElement('li');
    tarefa.classList.add('task');

    const conteudo = `<p class="content">${valor}</p>`;

    tarefa.innerHTML = conteudo;

    tarefa.appendChild(botaoConclui());
    lista.appendChild(tarefa);
    input.value = " ";
}

const  novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', criarTarefa);

const botaoConclui = () => {

    const botaoConclui = document.createElement('button');

    botaoConclui.classList.add("check-button");
    botaoConclui.innerText = 'concluir';
    botaoConclui.addEventListener('click', ()=>{
        console.log('fui clicado')
    });

    return botaoConclui;
}
