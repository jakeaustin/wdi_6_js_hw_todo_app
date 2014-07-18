var TodoItem = function(title){
  this.done = false;
  this.title = title;
  this.createdAt = Date.now();
};

TodoItem.prototype = {

    complete: function() {
      this.done = true;
    },

    //doing nothing
    delete: function() {
      console.log(this);
    },

    createTodoLi: function(id) {
      var completeButton = $('<button>').text('Finished');
      completeButton.attr("data-id", id);
      completeButton.attr("class", 'complete');
      var deleteButton = $('<button>').text('Remove');
      deleteButton.attr("data-id", id);
      deleteButton.attr("class", 'delete');

      var newItem = $('<li>').text(this.title);
      newItem.attr("data-id", id);
   //   newItem.attr("data-time", this.createdAt);
      newItem.attr("data-status", this.done);
      newItem.append(completeButton);
      newItem.append(deleteButton);

      return newItem;
    },

    createTodoneLi: function(id) {
      var deleteButton = $('<button>').text('Remove');
      deleteButton.attr("data-id", id);
      deleteButton.attr("class", 'delete');

      var newItem = $('<li>').text(this.title);
      newItem.attr("data-id", id);
   //   newItem.attr("data-time", this.createdAt);
      newItem.attr("data-status", this.done);
      newItem.append(deleteButton);

      return newItem;
    },
};
