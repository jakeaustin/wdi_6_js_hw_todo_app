var TodoApp = {
  initialize: function() {
    this.todos = [];
    $('#todo-form').submit(TodoApp.createTodo);
    $('#todos-list').on('click', 'li .complete', TodoApp.completeItem);
    $('#todos-list').on('click', 'li .delete', TodoApp.deleteItem);
    $('#todones-list').on('click', 'li .delete', TodoApp.deleteItem);
    $('.create-sort').click(TodoApp.sortByDate);
    $('.name-sort').click(TodoApp.sortByName);

    $('.name-sort').click();
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

  sortByDate: function(event) {
    event.preventDefault();
    //this is a button, want it to be the ol
    var list = $(this).parent();
    var items = list.children('li');

    //todos-list or todones-list
    var listType = list.attr("id");

    list.children('li').remove();

    items.sort(function(a, b) {
      if($(a).attr('data-date') < $(b).attr('data-date'))
        return -1;
      if($(a).attr('data-date') > $(b).attr('data-date'))
        return 1;
      return 0;
    });

    items.each(function(index, item) {
      list.append(item);
    });

  },

  sortByName: function(event) {
    event.preventDefault();
    //stuff....
    var list = $(this).parent();
    var items = list.children('li');

    //todos-list or todones-list
    var listType = list.attr("id");

    //remove all the children

    //create the children (createTodoLI or createTodoneLi)
    list.children('li').remove();

    items.sort(function(a, b) {
      if($(a).attr('data-name') < $(b).attr('data-name'))
        return -1;
      if($(a).attr('data-name') > $(b).attr('data-name'))
        return 1;
      return 0;
    });

    items.each(function(index, item) {
      list.append(item);
    });
  }

};

