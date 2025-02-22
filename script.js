$(document).ready(function() {
    // Função para adicionar a tarefa na lista
    $('#task-form').submit(function(event) {
        event.preventDefault(); // Evita o envio do formulário
        
        // Captura o valor do input
        let taskText = $('#task-input').val();
        
        // Se a tarefa não estiver vazia
        if (taskText.trim() !== '') {
            // Cria um novo item <li> e adiciona à lista
            let newTask = $('<li></li>').text(taskText);
            
            // Adiciona o item à lista
            $('#task-list').append(newTask);
            
            // Limpa o campo de entrada
            $('#task-input').val('');
        }
    });

    // Função para marcar a tarefa como concluída
    $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
