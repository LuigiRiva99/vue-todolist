const { createApp } = Vue

createApp({
  data() {
    return {
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
  }
}).mount('#app')