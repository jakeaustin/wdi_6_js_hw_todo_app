var TodoItem = function(title){
  //if(title === "") {throw new Error('cannot have blank todo');}
  this.done = false;
  this.title = title;
  this.createdAt = Date.now();
};

TodoItem.prototype = {

    //sets done to true, moves item into todones list
    //does NOT remove item from todo list
    complete: function() {
      this.done = true;
      console.log(this);
    },

    //doing nothing
    delete: function() {
      console.log(this);
    },

    createLi: function(id) {
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
};
