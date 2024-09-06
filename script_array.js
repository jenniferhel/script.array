const tarefas = ['Estudar', "cozimhar", "Ler"]

const Listadetarefas =document.getElementById('lista-tarefa')

tarefas.forEach(function(tarefa){
    const itemlista = document.createElement('li');

    itemlista.texxtcontent =tarefa;

    Lista_html.appendChild(itemLista)
})

