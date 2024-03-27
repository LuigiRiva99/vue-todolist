const { createApp } = Vue

createApp({
  data() {
    return {
    inputValue: '',
      todoList : [
        {
            text: 'fare la spesa',
            done: false
        },
        {
            text: 'studiare Vue',
            done: true
        },
        {
            text: 'portare fuori il cane',
            done: false
        },
        {
            text: 'andare in palestra',
            done: false
        },
        {
            text: 'leggere un libro',
            done: true
        },
      ]
    }
  },

  methods : {
    //creo una funzione che mi permette di rimuovere un element dalla todolist
    removeTodo(i) {
        console.log(i);
        this.todoList.splice(i, 1)
    },

    addTodo() {
        this.todoList.push (
            {
                text: this.inputValue,
                done: false
            }
        )
    },

    doneToggle(i) {
        if (this.todoList[i].done === true) {
            this.todoList[i].done = false
        } else {
            this.todoList[i].done = true
        }
    },
  }
}).mount('#app')