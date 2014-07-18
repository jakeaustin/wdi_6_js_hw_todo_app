var TodoApp = {
  initialize: function() {
    this.todos = [];
    this.todones = [];
      $('#todo-form').submit(this.createTodo);
  },
  createTodo: function(event) {
    event.preventDefault();
    var userIn = $(this).find('input').val();
    var time = new Date();
    var finished = false;


    //sets done to true, moves item into todones list
    //does NOT remove item from todo list
    //items need coplete & delete link accompany in li
    var complete = function() {
      this.done = true;
      TodoApp.todones.push(this);
      var newItem = $('<li>').text(this.what);
      $('#todones-list').append(newItem);

      TodoApp.todos.splice(TodoApp.todos.indexOf(this.what), 1);
    };

    //doing nothing
    var _delete = function() {
      console.log(this);
    };

    //items need coplete & delete link accompany in li
    var newTodo = { what: userIn, when: time, done: finished, complete: complete };
    var newItem = $('<li>').text(newTodo.what);
    $('#todos-list').append(newItem);

    TodoApp.todos.push(newTodo);
   }

};

