var TodoApp = {
  initialize: function() {
    this.todos = [];
    $('#todo-form').submit(TodoApp.createTodo);
    $('#todos-list').on('click', 'li', TodoApp.completeItem);
  },

  completeItem: function(event) {
    event.preventDefault();
    TodoApp.todos[$(this).attr('data-id')].complete();

    var newItem = TodoApp.todos[$(this).attr('data-id')].createLi($(this).attr('data-id'));
    $('#todones-list').append(newItem);
    console.log($(this));
    $(this).remove();
  },

  createTodo:  function(event) {
      event.preventDefault();

      if ( $.trim( $(this).find('input').val() ) === '' )
        alert('input is blank');
      else {
        var userIn = $(this).find('input').val();
        var id = TodoApp.todos.length;
        var newTodo = new TodoItem(userIn);

        $('#todos-list').append(newTodo.createLi(id));
        TodoApp.todos.push(newTodo);
      }
   },

};

