window.setTimeout(function() {
    var todos = [];
    var newTodo = "";

    var input = prompt("What would you like to do?");

    while(input !== "quit") {
        if(input === "list") {
            listTodos();
        } else if(input === "new") {
            addTodo();
        } else if(input === "delete") {
            deleteTodo();
        }
        input = prompt("What would you like to do?");
    }


    function listTodos() {
        console.log("**********");
        todos.forEach(function(element, index) {
            console.log(index+1 + ". " + element);
        });
        console.log("**********");
      }
    
      function addTodo() {
          //ask for new todo
          newTodo = prompt("Enter new todo");
          //add to todos array
          todos.push(newTodo); 
          console.log("Added \"" + newTodo + "\" to Todo list.");
      }
    
      function deleteTodo() {
        var index = prompt("Enter number on list you want to delete");
        todos.splice(index-1, 1);
        console.log("Deleted \"" + newTodo + "\" from Todo list.");
      }

    console.log("You quit the app");
  }, 500);