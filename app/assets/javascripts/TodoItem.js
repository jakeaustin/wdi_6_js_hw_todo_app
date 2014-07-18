var TodoItem = function(title){
  this.done = false;
  this.title = title;
  this.createdAt = new Date();
  this.completedAt = 0; // what for default??
};

TodoItem.prototype = {

    complete: function() {
      this.done = true;
      this.completedAt = new Date();
    },

    createTodoLi: function(id) {
      var completeButton = $('<button>').text('Finished');
      completeButton.attr("data-id", id);
      completeButton.attr("class", 'complete btn btn-success');
      var deleteButton = $('<button>').text('Remove');
      deleteButton.attr("data-id", id);
      deleteButton.attr("class", 'delete btn btn-warning');

      var newItem = $('<li>').text(this.title  + ' -created- ' + this.createdAt);
      newItem.attr("data-id", id);
      newItem.attr("data-status", this.done);
      newItem.attr('data-date', this.createdAt);
      newItem.attr('data-name', this.title);
      newItem.append(completeButton);
      newItem.append(deleteButton);

      return newItem;
    },

    createTodoneLi: function(id) {
      var deleteButton = $('<button>').text('Remove');
      deleteButton.attr("data-id", id);
      deleteButton.attr("class", 'delete btn btn-warning');
      var newItem = $('<li>').text(this.title + ' -completed- ' + this.completedAt);
      newItem.attr("data-id", id);
      newItem.attr("data-status", this.done);
      newItem.attr('data-date', this.completedAt);
      newItem.attr('data-name', this.title);
      newItem.append(deleteButton);

      return newItem;
    },
};
