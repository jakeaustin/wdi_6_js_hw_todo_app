var TodoApp = {
  initialize: function() {
    this.todos = [];
    $('#todo-form').submit(TodoApp.createTodo);
    $('#todos-list').on('click', 'li .complete', TodoApp.completeItem);
    $('#todos-list').on('click', 'li .delete', TodoApp.deleteItem);
    $('#todones-list').on('click', 'li .delete', TodoApp.deleteItem);

    // need to be specific to complete buttons
    // so that there can be another action for delete buttons
  },

  deleteItem: function(event) {
    event.preventDefault();
    $(this).parent().remove();
  },

  completeItem: function(event) {
    event.preventDefault();

    TodoApp.todos[$(this).attr('data-id')].complete();

    var newItem = TodoApp.todos[$(this).attr('data-id')].createTodoneLi($(this).attr('data-id'));
    $('#todones-list').append(newItem);
    $(this).parent().remove();
  },

  createTodo:  function(event) {
      event.preventDefault();

      if ( $.trim( $(this).find('input').val() ) === '' )
        alert('input is blank');
      else {
        var userIn = $(this).find('input').val();
        var id = TodoApp.todos.length;
        var newTodo = new TodoItem(userIn);

        $('#todos-list').append(newTodo.createTodoLi(id));
        TodoApp.todos.push(newTodo);
      }
   },

};

