var TodoApp = {
  initialize: function() {
    this.todos = [];
      $('#todo-form').submit(this.createTodo);
  },
  createTodo: function(event) {
    event.preventDefault();
    var userIn = $(this).find('input').val();
    var time = new Date();
    var completed = false;

    var newTodo = { what: userIn, when: time, done: completed };
    var newItem = $('<li>').text(newTodo.what);
    $('#todos-list').append(newItem);

    TodoApp.todos.push(newTodo);
   }
};

